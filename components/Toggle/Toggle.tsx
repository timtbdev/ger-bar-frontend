import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Button() {
  const [toggle, setToggle] = useState("dark");
  const { theme, setTheme } = useTheme();

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      setToggle("light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      setToggle("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
      setToggle("light");
    } else {
      setTheme("dark");
      setToggle("dark");
    }
  }, [theme]);

  return (
    <Switch
      as="button"
      checked={toggle === "dark" ? true : false}
      onChange={handleOnClick}
      className={`${
        toggle === "dark" ? "bg-lime-600" : "bg-gray-200"
      }               bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
`}
    >
      <span className="sr-only">Turn on or off dark mode</span>

      <span
        className={`${
          toggle === "dark" ? "translate-x-5" : "translate-x-0"
        } translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
      />
    </Switch>
  );
}
