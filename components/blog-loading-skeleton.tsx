import React from "react";

interface BlogLoadingSkeletonProps {
  count?: number;
}

export default function BlogLoadingSkeleton({
  count = 6,
}: BlogLoadingSkeletonProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-full bg-card/50 backdrop-blur-sm border-2 border-muted rounded-lg overflow-hidden animate-pulse"
          style={{
            animationDelay: `${index * 100}ms`,
            animationDuration: "2s",
          }}
        >
          {/* Cover Image Skeleton */}
          <div className="aspect-video bg-muted/30 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent -skew-x-12 animate-shimmer"></div>
          </div>

          {/* Content Skeleton */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <div className="space-y-2">
              <div className="h-5 bg-muted/50 rounded-md w-4/5"></div>
              <div className="h-5 bg-muted/30 rounded-md w-2/3"></div>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              <div className="h-6 bg-muted/40 rounded-full w-16"></div>
              <div className="h-6 bg-muted/40 rounded-full w-20"></div>
              <div className="h-6 bg-muted/40 rounded-full w-12"></div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-muted/30 rounded w-full"></div>
              <div className="h-4 bg-muted/30 rounded w-5/6"></div>
              <div className="h-4 bg-muted/30 rounded w-3/4"></div>
            </div>

            {/* Stats */}
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div className="h-4 bg-muted/40 rounded w-12"></div>
                <div className="h-4 bg-muted/40 rounded w-8"></div>
              </div>
              <div className="h-4 bg-muted/40 rounded w-16"></div>
            </div>

            {/* Reading Time */}
            <div className="h-4 bg-muted/30 rounded w-20"></div>

            {/* Buttons */}
            <div className="flex gap-2 pt-2">
              <div className="h-9 bg-muted/50 rounded-lg flex-1"></div>
              <div className="h-9 bg-muted/40 rounded-lg w-20"></div>
              <div className="h-9 w-9 bg-muted/40 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
