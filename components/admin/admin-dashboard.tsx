"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import {
  PlusCircle,
  FileText,
  Eye,
  Heart,
  LogOut,
  Edit,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  is_published: boolean;
  created_at: string;
  views: number;
  likes: number;
}

interface AdminDashboardProps {
  stats: {
    totalPosts: number;
    publishedPosts: number;
    draftPosts: number;
  };
  recentPosts: BlogPost[];
  adminEmail: string;
}

export default function AdminDashboard({
  stats,
  recentPosts,
  adminEmail,
}: AdminDashboardProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-24">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Text as="h1">Blog Administration</Text>
              <Text as="p" styleVariant="muted">
                Welcome back, Adha
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                disabled={loading}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <Text as="h2" className="text-xl font-semibold mb-4">
            Quick Actions
          </Text>
          <div className="flex flex-wrap gap-4">
            <Link href="/admin/posts/new">
              <Button size="lg" className="h-12">
                <PlusCircle className="w-5 h-5 mr-2" />
                Create New Post
              </Button>
            </Link>
            <Link href="/admin/posts">
              <Button variant="outline" size="lg" className="h-12">
                <FileText className="w-5 h-5 mr-2" />
                Manage Posts
              </Button>
            </Link>
            <Link href="/blog" target="_blank">
              <Button variant="outline" size="lg" className="h-12">
                <Eye className="w-5 h-5 mr-2" />
                View Blog
              </Button>
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8">
          <Text as="h2" className="text-xl font-semibold mb-4">
            Statistics
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Total Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalPosts}</div>
                <Text as="p" styleVariant="muted" className="text-sm">
                  All blog posts
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Published
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {stats.publishedPosts}
                </div>
                <Text as="p" styleVariant="muted" className="text-sm">
                  Live posts
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Drafts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {stats.draftPosts}
                </div>
                <Text as="p" styleVariant="muted" className="text-sm">
                  Unpublished
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <Text as="h2" className="text-xl font-semibold">
              Recent Posts
            </Text>
            <Link href="/admin/posts">
              <Button variant="outline" size="sm">
                View All Posts
              </Button>
            </Link>
          </div>
          <Card>
            <CardContent className="p-0">
              {recentPosts.length === 0 ? (
                <div className="p-8 text-center">
                  <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <Text as="h3" className="font-medium mb-2">
                    No posts yet
                  </Text>
                  <Text as="p" styleVariant="muted" className="mb-4">
                    Create your first blog post to get started!
                  </Text>
                  <Link href="/admin/posts/new">
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Create Your First Post
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-4 hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Text as="h3" className="font-medium truncate">
                              {post.title}
                            </Text>
                            <Badge
                              variant={
                                post.is_published ? "default" : "secondary"
                              }
                            >
                              {post.is_published ? "Published" : "Draft"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>
                              {new Date(post.created_at).toLocaleDateString()}
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
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Link href={`/admin/posts/${post.id}/edit`}>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                          </Link>
                          {post.is_published && (
                            <Link href={`/blog/${post.slug}`} target="_blank">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
