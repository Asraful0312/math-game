const Question = ({ question, operator }) => (
  <p className="text-center mb-5">
    <b>QUS:</b> What is <b>{question?.num1}</b>{" "}
    <span
      title={
        operator === "plus"
          ? "1 + 1 = 2"
          : operator === "minus"
          ? "1 - 1 = 0"
          : operator === "multiply"
          ? "2 * 2 = 4"
          : "4 / 2 = 2"
      }
      className="text-blue-500 capitalize font-medium"
    >
      {operator}
    </span>{" "}
    by <b>{question?.num2}</b>
  </p>
);

export default Question;
