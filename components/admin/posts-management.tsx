"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Search,
  Plus,
  Edit,
  Eye,
  Trash2,
  Heart,
} from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  views: number;
  likes: number;
  tags: string[] | null;
}

interface PostsManagementProps {
  posts: BlogPost[];
  adminEmail: string;
}

export default function PostsManagement({
  posts,
  adminEmail,
}: PostsManagementProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "published" | "draft"
  >("all");
  const router = useRouter();

  // Filter posts based on search and status
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.slug.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "published" && post.is_published) ||
      (filterStatus === "draft" && !post.is_published);

    return matchesSearch && matchesStatus;
  });

  const handleDeletePost = async (postId: string, postTitle: string) => {
    try {
      const response = await fetch(`/api/admin/posts/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh();
      } else {
        alert("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting the post");
    }
  };

  const togglePublishStatus = async (
    postId: string,
    currentStatus: boolean
  ) => {
    try {
      const response = await fetch(`/api/admin/posts/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_published: !currentStatus,
          published_at: !currentStatus ? new Date().toISOString() : null,
        }),
      });

      if (response.ok) {
        router.refresh();
      } else {
        alert("Failed to update post status");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("An error occurred while updating the post");
    }
  };

  return (
    <div className="min-h-screen mt-24">
      {/* Header */}
      <header className="border-b border-border ">
        <div className="container mx-auto px-4 py-4">
          <Link href="/admin">
            <Button variant="ghost" className="mb-5" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <Text as="h1" className="text-2xl font-bold">
                  Manage Posts
                </Text>
                <Text as="p" styleVariant="muted">
                  {filteredPosts.length} of {posts.length} posts
                </Text>
              </div>
            </div>
            <Link href="/admin/posts/new">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("all")}
                >
                  All ({posts.length})
                </Button>
                <Button
                  variant={filterStatus === "published" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("published")}
                >
                  Published ({posts.filter((p) => p.is_published).length})
                </Button>
                <Button
                  variant={filterStatus === "draft" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("draft")}
                >
                  Drafts ({posts.filter((p) => !p.is_published).length})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts List */}
        {filteredPosts.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Text as="h3" className="font-medium mb-2">
                {searchTerm || filterStatus !== "all"
                  ? "No posts found"
                  : "No posts yet"}
              </Text>
              <Text as="p" styleVariant="muted" className="mb-4">
                {searchTerm || filterStatus !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "Create your first blog post to get started!"}
              </Text>
              {!searchTerm && filterStatus === "all" && (
                <Link href="/admin/posts/new">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Post
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Text
                          as="h3"
                          className="font-semibold text-lg truncate"
                        >
                          {post.title}
                        </Text>
                        <Badge
                          variant={post.is_published ? "default" : "secondary"}
                        >
                          {post.is_published ? "Published" : "Draft"}
                        </Badge>
                      </div>

                      <Text
                        as="p"
                        styleVariant="muted"
                        className="text-sm mb-3"
                      >
                        /blog/{post.slug}
                      </Text>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>
                          Created:{" "}
                          {new Date(post.created_at).toLocaleDateString()}
                        </span>
                        <span>
                          Updated:{" "}
                          {new Date(post.updated_at).toLocaleDateString()}
                        </span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes} likes
                        </div>
                      </div>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      {post.is_published && (
                        <Link href={`/blog/${post.slug}`} target="_blank">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}

                      <Link href={`/admin/posts/${post.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </Link>

                      <Button
                        variant={post.is_published ? "outline" : "default"}
                        size="sm"
                        onClick={() =>
                          togglePublishStatus(post.id, post.is_published)
                        }
                      >
                        {post.is_published ? "Unpublish" : "Publish"}
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Confirm delete post</DialogTitle>
                          </DialogHeader>
                          <Text as="p">
                            are you sure you want to delete this post? Deleting
                            the post will remove it permanently.
                          </Text>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant={"ghost"}>Cancel</Button>
                            </DialogClose>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() =>
                                handleDeletePost(post.id, post.title)
                              }
                            >
                              Confirm
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
