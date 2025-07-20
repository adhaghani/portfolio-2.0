-- Check what's in the admin table
SELECT id, email, password_hash, name, is_active, created_at 
FROM public.admins 
WHERE email = 'adhaghani@gmail.com';

-- Also check if there are any other admin records
SELECT email, password_hash, is_active FROM public.admins;
