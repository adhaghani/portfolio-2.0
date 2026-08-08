import { MDXRemote } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

import { mdxComponents } from "@/components/mdx-components"
import { cn } from "@/lib/utils"

export function MarkdownContent({
  source,
  className,
}: {
  source: string
  className?: string
}) {
  return (
    <div className={cn("mdx-prose", className)}>
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [
                rehypePrettyCode,
                { theme: "github-dark-default", keepBackground: false },
              ],
            ],
          },
        }}
      />
    </div>
  )
}
