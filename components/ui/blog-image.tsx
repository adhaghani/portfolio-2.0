"use client";

import OptimizedImage from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  size?: "small" | "medium" | "large" | "full";
}

const sizeClasses = {
  small: "max-w-sm",
  medium: "max-w-2xl",
  large: "max-w-4xl",
  full: "max-w-full",
};

const sizeSpecs = {
  small: { width: 384, height: 256 },
  medium: { width: 672, height: 448 },
  large: { width: 896, height: 597 },
  full: { width: 1200, height: 800 },
};

export default function BlogImage({
  src,
  alt,
  caption,
  className,
  priority = false,
  size = "medium",
}: BlogImageProps) {
  const { width, height } = sizeSpecs[size];

  return (
    <figure className={cn("my-8 mx-auto", sizeClasses[size], className)}>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
          priority={priority}
          quality={85}
          placeholder="blur"
          sizes={`(max-width: 640px) 100vw, (max-width: 768px) 90vw, ${width}px`}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
