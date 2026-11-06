declare const Deno: {
  env: { get(name: string): string | undefined };
  serve(handler: () => Promise<Response>): void;
};

// @ts-ignore Deno resolves this URL import at runtime; TypeScript may not resolve it.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const OPS_INGEST_URL = Deno.env.get("OPS_INGEST_URL")!;
const OPS_INGEST_SECRET = Deno.env.get("OPS_INGEST_SECRET")!;

Deno.serve(async () => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: events, error } = await supabase
    .from("event_outbox")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(50);

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  let delivered = 0, failed = 0;
  for (const ev of events ?? []) {
    const res = await fetch(OPS_INGEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-integration-secret": OPS_INGEST_SECRET,
      },
      body: JSON.stringify(ev),
    });

    if (res.ok) {
      await supabase.from("event_outbox")
        .update({ status: "delivered", delivered_at: new Date().toISOString() })
        .eq("id", ev.id);
      delivered++;
    } else {
      const attempts = ev.attempts + 1;
      await supabase.from("event_outbox").update({
        attempts,
        status: attempts >= 8 ? "failed" : "pending",
      }).eq("id", ev.id);
      failed++;
    }
  }

  return new Response(JSON.stringify({ processed: (events ?? []).length, delivered, failed }));
});