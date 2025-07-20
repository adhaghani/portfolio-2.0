import { getAllTags, getInitialBlogs } from "@/utils/blog-search";
import BlogClient from "@/components/blog-client";

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

export default async function Page() {
  // Fetch initial blogs and available tags
  const [initialBlogs, availableTags] = await Promise.all([
    getInitialBlogs(9), // Load first 9 posts
    getAllTags(),
  ]);

  return (
    <BlogClient initialBlogs={initialBlogs} availableTags={availableTags} />
  );
}
