
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';

import { researchData, type researchPostData } from '../researchData';
import ResearchPostClient from '@/components/ResearchPost';
import ResearchSidebar from '@/components/ResearchSidebar';
import { autoLinkContent, generateLinksFromPosts } from '@/lib/autoLinkContent';
import { internalLinks } from '@/lib/internalLinks';

interface PageProps {
  params: Promise<{ id: string }>;
}

function getPost(id: string): researchPostData | undefined {
  return researchData[id];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function buildDescription(post: researchPostData): string {
  if (post.excerpt) return post.excerpt.slice(0, 160);
  return stripHtml(post.content).slice(0, 160);
}

function articleSchema(post: researchPostData, id: string) {
  const image = post.image || 'https://murivest.com/default-research-image.webp';
  const description = buildDescription(post);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description,
    image,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://murivest.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Murivest Group Ltd',
      url: 'https://murivest.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://murivest.com/logo.webp',
      },
    },
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://murivest.com/research/${id}`,
    },
    articleSection: post.category,
    keywords: post.tags?.join(', ') || post.category,
    inLanguage: 'en-KE',
    url: `https://murivest.com/research/${id}`,
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    return { title: 'Article Not Found | Murivest Group Ltd' };
  }

  const description = buildDescription(post);
  const image = post.image || 'https://murivest.com/default-research-image.webp';
  const url = `https://murivest.com/research/${id}`;

  return {
    title: `${post.title} | Murivest Group Ltd`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: 'Murivest Group Ltd',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [image],
      site: '@murivest',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

export default async function researchPostPage({
  params,
}: PageProps) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    notFound();
  }

  // Build allPosts array for sidebar + dynamic link generation
  const allPosts = Object.entries(researchData).map(([slug, data]) => ({
    slug,
    title: data.title,
    excerpt: data.excerpt || stripHtml(data.content).slice(0, 120),
    coverImage: data.image || 'https://murivest.com/default-research-image.webp',
    category: data.category,
    tags: data.tags || [],
  }));

  // Generate dynamic links from all posts
  const dynamicLinks = generateLinksFromPosts(allPosts);

  // Combine static + dynamic links, remove duplicates
  const allLinks = [...internalLinks, ...dynamicLinks];

  const uniqueLinks = Array.from(
    new Map(
      allLinks.map((l) => [
        `${l.keyword.toLowerCase()}-${l.href}`,
        l,
      ])
    ).values()
  );

  // Apply auto-linking to content
  const linkedContent = autoLinkContent(post.content, uniqueLinks, {
    maxLinks: 6,
    skipHeadings: true,
    skipExistingLinks: true,
    caseInsensitive: true,
  });

  // Create linked post object
  const linkedPost = {
    ...post,
    content: linkedContent,
  };

  // Related posts
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== id &&
        (p.category === post.category ||
          p.tags.some((tag) => post.tags?.includes(tag))
        )
    )
    .slice(0, 4);

  // Popular posts
  const popularPosts = allPosts
    .filter((p) => p.slug !== id)
    .slice(0, 5);

  return (
    <>
      <Script
        id={`article-schema-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(post, id)),
        }}
      />

      {/* TOP NAVIGATION */}
      <div
        style={{
          borderBottom: '1px solid #E2DDD6',
          background: '#FAFAF8',
        }}
      >
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '18px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Link
            href="/kenya/research"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#7B6C55',
              textDecoration: 'none',
              fontFamily: 'Georgia, serif',
            }}
          >
            <ArrowLeft
              style={{ width: '14px', height: '14px' }}
              strokeWidth={1.5}
            />
            Back to Journal
          </Link>

          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              color: '#9B8F7E',
              fontFamily: 'Georgia, serif',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/"
              style={{
                color: '#9B8F7E',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>

            <ChevronRight style={{ width: '10px', height: '10px' }} />

            <Link
              href="/research"
              style={{
                color: '#9B8F7E',
                textDecoration: 'none',
              }}
            >
              Research
            </Link>

            <ChevronRight style={{ width: '10px', height: '10px' }} />

            <span
              style={{
                color: '#6B6259',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '180px',
              }}
            >
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-[minmax(0,1fr)_340px]
            lg:items-start
          "
        >
          {/* ARTICLE */}
          <article className="min-w-0 overflow-hidden">
            <ResearchPostClient post={linkedPost} />
          </article>

          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block">
            <ResearchSidebar
              relatedPosts={relatedPosts}
              popularPosts={popularPosts}
            />
          </aside>
        </div>

        {/* MOBILE SIDEBAR */}
        <div className="mt-14 space-y-10 lg:hidden bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 p-4 z-50">
          <ResearchSidebar
            relatedPosts={relatedPosts.slice(0, 2)}
            popularPosts={popularPosts.slice(0, 3)}
          />
        </div>
      </div>
    </>
  );
}
