import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme on refresh
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <nav className="flex items-center gap-8 text-lg font-medium ml-auto">

        {/* ABOUT */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600"
              : "text-slate-700 dark:text-slate-200 hover:text-blue-500 transition"
          }
        >
          About
        </NavLink>

        {/* PROJECTS */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600"
              : "text-slate-700 dark:text-slate-200 hover:text-blue-500 transition"
          }
        >
          Projects
        </NavLink>

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="ml-2 w-10 h-10 rounded-full
          flex items-center justify-center
          bg-white dark:bg-slate-800
          shadow-md hover:scale-105 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>
    </header>
  );
};

export default Navbar;
