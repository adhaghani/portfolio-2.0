"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Eye, Plus, X, Trash2 } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  tags: string[] | null;
  is_published: boolean;
  views: number;
  likes: number;
  created_at: string;
  updated_at: string;
}

interface EditPostFormProps {
  post: BlogPost;
  adminEmail: string;
}

export default function EditPostForm({ post, adminEmail }: EditPostFormProps) {
  const [formData, setFormData] = useState({
    title: post.title,
    slug: post.slug,
    content: post.content,
    excerpt: post.excerpt || "",
    coverImageUrl: post.cover_image_url || "",
    metaTitle: post.meta_title || "",
    metaDescription: post.meta_description || "",
    tags: post.tags || [],
    isPublished: post.is_published,
  });

  const [newTag, setNewTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Auto-generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      metaTitle: title.length <= 60 ? title : prev.metaTitle,
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/admin/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          slug: formData.slug,
          content: formData.content,
          excerpt: formData.excerpt || null,
          cover_image_url: formData.coverImageUrl || null,
          meta_title: formData.metaTitle || null,
          meta_description: formData.metaDescription || null,
          tags: formData.tags.length > 0 ? formData.tags : null,
          is_published: formData.isPublished,
          published_at:
            formData.isPublished && !post.is_published
              ? new Date().toISOString()
              : post.is_published
              ? post.created_at
              : null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update post");
      }

      router.push("/admin/posts");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (
      !confirm(
        `Are you sure you want to delete "${post.title}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    setDeleting(true);
    setError("");

    try {
      const response = await fetch(`/api/admin/posts/${post.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete post");
      }

      router.push("/admin/posts");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background mt-24">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/posts">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Posts
                </Button>
              </Link>
              <div>
                <Text as="h1" className="text-2xl font-bold">
                  Edit Post
                </Text>
                <Text as="p" styleVariant="muted">
                  Logged in as {adminEmail}
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {post.is_published && (
                <Link href={`/blog/${post.slug}`} target="_blank">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Post
                  </Button>
                </Link>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={handleDelete}
                disabled={deleting}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                {deleting ? "Deleting..." : "Delete"}
              </Button>
              <Button
                type="submit"
                form="edit-post-form"
                disabled={loading || !formData.title.trim()}
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? "Saving..." : "Update Post"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <form id="edit-post-form" onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-4">
                <Text as="p" styleVariant="muted" className="text-red-600">
                  {error}
                </Text>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Title *
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter post title..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Slug *
                    </label>
                    <Input
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          slug: e.target.value,
                        }))
                      }
                      placeholder="post-url-slug"
                      required
                    />
                    <Text as="p" styleVariant="muted" className="text-sm mt-1">
                      URL: /blog/{formData.slug}
                    </Text>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Excerpt
                    </label>
                    <Textarea
                      value={formData.excerpt}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          excerpt: e.target.value,
                        }))
                      }
                      placeholder="Brief description of the post..."
                      rows={3}
                    />
                    <Text as="p" styleVariant="muted" className="text-sm mt-1">
                      {formData.excerpt.length}/160 characters (recommended for
                      SEO)
                    </Text>
                  </div>
                </CardContent>
              </Card>

              {/* Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Post Content *
                    </label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          content: e.target.value,
                        }))
                      }
                      placeholder="Write your blog post content here... You can use Markdown formatting."
                      rows={20}
                      required
                    />
                    <Text as="p" styleVariant="muted" className="text-sm mt-1">
                      Supports Markdown formatting. {formData.content.length}{" "}
                      characters.
                    </Text>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Post Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Post Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Created:</span>
                    <span>
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>
                      {new Date(post.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Views:</span>
                    <span>{post.views || 0}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Likes:</span>
                    <span>{post.likes || 0}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Publish Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text as="p" className="font-medium">
                        Published
                      </Text>
                      <Text as="p" styleVariant="muted" className="text-sm">
                        Make this post visible to readers
                      </Text>
                    </div>
                    <Switch
                      checked={formData.isPublished}
                      onCheckedChange={(checked: boolean) =>
                        setFormData((prev) => ({
                          ...prev,
                          isPublished: checked,
                        }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Cover Image */}
              <Card>
                <CardHeader>
                  <CardTitle>Cover Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Image URL
                    </label>
                    <Input
                      value={formData.coverImageUrl}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          coverImageUrl: e.target.value,
                        }))
                      }
                      placeholder="https://example.com/image.jpg"
                    />
                    <Text as="p" styleVariant="muted" className="text-sm mt-1">
                      Recommended: 1200x630px for social sharing
                    </Text>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag..."
                      onKeyPress={(e) =>
                        e.key === "Enter" && (e.preventDefault(), addTag())
                      }
                    />
                    <Button type="button" onClick={addTag} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-1 hover:text-red-500"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* SEO Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Meta Title
                    </label>
                    <Input
                      value={formData.metaTitle}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          metaTitle: e.target.value,
                        }))
                      }
                      placeholder="SEO title (leave empty to use post title)"
                    />
                    <Text as="p" styleVariant="muted" className="text-sm mt-1">
                      {formData.metaTitle.length}/60 characters
                    </Text>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Meta Description
                    </label>
                    <Textarea
                      value={formData.metaDescription}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          metaDescription: e.target.value,
                        }))
                      }
                      placeholder="SEO description (leave empty to use excerpt)"
                      rows={3}
                    />
                    <Text as="p" styleVariant="muted" className="text-sm mt-1">
                      {formData.metaDescription.length}/160 characters
                    </Text>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
