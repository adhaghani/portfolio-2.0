// Admin types
export interface Admin {
  id: string;
  email: string;
  name: string;
  role: string;
  is_active: boolean;
  last_login: string | null;
  created_at: string;
  updated_at: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  admin?: Admin;
  token?: string;
  message?: string;
}

export interface AdminSession {
  isAuthenticated: boolean;
  admin: Admin | null;
  token: string | null;
}
