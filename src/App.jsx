import DifficultySelect from "./components/DifficultySelect";
import Warning from "./components/Warning";
import Game from "./components/Game";
import { useEffect, useState } from "react";

const steps = { 1: DifficultySelect, 2: Warning, 3: Game };

const App = () => {
  const data = JSON.parse(localStorage.getItem("game"));
  const [currentStep, setCurrentStep] = useState(data?.step || 1);
  const [difficulty, setDifficulty] = useState(data?.difficulty || "");
  const [score, setScore] = useState(data?.score || 0);
  const [loveCount, setLoveCount] = useState(data?.loveCount || 0);

  const Step = steps[currentStep];

  useEffect(() => {
    localStorage.setItem(
      "game",
      JSON.stringify({ step: currentStep, difficulty, score, loveCount })
    );
  }, [currentStep, difficulty, score, loveCount]);

  console.log(currentStep);

  return (
    <div className="flex items-center justify-center h-screen px-5">
      <div className="w-full max-w-md mx-auto">
        <Step
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
