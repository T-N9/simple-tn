import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { CiDark, CiSun } from "react-icons/ci";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="flex justify-center items-center absolute -right-14">
      {theme === "light" ? (
        <button
          className=" p-3 rounded-full shadow bg-white dark:bg-dark"
          onClick={() => setTheme("dark")}
        >
          <CiDark size={20} />
        </button>
      ) : (
        <button
          className=" p-3 rounded-full shadow bg-white dark:bg-dark"
          onClick={() => setTheme("light")}
        >
          <CiSun size={20} />
        </button>
      )}
    </div>
  );
};

export default ToggleTheme;
