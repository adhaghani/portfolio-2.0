"use client";

import { useEffect, useState } from "react";
import { useAdmin } from "@/contexts/AdminContext";
import AdminDashboard from "@/components/admin/admin-dashboard";
import { AdminAuthClient } from "@/utils/admin-auth-client";
import { Loader2 } from "lucide-react";

interface BlogStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
}

interface RecentPost {
  id: string;
  title: string;
  slug: string;
  is_published: boolean;
  created_at: string;
  views: number;
  likes: number;
}

export default function AdminPage() {
  const { session } = useAdmin();
  const [stats, setStats] = useState<BlogStats | null>(null);
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    // Since AuthGuard ensures we're authenticated, we can directly fetch data
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const headers = AdminAuthClient.getAuthHeaders();

      const [statsResponse, postsResponse] = await Promise.all([
        fetch("/api/admin/stats", { headers }),
        fetch("/api/admin/recent-posts", { headers }),
      ]);

      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }

      if (postsResponse.ok) {
        const postsData = await postsResponse.json();
        setRecentPosts(postsData);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setDataLoading(false);
    }
  };

  if (dataLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading admin dashboard...</span>
        </div>
      </div>
    );
  }

  if (!session.isAuthenticated || !session.admin) {
    return null;
  }

  return (
    <AdminDashboard
      stats={stats || { totalPosts: 0, publishedPosts: 0, draftPosts: 0 }}
      recentPosts={recentPosts}
      adminEmail={session.admin.email}
    />
  );
}
