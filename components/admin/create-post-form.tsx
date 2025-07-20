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
import { ArrowLeft, Save, Eye, Plus, X, ImagePlus } from "lucide-react";
import Link from "next/link";
import ImageUpload from "@/components/ui/image-upload";
import { AdminAuthClient } from "@/utils/admin-auth-client";

interface CreatePostFormProps {
  adminEmail: string;
}

export default function CreatePostForm({ adminEmail }: CreatePostFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    coverImageUrl: "",
    metaTitle: "",
    metaDescription: "",
    tags: [] as string[],
    isPublished: false,
  });

  const [newTag, setNewTag] = useState("");
  const [loading, setLoading] = useState(false);
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
      slug: generateSlug(title),
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
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        headers: AdminAuthClient.getAuthHeaders(),
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
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create post");
      }

      const result = await response.json();
      router.push("/admin/posts");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-24">
      {/* Header */}
      <header className="border-b border-border ">
        <div className="container mx-auto px-4 py-4">
          <Link href="/admin">
            <Button variant="ghost" className="mb-4" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <Text as="h1" className="text-2xl font-bold">
                  Create New Post
                </Text>
                <Text as="p" styleVariant="muted">
                  Logged in as {adminEmail}
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="submit"
                form="create-post-form"
                disabled={loading || !formData.title.trim()}
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? "Saving..." : "Save Post"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <form
          id="create-post-form"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
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
                  <ImageUpload
                    value={formData.coverImageUrl}
                    onChange={(url) =>
                      setFormData((prev) => ({
                        ...prev,
                        coverImageUrl: url,
                      }))
                    }
                    label="Cover Image"
                    description="Upload a cover image for your post"
                  />
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
