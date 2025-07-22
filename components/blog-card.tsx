import React from "react";
import Link from "next/link";
import { Text } from "./ui/text";
import LikeButton from "./like-button";
import SocialShare from "./social-share";
import OptimizedImage from "./ui/optimized-image";
import { Calendar, Eye, Clock } from "lucide-react";
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

const BlogCard = ({ props }: { props: BlogPost }) => {
  return (
    <Dialog>
      <Card className="h-full group transition-all duration-300 overflow-hidden">
        {/* Cover Image */}
        {props.cover_image_url ? (
          <div className="aspect-video overflow-hidden rounded-t-lg bg-muted/30 relative group-hover:bg-muted/50 transition-colors duration-300">
            <OptimizedImage
              src={props.cover_image_url}
              alt={props.title}
              width={400}
              height={225}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              priority={false}
              quality={80}
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-muted via-muted/50 to-muted border rounded-t-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 text-center px-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <Text as="p" styleVariant="muted" className="text-sm font-medium">
                {props.title}
              </Text>
            </div>
          </div>
        )}

        <CardHeader className="space-y-3">
          <div className="space-y-3">
            <CardTitle>
              <Text
                as="h3"
                className="line-clamp-2 group-hover:text-primary transition-colors text-lg font-semibold leading-tight"
              >
                {props.title}
              </Text>
            </CardTitle>

            {/* Tags */}
            {props.tags && props.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {props.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-primary/5 border border-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/10 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
                {props.tags.length > 3 && (
                  <span className="px-2.5 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border">
                    +{props.tags.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 px-6 py-0">
          <CardDescription>
            <Text
              as="p"
              styleVariant="muted"
              className="line-clamp-3 text-sm leading-relaxed"
            >
              {props.excerpt ||
                (props.content.length > 120
                  ? `${props.content.substring(0, 120)}...`
                  : props.content)}
            </Text>
          </CardDescription>
        </CardContent>

        <CardFooter className="pt-4 px-6 pb-6">
          <div className="w-full space-y-4">
            {/* Stats and Date */}
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <div className="flex gap-4 items-center">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  {props.views.toLocaleString()}
                </span>
                <LikeButton
                  blogId={props.id}
                  initialLikes={props.likes}
                  className="text-xs"
                />
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <time>
                  {props.published_at
                    ? new Date(props.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : new Date(props.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                </time>
              </div>
            </div>

            {/* Reading Time Estimate */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {Math.max(1, Math.ceil(props.content.length / 200))} min read
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link href={`/blog/${props.slug}`} className="flex-1">
                <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md">
                  Read More
                </button>
              </Link>

              <DialogTrigger asChild>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md">
                  Preview
                </button>
              </DialogTrigger>

              <SocialShare
                url={`${
                  process.env.NEXT_PUBLIC_SITE_URL || "https://adhaghani.com"
                }/blog/${props.slug}`}
                title={props.title}
                description={props.excerpt || undefined}
                variant="icon"
                className="h-9 w-9 rounded-lg hover:shadow-md transition-all duration-200"
              />
            </div>
          </div>
        </CardFooter>
      </Card>

      {/* Dialog Content for Preview */}
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          {props.cover_image_url && (
            <div className="aspect-video overflow-hidden rounded-lg mb-4 bg-muted/30">
              <OptimizedImage
                src={props.cover_image_url}
                alt={props.title}
                width={800}
                height={450}
                className="object-cover w-full h-full"
                priority={true}
                quality={85}
                placeholder="blur"
              />
            </div>
          )}

          <DialogTitle>
            <Text as="h2">{props.title}</Text>
          </DialogTitle>

          <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
            <time>
              Published on{" "}
              {props.published_at
                ? new Date(props.published_at).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : new Date(props.created_at).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
            </time>
            <div className="flex gap-4 items-center">
              <span>👀 {props.views.toLocaleString()} views</span>
              <LikeButton blogId={props.id} initialLikes={props.likes} />
            </div>
          </div>

          {/* Tags in dialog */}
          {props.tags && props.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-card border text-primary text-sm rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </DialogHeader>

        <DialogDescription asChild>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <div className="whitespace-pre-wrap leading-relaxed text-foreground">
              {props.content}
            </div>
          </div>
        </DialogDescription>

        <DialogFooter className="mt-6">
          <div className="flex gap-2 w-full">
            <Link href={`/blog/${props.slug}`} className="flex-1">
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors">
                Read Full Article
              </button>
            </Link>
            <SocialShare
              url={`${
                process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"
              }/blog/${props.slug}`}
              title={props.title}
              description={props.excerpt || undefined}
              variant="button"
              className="h-10"
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BlogCard;
