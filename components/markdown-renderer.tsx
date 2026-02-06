"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";
import OptimizedImage from "@/components/ui/optimized-image";
import { useTheme } from "next-themes";
import { useEffect } from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  const { theme } = useTheme();

  useEffect(() => {
    // Dynamically load highlight.js themes based on current theme
    const loadHighlightTheme = async () => {
      // Remove existing highlight.js stylesheets
      const existingLinks = document.querySelectorAll(
        'link[href*="highlight.js"]'
      );
      existingLinks.forEach((link) => link.remove());

      // Load appropriate theme
      const themeFile = theme === "dark" ? "github-dark" : "github";
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${themeFile}.min.css`;
      document.head.appendChild(link);
    };

    loadHighlightTheme();
  }, [theme]);
  return (
    <div
      className={cn("prose prose-lg max-w-none dark:prose-invert", className)}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          // Custom image component with optimization
          img: ({ src, alt}) => {
            if (!src) return null;
            return (
              <OptimizedImage
                src={src as string}
                alt={alt || "Blog image"}
                width={800}
                height={450}
                className="rounded-lg my-6 w-full h-auto"
                quality={85}
                placeholder="blur"
                
              />
            );
          },
          // Custom code block styling
          pre: ({ children, ...props }) => (
            <pre
              className="bg-muted/80 border border-border rounded-lg p-4 overflow-x-auto my-6 text-sm relative group"
              {...props}
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="text-xs text-muted-foreground hover:text-foreground bg-background/80 px-2 py-1 rounded border"
                  onClick={() => {
                    const code = children?.toString() || "";
                    navigator.clipboard.writeText(code);
                  }}
                >
                  Copy
                </button>
              </div>
              {children}
            </pre>
          ),
          // Custom inline code styling
          code: ({ children, className, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code
                  className="bg-muted text-primary px-1.5 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          // Custom heading styles
          h1: ({ children, ...props }) => (
            <h1
              className="text-3xl font-bold tracking-tight mt-8 mb-4 first:mt-0"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              className="text-2xl font-semibold tracking-tight mt-8 mb-4 first:mt-0"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              className="text-xl font-semibold tracking-tight mt-6 mb-3 first:mt-0"
              {...props}
            >
              {children}
            </h3>
          ),
          // Custom link styling
          a: ({ children, href, ...props }) => (
            <a
              href={href}
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              {...props}
            >
              {children}
            </a>
          ),
          // Custom blockquote styling
          blockquote: ({ children, ...props }) => (
            <blockquote
              className="border-l-4 border-primary/30 pl-6 my-6 italic text-muted-foreground bg-muted/30 py-4 rounded-r-lg"
              {...props}
            >
              {children}
            </blockquote>
          ),
          // Custom table styling
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table
                className="w-full border-collapse border border-border rounded-lg"
                {...props}
              >
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }) => (
            <th
              className="border border-border bg-muted/50 px-4 py-2 text-left font-semibold"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="border border-border px-4 py-2" {...props}>
              {children}
            </td>
          ),
          // Custom list styling with task list support
          ul: ({ children, ...props }) => (
            <ul
              className="list-disc list-inside space-y-2 my-4 [&>li]:leading-relaxed"
              {...props}
            >
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol
              className="list-decimal list-inside space-y-2 my-4 [&>li]:leading-relaxed"
              {...props}
            >
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => {
            // Check if this is a task list item
            const childArray = Array.isArray(children) ? children : [children];
            const hasCheckbox = childArray.some(
              (child) =>
                typeof child === "string" && /^\s*\[[\sx]\]/i.test(child)
            );

            if (hasCheckbox) {
              return (
                <li
                  className="list-none leading-relaxed flex items-start gap-2"
                  {...props}
                >
                  {children}
                </li>
              );
            }

            return (
              <li className="leading-relaxed" {...props}>
                {children}
              </li>
            );
          },
          // Custom paragraph styling
          p: ({ children, ...props }) => (
            <p className="leading-relaxed my-4 text-foreground" {...props}>
              {children}
            </p>
          ),
          // Custom horizontal rule
          hr: ({ ...props }) => (
            <hr className="border-border my-8" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
