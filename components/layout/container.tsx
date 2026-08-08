import { cn } from "@/lib/utils"

function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}
      {...props}
    />
  )
}

function ArticleContainer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="article-container"
      className={cn("mx-auto w-full max-w-3xl px-6 md:px-10", className)}
      {...props}
    />
  )
}

export { Container, ArticleContainer }
