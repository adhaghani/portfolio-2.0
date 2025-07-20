import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "./ui/text";
import LikeButton from "./like-button";
import SocialShare from "./social-share";
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
      <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
        {/* Cover Image */}
        {props.cover_image_url ? (
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <Image
              src={props.cover_image_url}
              alt={props.title}
              width={400}
              height={225}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="aspect-video bg-card border rounded-t-lg flex items-center justify-center">
            <Text as="p" styleVariant="muted" className="text-center px-4">
              📝 {props.title}
            </Text>
          </div>
        )}

        <CardHeader>
          <div className="space-y-2">
            <CardTitle>
              <Text
                as="h3"
                className="line-clamp-2 group-hover:text-primary transition-colors"
              >
                {props.title}
              </Text>
            </CardTitle>

            {/* Tags */}
            {props.tags && props.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {props.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-card border text-primary text-xs rounded-md font-medium"
                  >
                    #{tag}
                  </span>
                ))}
                {props.tags.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                    +{props.tags.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <CardDescription>
            <Text as="p" styleVariant="muted" className="line-clamp-3">
              {props.excerpt ||
                (props.content.length > 120
                  ? `${props.content.substring(0, 120)}...`
                  : props.content)}
            </Text>
          </CardDescription>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="w-full space-y-3">
            {/* Stats and Date */}
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <div className="flex gap-3 items-center">
                <span className="flex items-center gap-1">
                  👀 {props.views.toLocaleString()}
                </span>
                <LikeButton
                  blogId={props.id}
                  initialLikes={props.likes}
                  className="text-xs"
                />
              </div>
              <time className="text-xs">
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

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link href={`/blog/${props.slug}`} className="flex-1">
                <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Read More
                </button>
              </Link>

              <DialogTrigger asChild>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Preview
                </button>
              </DialogTrigger>

              <SocialShare
                url={`${
                  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"
                }/blog/${props.slug}`}
                title={props.title}
                description={props.excerpt || undefined}
                variant="icon"
                className="h-9 w-9"
              />
            </div>
          </div>
        </CardFooter>
      </Card>

      {/* Dialog Content for Preview */}
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          {props.cover_image_url && (
            <div className="aspect-video overflow-hidden rounded-lg mb-4">
              <Image
                src={props.cover_image_url}
                alt={props.title}
                width={800}
                height={450}
                className="object-cover w-full h-full"
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
