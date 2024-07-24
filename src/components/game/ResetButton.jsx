const ResetButton = ({
  generateQuestions,
  setInput,
  setIsWrong,
  setIsSeeCorrectAns,
  setText,
}) => (
  <div className="flex items-center justify-center">
    <button
      onClick={() => {
        generateQuestions();
        setInput("");
        setIsWrong(false);
        setIsSeeCorrectAns(false);
        setText("");
      }}
      className="dark:bg-slate-700 bg-slate-950 text-white py-2 px-5 rounded hover:opacity-90 transition-all duration-300 mt-5"
    >
      Try Another
    </button>
  </div>
);

export default ResetButton;
