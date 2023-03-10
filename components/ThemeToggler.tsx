import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (

    <button
      className="w-20 h-6 mr-5 bg-slate-200 dark:bg-slate-800 rounded-md flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="text-cyan-700 w-5 h-5" />
      ) : (
        <SunIcon className="text-sky-500 w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggler;