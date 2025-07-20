"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/contexts/AdminContext";
import CreatePostForm from "@/components/admin/create-post-form";
import { Loader2 } from "lucide-react";

export default function NewPostPage() {
  const { session, isLoading } = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session.isAuthenticated) {
      router.push("/admin/login");
    }
  }, [session, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (!session.isAuthenticated || !session.admin) {
    return null;
  }

  return <CreatePostForm adminEmail={session.admin.email} />;
}
