import React from "react";
import Link from "next/link";
import { Calendar, Clock, Eye, ExternalLink } from "lucide-react";
import { Text } from "./ui/text";
import LikeButton from "./like-button";
import SocialShare from "./social-share";
import OptimizedImage from "./ui/optimized-image";
import MarkdownRenderer from "./markdown-renderer";
import {
  Card,
  CardFooter,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
  is_published: boolean;
  tags: string[] | null;
  views: number;
  likes: number;
  created_at: string;
  updated_at: string;
}

const formatDate = (publishedAt: string | null, createdAt: string) => {
  const source = publishedAt || createdAt;
  return new Date(source).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

const BlogCard = ({ props }: { props: BlogPost }) => {
  const summary =
    props.excerpt ||
    (props.content.length > 160
      ? `${props.content.substring(0, 160)}...`
      : props.content);

  return (
    <Dialog key={props.id}>
      <Card className="group flex h-full flex-col border-2">
        {props.cover_image_url ? (
          <div className="relative aspect-video overflow-hidden border-b-2 border-border bg-muted">
            <OptimizedImage
              src={props.cover_image_url}
              alt={props.title}
              width={420}
              height={220}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={false}
              quality={80}
              placeholder="blur"
            />
          </div>
        ) : (
          <div className="grid aspect-video place-items-center border-b-2 border-border bg-muted">
            <Text
              as="p"
              className="text-xs uppercase tracking-[0.1em] text-muted-foreground"
            >
              No Cover Image
            </Text>
          </div>
        )}

        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(props.published_at, props.created_at)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {Math.max(1, Math.ceil(props.content.length / 200))} min
            </span>
          </div>

          <CardTitle>
            <Text
              as="h3"
              className="line-clamp-2 text-xl font-semibold leading-tight group-hover:text-primary"
            >
              {props.title}
            </Text>
          </CardTitle>

          {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {props.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="border border-border bg-secondary px-2 py-1 text-[10px] uppercase tracking-[0.08em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent className="flex-1">
          <CardDescription>
            <Text
              as="p"
              styleVariant="muted"
              className="line-clamp-4 text-sm leading-relaxed"
            >
              {summary}
            </Text>
          </CardDescription>
        </CardContent>

        <CardFooter className="mt-auto flex flex-col items-stretch gap-3 border-t-2 border-border pt-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" />
              {props.views.toLocaleString()} views
            </span>
            <LikeButton
              blogId={props.id}
              initialLikes={props.likes}
              className="text-xs"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button asChild className="col-span-2">
              <Link href={`/blog/${props.slug}`}>
                Read Article
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </Button>
            <DialogTrigger asChild>
              <Button variant="outline">Preview</Button>
            </DialogTrigger>
          </div>

          <SocialShare
            url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://adhaghani.com"}/blog/${props.slug}`}
            title={props.title}
            description={props.excerpt || undefined}
            variant="button"
            className="h-9"
          />
        </CardFooter>
      </Card>

      <DialogContent className="max-h-[86vh] max-w-4xl overflow-y-auto border-2">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.08em] text-muted-foreground">
            <span>{formatDate(props.published_at, props.created_at)}</span>
            <span>{props.views.toLocaleString()} views</span>
            <span>
              {Math.max(1, Math.ceil(props.content.length / 200))} min read
            </span>
          </div>
          {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="border border-border bg-secondary px-2 py-1 text-[10px] uppercase tracking-[0.08em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </DialogHeader>

        <DialogDescription asChild>
          <div className="max-h-[52vh] overflow-y-auto border-y-2 border-border py-4">
            <MarkdownRenderer
              content={
                props.content.length > 1400
                  ? `${props.content.substring(0, 1400)}...`
                  : props.content
              }
              className="prose prose-sm max-w-none dark:prose-invert text-foreground"
            />
          </div>
        </DialogDescription>

        <DialogFooter className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Button asChild>
            <Link href={`/blog/${props.slug}`}>Read Full Article</Link>
          </Button>
          <SocialShare
            url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://adhaghani.com"}/blog/${props.slug}`}
            title={props.title}
            description={props.excerpt || undefined}
            variant="button"
            className="h-9"
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlogCard;
