"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/contexts/AdminContext";
import { Loader2 } from "lucide-react";

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export default function AuthGuard({ 
  children, 
  redirectTo = "/admin/login" 
}: AuthGuardProps) {
  const { session, isLoading } = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session.isAuthenticated) {
      console.log("AuthGuard: User not authenticated, redirecting to:", redirectTo);
      router.push(redirectTo);
    }
  }, [session.isAuthenticated, isLoading, router, redirectTo]);

  // Show loading spinner while authentication is being checked
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Checking authentication...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show loading spinner while redirecting
  if (!session.isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Redirecting to login...</p>
          </div>
        </div>
      </div>
    );
  }

  // User is authenticated, render the protected content
  return <>{children}</>;
}
