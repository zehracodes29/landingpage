'use client';
import { useTheme } from '@/components/ThemeProvider';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />;

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setTimeout(() => {
      const isDark = document.documentElement.classList.contains('dark');
      console.log('Is dark mode active?', isDark);
      console.log('HTML classes:', document.documentElement.className);
    }, 10);
  };

  return (
    <button
      onClick={handleToggle}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
