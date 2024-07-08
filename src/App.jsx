import DifficultySelect from "./components/DifficultySelect";
import Warning from "./components/Warning";
import Game from "./components/game/Game";
import { useEffect, useState } from "react";

const steps = { 1: DifficultySelect, 2: Warning, 3: Game };

const App = () => {
  const data = JSON.parse(localStorage.getItem("game"));
  const [currentStep, setCurrentStep] = useState(data?.step || 1);
  const [difficulty, setDifficulty] = useState(data?.difficulty || "");
  const [score, setScore] = useState(data?.score || 0);
  const [loveCount, setLoveCount] = useState(data?.loveCount || 0);
  const [stats, setStats] = useState(
    data?.stats || [
      { d: "Easy", completed: 0, wrong: 0 },
      { d: "Medium", completed: 0, wrong: 0 },
      { d: "Hard", completed: 0, wrong: 0 },
    ]
  );

  const Step = steps[currentStep];

  useEffect(() => {
    localStorage.setItem(
      "game",
      JSON.stringify({ step: currentStep, difficulty, score, loveCount, stats })
    );
  }, [currentStep, difficulty, score, loveCount, stats]);

  return (
    <div className="flex items-center justify-center h-screen px-5">
      <div className="w-full max-w-md mx-auto">
        <Step
          stats={stats}
          setStats={setStats}
          setCurrentStep={setCurrentStep}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setScore={setScore}
          score={score}
          setLoveCount={setLoveCount}
          loveCount={loveCount}
        />
      </div>
    </div>
  );
};

export default App;
