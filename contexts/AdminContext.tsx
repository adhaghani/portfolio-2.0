"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Admin, AdminSession } from "@/types/admin";
import { AdminAuthClient } from "@/utils/admin-auth-client";

interface AdminContextType {
  session: AdminSession;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AdminSession>({
    isAuthenticated: false,
    admin: null,
    token: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      console.log("AdminContext: Initializing auth...");
      const storedSession = AdminAuthClient.getStoredSession();
      console.log("AdminContext: Stored session:", {
        isAuthenticated: storedSession.isAuthenticated,
        hasToken: !!storedSession.token,
        hasAdmin: !!storedSession.admin,
      });

      if (storedSession.isAuthenticated && storedSession.token) {
        console.log("AdminContext: Verifying token...");
        // Verify token is still valid
        const isValid = await AdminAuthClient.verifyToken();
        console.log("AdminContext: Token verification result:", isValid);

        if (isValid) {
          console.log("AdminContext: Setting authenticated session");
          setSession(storedSession);
        } else {
          console.log("AdminContext: Token invalid, clearing session");
          setSession({ isAuthenticated: false, admin: null, token: null });
        }
      } else {
        console.log("AdminContext: No stored session found");
      }

      setIsLoading(false);
      console.log("AdminContext: Auth initialization complete");
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const result = await AdminAuthClient.login(email, password);

    if (result.success && result.admin) {
      const newSession: AdminSession = {
        isAuthenticated: true,
        admin: result.admin,
        token: AdminAuthClient.getStoredSession().token,
      };
      setSession(newSession);
    }

    return result;
  };

  const logout = async () => {
    await AdminAuthClient.logout();
    setSession({ isAuthenticated: false, admin: null, token: null });
  };

  return (
    <AdminContext.Provider value={{ session, login, logout, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
