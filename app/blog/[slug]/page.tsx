import { createClient } from "@/utils/supabase/server";
import { Text } from "@/components/ui/text";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LikeButton from "@/components/like-button";
import SocialShare from "@/components/social-share";
import OptimizedImage from "@/components/ui/optimized-image";
import MarkdownRenderer from "@/components/markdown-renderer";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
  is_published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  tags: string[] | null;
  views: number;
  likes: number;
  created_at: string;
  updated_at: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const supabase = await createClient();

  const { data: blog } = await supabase
    .from("blogs")
    .select(
      "title, meta_title, meta_description, excerpt, cover_image_url, published_at, tags"
    )
    .eq("slug", resolvedParams.slug)
    .eq("is_published", true)
    .single();

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const title = blog.meta_title || blog.title;
  const description = blog.meta_description || blog.excerpt || "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
  const postUrl = `${siteUrl}/blog/${resolvedParams.slug}`;
  const imageUrl = blog.cover_image_url || `${siteUrl}/og-default.jpg`;

  return {
    title,
    description,
    keywords: blog.tags?.join(", "),
    authors: [{ name: "Ahmad Adha" }],
    creator: "Ahmad Adha",
    publisher: "Ahmad Adha Portfolio",
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description,
      url: postUrl,
      siteName: "Ahmad Adha Portfolio",
      locale: "en_US",
      type: "article",
      publishedTime: blog.published_at || undefined,
      authors: ["Ahmad Adha"],
      tags: blog.tags || [],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@yourhandle", // Replace with your Twitter handle
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const supabase = await createClient();

  const { data: blog } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", resolvedParams.slug)
    .eq("is_published", true)
    .single();

  if (!blog) {
    notFound();
  }

  // Increment view count (you might want to do this client-side to avoid counting bot views)
  await supabase
    .from("blogs")
    .update({ views: blog.views + 1 })
    .eq("id", blog.id);

  return (
    <article className="h-fit">
      {/* Back Button */}
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Cover Image */}
          {blog.cover_image_url && (
            <div className="aspect-video mb-8 overflow-hidden rounded-lg bg-muted/30">
              <OptimizedImage
                src={blog.cover_image_url}
                alt={blog.title}
                width={1200}
                height={675}
                className="object-cover w-full h-full"
                priority={true}
                quality={85}
                placeholder="blur"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <Text as="h1" className="text-4xl md:text-5xl font-bold mb-4">
              {blog.title}
            </Text>

            {blog.excerpt && (
              <Text
                as="p"
                className="text-xl text-muted-foreground mb-6 leading-relaxed"
              >
                {blog.excerpt}
              </Text>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <time>
                Published on{" "}
                {blog.published_at
                  ? new Date(blog.published_at).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : new Date(blog.created_at).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
              </time>
              <span>•</span>
              <span>👀 {(blog.views + 1).toLocaleString()} views</span>
              <span>•</span>
              <LikeButton blogId={blog.id} initialLikes={blog.likes} />
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-card border text-primary text-sm rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share Actions */}
            <div className="flex items-center justify-between mb-8 p-4 bg-card border-2 rounded-lg">
              <div className="flex items-center gap-2">
                <Text as="p" styleVariant="muted" className="text-sm">
                  Found this helpful? Share it with others:
                </Text>
              </div>
              <SocialShare
                url={`${
                  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"
                }/blog/${blog.slug}`}
                title={blog.title}
                description={blog.excerpt || blog.meta_description || undefined}
                variant="button"
              />
            </div>
          </header>

          {/* Article Content */}
          <MarkdownRenderer
            content={blog.content}
            className="prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t">
            {/* Call-to-Action Share Section */}
            <div className="mb-8 p-6 bg-card rounded-lg border-2">
              <div className="text-center space-y-4">
                <Text as="h3" className="text-lg font-semibold">
                  Enjoyed this article?
                </Text>
                <Text as="p" styleVariant="muted">
                  Share it with your network and help others discover valuable
                  insights!
                </Text>
                <div className="flex justify-center gap-4">
                  <SocialShare
                    url={`${
                      process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3001"
                    }/blog/${blog.slug}`}
                    title={blog.title}
                    description={
                      blog.excerpt || blog.meta_description || undefined
                    }
                    variant="button"
                  />
                  <LikeButton blogId={blog.id} initialLikes={blog.likes} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Last updated:{" "}
                {new Date(blog.updated_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Read More Posts
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
