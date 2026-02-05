"use client";

import { useEffect, useState } from "react";
import { useAdmin } from "@/contexts/AdminContext";
import { createClient } from "@/utils/supabase/client";
import EditPostForm from "@/components/admin/edit-post-form";
import { Loader2 } from "lucide-react";

export default function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { session } = useAdmin();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any>(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null
  );

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    // Since AuthGuard ensures we're authenticated, we can directly fetch when params are ready
    if (resolvedParams) {
      fetchPost();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedParams]);

  const fetchPost = async () => {
    if (!resolvedParams) return;

    try {
      const supabase = createClient();

      const { data: post, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", resolvedParams.id)
        .single();

      if (error || !post) {
        setError("Post not found");
      } else {
        setPost(post);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error fetching post:", error);
      setError("Unable to load post. Please try again later.");
    } finally {
      setDataLoading(false);
    }
  };

  if (dataLoading || !resolvedParams) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading post...</span>
        </div>
      </div>
    );
  }

  if (!session.isAuthenticated || !session.admin) {
    return null;
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-2">Error</h1>
          <p className="text-muted-foreground">{error || "Post not found"}</p>
        </div>
      </div>
    );
  }

  return <EditPostForm post={post} adminEmail={session.admin.email} />;
}
