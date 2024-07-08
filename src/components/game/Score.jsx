const Score = ({ score, scoreAdded, difficulty, isScoreAdded }) => (
  <div className="flex flex-wrap gap-3 justify-between mb-6">
    <h3 className="text-lg font-medium">
      You selected <span className="text-blue-500">{difficulty}</span>{" "}
      Difficulty
    </h3>
    <p className={`font-medium text-lg relative`}>
      Score:{" "}
      <span
        className={`font-medium text-lg relative ${
          score >= 20 && score < 100
            ? "text-blue-500"
            : score >= 100
            ? "text-red-700"
            : "text-black"
        }`}
      >
        {score}{" "}
      </span>
      <span
        className={`transition-all duration-300 text-yellow-500 text-base absolute -right-3 -top-4 ${
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

export default Score;
