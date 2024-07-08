const Message = ({
  isWrong,
  text,
  correctAns,
  setInput,
  setIsSeeCorrectAns,
}) => (
  <>
    {isWrong && (
      <p className="mb-2">
        <b className="text-red-500">MG:</b> {text}{" "}
        <span
          onClick={() => {
            setInput(correctAns);
            setIsSeeCorrectAns(true);
          }}
          className="text-blue-500 underline cursor-pointer"
        >
          See the correct answer
        </span>
      </p>
    )}
    {!isWrong && text !== "" && (
      <p className="mb-2">
        <b className="text-blue-500">MG:</b> {text}
      </p>
    )}
  </>
);

export default Message;
