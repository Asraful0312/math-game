const Stats = ({ setIsShow, stats, theme }) => {
  const totalCorrect =
    stats?.easy?.correct + stats?.medium?.correct + stats?.hard?.correct;

  const totalWrong =
    stats?.easy?.wrong + stats?.medium?.wrong + stats?.hard?.wrong;

  const easyCorrect = stats?.easy?.correct;
  const mediumCorrect = stats?.medium?.correct;
  const hardCorrect = stats?.hard?.correct;

  const easyWrong = stats?.easy?.wrong;
  const mediumWrong = stats?.medium?.wrong;
  const hardWrong = stats?.hard?.wrong;

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
              {Number(easyWrong) || 0}
            </td>
            <td
              className={`text-green-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {Number(easyCorrect) || 0}
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
              {Number(mediumWrong) || 0}
            </td>
            <td
              className={`text-green-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {Number(mediumCorrect) || 0}
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
              {Number(hardWrong) || 0}
            </td>
            <td
              className={`text-green-500 py-2 border border-white/10 ${
                theme === "dark" ? "border-white/10" : "!border-gray-300"
              }`}
            >
              {Number(hardCorrect) || 0}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-between w-full text-sm mt-7">
        <h2>Total Correct: {Number(totalCorrect) || 0}</h2>
        <h2>Total Wrong: {Number(totalWrong) || 0}</h2>
      </div>
    </div>
  );
};

export default Stats;

const generateMessage = (stats) => {
  let message;
  const easyCorrect = stats?.easy?.correct;
  const mediumCorrect = stats?.medium?.correct;
  const hardCorrect = stats?.hard?.correct;
  if (
    easyCorrect >= 100 &&
    easyCorrect > mediumCorrect &&
    easyCorrect > hardCorrect
  ) {
    message = <p className="text-center">Hero of Easy Difficulty🤡</p>;
  } else if (
    mediumCorrect >= 100 &&
    mediumCorrect > easyCorrect &&
    mediumCorrect > hardCorrect
  ) {
    message = <p className="text-center">Master of Medium Difficulty👨‍🏫</p>;
  } else if (
    hardCorrect >= 100 &&
    hardCorrect > easyCorrect &&
    hardCorrect > mediumCorrect
  ) {
    message = <p className="text-center">King of Hard Difficulty🤴</p>;
  }
  return message;
};
