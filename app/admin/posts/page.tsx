"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/contexts/AdminContext";
import { createClient } from "@/utils/supabase/client";
import PostsManagement from "@/components/admin/posts-management";
import { Loader2 } from "lucide-react";

export default function PostsPage() {
  const { session, isLoading } = useAdmin();
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !session.isAuthenticated) {
      router.push("/admin/login");
      return;
    }

    if (session.isAuthenticated) {
      fetchPosts();
    }
  }, [session, isLoading, router]);

  const fetchPosts = async () => {
    try {
      const supabase = createClient();

      const { data: posts, error } = await supabase
        .from("blogs")
        .select(
          "id, title, slug, is_published, created_at, updated_at, views, likes, tags"
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
        setError("Unable to load posts. Please try again later.");
      } else {
        setPosts(posts || []);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Unable to load posts. Please try again later.");
    } finally {
      setDataLoading(false);
    }
  };

  if (isLoading || dataLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading posts...</span>
        </div>
      </div>
    );
  }

  if (!session.isAuthenticated || !session.admin) {
    return null;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-2">Error Loading Posts</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return <PostsManagement posts={posts} adminEmail={session.admin.email} />;
}
