"use client";

import { usePathname } from "next/navigation";
import { AdminProvider } from "@/contexts/AdminContext";
import AuthGuard from "@/components/admin/auth-guard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Don't apply auth guard to login page
  const isLoginPage = pathname === "/admin/login";

  return (
    <AdminProvider>
      {isLoginPage ? (
        children
      ) : (
        <AuthGuard>
          {children}
        </AuthGuard>
      )}
    </AdminProvider>
  );
}
