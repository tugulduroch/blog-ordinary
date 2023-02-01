import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (

//TODO https://www.youtube.com/watch?v=1q5oOZE6o4c&ab_channel=AlterClass
    <button
      className="w-20 h-6 bg-blue-100 mr-5 rounded-md dark:bg-slate-700 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <MoonIcon className="text-blue-500 w-5 h-5" />
      ) : (
        <SunIcon className="text-blue-400 w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggler;