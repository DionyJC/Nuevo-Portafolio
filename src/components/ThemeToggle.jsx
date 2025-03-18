import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
    >
      {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </button>
  );
};

export default ThemeToggle;
