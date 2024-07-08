const BUTTONS = ["Easy", "Medium", "Hard"];

const DifficultySelect = ({ setCurrentStep, setDifficulty, score }) => {
  const handleClick = (d) => {
    setCurrentStep(2);
    setDifficulty(d);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Select Difficulty</h1>

      <h2 className="font-medium text-center mt-3">
        Your Score: <span className="text-blue-500">{score}</span>
      </h2>
      <div className=" mt-7 flex flex-col gap-3 font-semibold">
        {BUTTONS.map((b) => (
          <button
            key={b}
            disabled={
              (b === "Medium" && score < 20) || (b === "Hard" && score < 100)
            }
            onClick={() => handleClick(b)}
            className="w-full disabled:opacity-65 bg-blue-400 py-2 text-blue-950 rounded hover:opacity-90 transition-all duration-300 disabled:cursor-not-allowed"
          >
            {b === "Medium" && score < 20 ? (
              <span>Score 20 or more to unlock {b} difficulty </span>
            ) : b === "Hard" && score < 100 ? (
              <span>Score 100 or more to unlock {b} difficulty </span>
            ) : (
              b
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelect;
