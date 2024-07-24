import { useEffect, useState } from "react";

const Score = ({ score, scoreAdded, difficulty, isScoreAdded }) => {
  const [operator, setOperator] = useState("");

  useEffect(() => {
    scoreAdded && scoreAdded[0] === "-"
      ? setOperator("minus")
      : setOperator("plus");
  }, [scoreAdded]);

  return (
    <div className="flex flex-wrap gap-3 justify-between mb-6">
      <h3 className="text-lg font-medium">
        You selected <span className="text-blue-500">{difficulty}</span>{" "}
        Difficulty
      </h3>
      <p className={`font-medium text-lg relative`}>
        Score:{" "}
        <span
          className={`font-semibold text-lg relative ${
            score >= 20 && score < 100
              ? "text-cyan-600"
              : score >= 100 && score < 500
              ? "text-red-700"
              : score >= 500 && score < 1000
              ? "text-purple-700"
              : score >= 1000
              ? "text-orange-400"
              : "text-black dark:text-white"
          }`}
        >
          {score}
          {score >= 1000 && (
            <span className="absolute -left-2 -top-[15px] -rotate-12 text-sm">
              👑
            </span>
          )}
        </span>
        <span
          className={`transition-all duration-300 text-base absolute -right-3 -top-4 ${
            operator === "minus" ? "text-red-500" : "text-green-500"
          } ${
            !isScoreAdded
              ? "opacity-0 invisible -translate-x-2"
              : "opacity-100 visible translate-x-0"
          }`}
        >
          {scoreAdded}
        </span>{" "}
      </p>
    </div>
  );
};

export default Score;
