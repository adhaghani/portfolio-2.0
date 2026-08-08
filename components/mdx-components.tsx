import type { MDXComponents } from "mdx/types"

/**
 * Overrides passed to every <MDXRemote> render.
 *
 * Most prose styling lives in the `.mdx-prose` CSS class (see globals.css),
 * so this object only carries the components that need React behaviour —
 * here, marking external links with `target="_blank"`.
 */
export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => {
    const external = href?.startsWith("http")
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    )
  },
}
