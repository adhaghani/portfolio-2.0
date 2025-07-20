import { cookies } from "next/headers";

// Your admin credentials - CHANGE THESE TO YOUR PREFERRED LOGIN
const ADMIN_EMAIL = "adhaahmad04@gmail.com"; // Change to your email
const ADMIN_PASSWORD = "Newbnewb@123"; // Change to a secure password

export interface AdminSession {
  isAuthenticated: boolean;
  email?: string;
}

export async function getAdminSession(): Promise<AdminSession> {
  const cookieStore = await cookies();
  const adminSession = cookieStore.get("admin-session");

  if (!adminSession) {
    return { isAuthenticated: false };
  }

  try {
    const session = JSON.parse(adminSession.value);
    // Check if session is still valid (24 hours)
    const now = new Date().getTime();
    if (now - session.timestamp > 24 * 60 * 60 * 1000) {
      return { isAuthenticated: false };
    }

    return {
      isAuthenticated: true,
      email: session.email,
    };
  } catch {
    return { isAuthenticated: false };
  }
}

export async function validateAdminCredentials(
  email: string,
  password: string
): Promise<boolean> {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export async function createAdminSession(email: string) {
  const cookieStore = await cookies();
  const session = {
    email,
    timestamp: new Date().getTime(),
  };

  cookieStore.set("admin-session", JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60, // 24 hours
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete("admin-session");
}
