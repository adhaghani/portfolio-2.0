export interface Snippet {
  id: string;
  title: string;
  slug: string;
  description: string;
  language: string;
  code: string;
  tags: string[];
}

export const snippets: Snippet[] = [
  {
    id: "1",
    title: "React useLocalStorage Hook",
    slug: "use-local-storage-hook",
    description: "A custom hook to persist state in localStorage with TypeScript support.",
    language: "typescript",
    tags: ["react", "hooks", "typescript"],
    code: `import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;`,
  },
  {
    id: "2",
    title: "Tailwind CSS Grid Layout",
    slug: "tailwind-grid-layout",
    description: "A responsive grid layout using Tailwind CSS with auto-fit columns.",
    language: "tsx",
    tags: ["tailwind", "css", "layout"],
    code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white p-4 rounded-lg shadow">Item 1</div>
  <div className="bg-white p-4 rounded-lg shadow">Item 2</div>
  <div className="bg-white p-4 rounded-lg shadow">Item 3</div>
  {/* Add more items */}
</div>`,
  },
  {
    id: "3",
    title: "Supabase Client Utility",
    slug: "supabase-client-utility",
    description: "A singleton pattern for initializing Supabase client in Next.js.",
    language: "typescript",
    tags: ["supabase", "nextjs", "database"],
    code: `import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}`,
  },
];
