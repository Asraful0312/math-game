import { useEffect, useState } from "react";
import Stats from "./Stats";
import Modal from "./Modal";
import Tutorial from "./Tutorial";
import { MoonIcon, SunIcon } from "lucide-react";

const Header = ({ setCurrentStep, stats }) => {
  const currentTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(currentTheme || "dark");
  const [isShow, setIsShow] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`flex justify-between py-4 max-w-5xl px-5 mx-auto w-full border-b ${
        theme === "dark" ? "border-white/15 " : "border-gray-300"
      }`}
    >
      <h2
        onClick={() => setCurrentStep(1)}
        className="cursor-pointer text-xl font-bold text-center text-blue-400 logo"
      >
        MG
        <span className="text-xs"> math game</span>
      </h2>

      <div className="flex items-center gap-5">
        <button className="font-medium" onClick={() => setIsShow(true)}>
          Stats💹
        </button>
        <button className="font-medium" onClick={() => setShowTutorial(true)}>
          Tutorial🥸
        </button>

        <button
          className="font-medium"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <MoonIcon className="size-4" />
          ) : (
            <SunIcon className="size-4 text-yellow-500" />
          )}
        </button>
      </div>

      {/*stats modal */}
      <Modal onClick={() => setIsShow(false)} show={isShow}>
        <Stats theme={theme} setIsShow={setIsShow} stats={stats} />
      </Modal>

      <Modal onClick={() => setShowTutorial(false)} show={showTutorial}>
        <Tutorial theme={theme} setShowTutorial={setShowTutorial} />
      </Modal>
    </div>
  );
};

export default Header;
