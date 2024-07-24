const Stats = ({ setIsShow, stats, theme }) => {
  const totalCorrect =
    stats.easy.correct + stats.medium.correct + stats.hard.correct;

  const totalWrong = stats.easy.wrong + stats.medium.wrong + stats.hard.wrong;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`border border-white/15 px-5 pb-12 rounded w-full max-w-lg stats ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-end mt-7">
        <span
          onClick={() => setIsShow(false)}
          className="cursor-pointer text-end text-xl"
        >
          x
        </span>
      </div>
      {generateMessage(stats)}
      <table className="table-auto w-full mt-6">
        <thead
          className={`w-full py-2 ${
            theme === "dark" ? "bg-neutral-900" : "bg-neutral-300"
          }`}
        >
          <th className="py-2 text-sm">Difficulty</th>
          <th className="py-2 text-sm">Wrong</th>
          <th className="py-2 text-sm">Correct</th>
        </thead>

        <tbody>
          <tr className="w-full text-center">
            <td
              className={`py-2 border ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              Easy
            </td>
            <td
              className={`text-red-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {stats?.easy?.wrong}
            </td>
            <td
              className={`text-green-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {stats?.easy?.correct}
            </td>
          </tr>

          <tr className="w-full text-center">
            <td
              className={`py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              Medium
            </td>
            <td
              className={`text-red-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {stats?.medium?.wrong}
            </td>
            <td
              className={`text-green-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {stats?.medium?.correct}
            </td>
          </tr>

          <tr className="w-full text-center">
            <td
              className={`py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              Hard
            </td>
            <td
              className={`text-red-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {stats?.hard?.wrong}
            </td>
            <td
              className={`text-green-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {stats?.hard?.correct}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-between w-full text-sm mt-7">
        <h2>Total Correct: {totalCorrect}</h2>
        <h2>Total Wrong: {totalWrong}</h2>
      </div>
    </div>
  );
};

export default Stats;

const generateMessage = (stats) => {
  let message;
  if (
    stats.easy.correct >= 100 &&
    stats.easy.correct > stats.medium.correct &&
    stats.easy.correct > stats.hard.correct
  ) {
    message = <p className="text-center">Hero of Easy Difficulty🤡</p>;
  } else if (
    stats.medium.correct >= 100 &&
    stats.medium.correct > stats.easy.correct &&
    stats.medium.correct > stats.hard.correct
  ) {
    message = <p className="text-center">Master of Medium Difficulty👨‍🏫</p>;
  } else if (
    stats.hard.correct >= 100 &&
    stats.hard.correct > stats.easy.correct &&
    stats.hard.correct > stats.medium.correct
  ) {
    message = <p className="text-center">King of Hard Difficulty🤴</p>;
  }
  return message;
};
