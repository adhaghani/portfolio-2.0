-- First, create the admin table (run this in Supabase SQL editor)
CREATE TABLE IF NOT EXISTS public.admins (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin' NOT NULL,
    is_active BOOLEAN DEFAULT true NOT NULL,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create RLS policies
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_admins_email ON public.admins(email);
CREATE INDEX IF NOT EXISTS idx_admins_active ON public.admins(is_active);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_admins_updated_at
    BEFORE UPDATE ON public.admins
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert admin user with raw password
INSERT INTO public.admins (email, password, name, role) VALUES 
('adhaghani@gmail.com', 'admin123', 'Ahmad Adha Ghani', 'admin')
ON CONFLICT (email) DO UPDATE SET 
    password = EXCLUDED.password,
    name = EXCLUDED.name,
    is_active = true;

-- Verify the admin was created
SELECT * FROM public.admins WHERE email = 'adhaghani@gmail.com';
