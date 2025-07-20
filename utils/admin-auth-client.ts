import { Admin, AdminSession } from "@/types/admin";

// Client-side admin utilities
export class AdminAuthClient {
  private static readonly TOKEN_KEY = "admin_token";
  private static readonly ADMIN_KEY = "admin_data";

  static getStoredSession(): AdminSession {
    if (typeof window === "undefined") {
      return { isAuthenticated: false, admin: null, token: null };
    }

    try {
      const token = localStorage.getItem(this.TOKEN_KEY);
      const adminData = localStorage.getItem(this.ADMIN_KEY);

      if (token && adminData) {
        const admin: Admin = JSON.parse(adminData);
        return {
          isAuthenticated: true,
          admin,
          token,
        };
      }
    } catch (error) {
      console.error("Error parsing stored admin session:", error);
      this.clearSession();
    }

    return { isAuthenticated: false, admin: null, token: null };
  }

  static setSession(admin: Admin, token: string): void {
    if (typeof window === "undefined") return;

    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.ADMIN_KEY, JSON.stringify(admin));
  }

  static clearSession(): void {
    if (typeof window === "undefined") return;

    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ADMIN_KEY);
  }

  static async login(email: string, password: string) {
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.success && result.admin && result.token) {
        this.setSession(result.admin, result.token);
        return { success: true, admin: result.admin };
      }

      return { success: false, message: result.message || "Login failed" };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: "Network error occurred" };
    }
  }

  static async logout() {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getStoredSession().token}`,
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      this.clearSession();
    }
  }

  static async verifyToken(): Promise<boolean> {
    const session = this.getStoredSession();
    console.log("AdminAuthClient: Verifying token...", {
      hasToken: !!session.token,
    });

    if (!session.token) {
      console.log("AdminAuthClient: No token found");
      return false;
    }

    try {
      console.log(
        "AdminAuthClient: Making verification request to /api/admin/verify"
      );
      const response = await fetch("/api/admin/verify", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      const result = await response.json();
      console.log("AdminAuthClient: Verification response:", {
        status: response.status,
        success: result.success,
        message: result.message,
      });

      if (!result.success) {
        console.log(
          "AdminAuthClient: Token verification failed, clearing session"
        );
        this.clearSession();
        return false;
      }

      console.log("AdminAuthClient: Token verification successful");
      return true;
    } catch (error) {
      console.error("AdminAuthClient: Token verification error:", error);
      this.clearSession();
      return false;
    }
  }

  static getAuthHeaders(): Record<string, string> {
    const session = this.getStoredSession();

    return {
      "Content-Type": "application/json",
      ...(session.token && { Authorization: `Bearer ${session.token}` }),
    };
  }
}
