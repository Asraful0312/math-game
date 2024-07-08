import { useState } from "react";

const Message = ({
  isWrong,
  text,
  correctAns,
  setInput,
  setIsSeeCorrectAns,
  setScore,
  setScoreAdded,
  setIsScoreAdded,
}) => {
  const [clicked, setClicked] = useState(0);

  const isMatch = text === "I love you too 💕 Click the text to get a gift 🎁";

  return (
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
      {!isWrong && !isMatch && text !== "" && (
        <p className="mb-2">
          <b className="text-blue-500">MG:</b> {text}
        </p>
      )}

      {!isWrong && isMatch && text !== "" && (
        <button
          disabled={clicked === 5}
          onClick={() => {
            if (clicked === 5) {
            }
            setScore((prev) => (isMatch ? prev + 10 : 0));
            setIsScoreAdded(true);
            setScoreAdded("+10");
            setClicked((prev) => prev + 1);
          }}
          className="mb-2 disabled:opacity-65"
        >
          <b className="text-blue-500">MG:</b>{" "}
          {clicked === 5
            ? "Gift Limit reached can get gift only 5 times"
            : text}
        </button>
      )}
    </>
  );
};

export default Message;
