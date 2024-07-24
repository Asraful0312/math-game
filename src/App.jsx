import DifficultySelect from "./components/DifficultySelect";
import Warning from "./components/Warning";
import Game from "./components/game/Game";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/game/Header";

const steps = { 1: DifficultySelect, 2: Warning, 3: Game };

const App = () => {
  const data = JSON.parse(localStorage.getItem("game"));
  const [currentStep, setCurrentStep] = useState(data?.step || 1);
  const [difficulty, setDifficulty] = useState(data?.difficulty || "");
  const [score, setScore] = useState(data?.score || 0);
  const [stats, setStats] = useState(
    data?.stats || {
      easy: {
        correct: 0,
        wrong: 0,
      },
      medium: {
        correct: 0,
        wrong: 0,
      },
      hard: {
        correct: 0,
        wrong: 0,
      },
    }
  );

  const Step = steps[currentStep];

  const updateState = useCallback(() => {
    localStorage.setItem(
      "game",
      JSON.stringify({ step: currentStep, difficulty, score, stats })
    );
  }, [currentStep, difficulty, score, stats]);

  useEffect(() => {
    updateState();
  }, [currentStep, difficulty, score, stats, updateState]);

  return (
    <main>
      <Header setCurrentStep={setCurrentStep} stats={stats} />
      <div className="flex items-center justify-center mt-20 mb-10 px-5">
        <div className="w-full max-w-md mx-auto">
          <Step
            stats={stats}
            setStats={setStats}
            setCurrentStep={setCurrentStep}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            setScore={setScore}
            score={score}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
