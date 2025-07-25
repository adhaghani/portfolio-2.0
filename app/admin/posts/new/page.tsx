"use client";

import { useAdmin } from "@/contexts/AdminContext";
import CreatePostForm from "@/components/admin/create-post-form";

export default function NewPostPage() {
  const { session } = useAdmin();

  return <CreatePostForm adminEmail={session.admin?.email || ""} />;
}
