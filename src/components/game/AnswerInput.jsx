const AnswerInput = ({ inputKey, input, setInput, isWrong }) => (
  <input
    key={inputKey}
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className={`border w-full py-2 px-5 rounded outline-none  ${
      isWrong ? "border-red-500 wrong-ans" : "border-blue-500"
    }`}
    placeholder="Put your answer 🤧"
    required
    type="text"
  />
);

export default AnswerInput;