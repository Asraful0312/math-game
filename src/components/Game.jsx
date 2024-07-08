import { useEffect, useState } from "react";
import {
  easyCorrectText,
  hardCorrectText,
  loveText,
  mediumCorrectText,
  wrongAnswerText,
} from "../utils/messages";
const easy = ["plus", "minus"];
const medium = ["plus", "minus", "multiply"];
const hard = ["plus", "minus", "multiply", "divide"];

const Game = ({
  setCurrentStep,
  score,
  difficulty,
  setScore,
  loveCount,
  setLoveCount,
}) => {
  const [isSeeCorrectAns, setIsSeeCorrectAns] = useState(false);
  const [correctAns, setCorrectAns] = useState("");
  const [input, setInput] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [question, setQuestion] = useState({});
  const [operator, setOperator] = useState("");
  const [text, setText] = useState("");

  // generate questions
  const generateQuestions = () => {
    // numbers
    const num1 =
      difficulty === "Easy"
        ? Math.floor(Math.random() * 100)
        : difficulty === "Medium"
        ? Math.floor(Math.random() * 300)
        : difficulty === "Hard"
        ? Math.floor(Math.random(Math.min(50)) * 550)
        : Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * (num1 + 1));

    // operator
    const operator =
      difficulty === "Medium"
        ? medium[Math.floor(Math.random() * medium.length)]
        : difficulty === "Easy"
        ? easy[Math.floor(Math.random() * easy.length)]
        : difficulty === "Hard"
        ? hard[Math.floor(Math.random() * hard.length)]
        : easy[Math.floor(Math.random() * easy.length)];
    setQuestion({ num1, num2 });
    setOperator(operator);
  };

  // generate message when user gives correct answer
  const generateCorrectText = () => {
    if (input.toLowerCase() === "i love you") {
      const result = loveText[Math.floor(Math.random() * loveText.length)];
      setText(result);
    } else if (difficulty === "Medium") {
      const result =
        mediumCorrectText[Math.floor(Math.random() * mediumCorrectText.length)];
      setText(result);
    } else if (difficulty === "Easy") {
      const result =
        easyCorrectText[Math.floor(Math.random() * easyCorrectText.length)];
      setText(result);
    } else if (difficulty === "Hard") {
      const result =
        hardCorrectText[Math.floor(Math.random() * hardCorrectText.length)];
      setText(result);
    } else {
      const result =
        easyCorrectText[Math.floor(Math.random() * easyCorrectText.length)];
      setText(result);
    }
  };

  // generate message when user gives wrong answer
  const generateWrongText = () => {
    const result =
      wrongAnswerText[Math.floor(Math.random() * wrongAnswerText.length)];
    setText(result);
  };

  // generate a question when page is loaded
  useEffect(() => {
    generateQuestions();
    // setScore(100);
  }, []);
  

  //decide the operator 
  const decideOperator = () => {
    let result;
    if (operator === "minus") {
      result = question.num1 - question.num2;
    } else if (operator === "plus") {
      result = question.num1 + question.num2;
    } else if (operator === "multiply") {
      result = question.num1 * question.num2;
    } else if (operator === "divide") {
      result = question.num1 / question.num2;
    }
    return result;
  };

  // calculate the correct answer
  const calculateAnswer = (e) => {
    e.preventDefault();

    setCorrectAns(Number(decideOperator().toFixed(2)));

    const isLove = input.toLowerCase() === "i love you";

    if (Number(decideOperator().toFixed(2)) !== Number(input)) {
      generateWrongText();
      if (isLove) {
        setText(loveText[Math.floor(Math.random() * loveText.length)]);
        setIsWrong(false);
        setScore((prev) =>
          prev === 0
            ? 0
            : text === "I love you too 💕 I gave you 10 points as a gift 🎁"
            ? prev + 10
            : prev - 0
        );
      } else {
        setScore((prev) => (prev === 0 ? 0 : prev - 1));
        setIsWrong(true);
      }
    } else {
      setIsWrong(false);
      setScore((prev) =>
        difficulty === "Medium"
          ? prev + 2
          : difficulty === "Hard"
          ? prev + 5
          : prev + 1
      );
      generateQuestions();
      generateCorrectText();
    }
    setInput("");
  };

  return (
    <div>
      <h2
        onClick={() => setCurrentStep(1)}
        className="cursor-pointer text-2xl font-bold mb-10 underline text-center"
      >
        HOME
      </h2>

      <div className="flex flex-wrap gap-3 justify-between mb-6">
        <h3 className="text-lg font-medium">
          You selected <span className="text-blue-500">{difficulty}</span>{" "}
          Difficulty
        </h3>

        <p className="font-medium text-lg">Score: {score}</p>
      </div>

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

      <form onSubmit={calculateAnswer}>
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

        {!isWrong && correctAns !== "" && (
          <p className="mb-2">
            {text !== "" && <b className="text-red-500">MG:</b>} {text}
          </p>
        )}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`border w-full py-2 px-5 rounded outline-none  ${
            isWrong ? "border-red-500 wrong-ans" : "border-blue-500"
          }`}
          placeholder="Put your answer 🤧"
          required
          type="text"
        />
        <div className="flex items-center justify-center mt-8">
          <button
            disabled={isSeeCorrectAns}
            type="submit"
            className="bg-blue-500 disabled:opacity-65 text-white py-2 px-5 rounded hover:opacity-90 transition-all duration-300"
          >
            {isSeeCorrectAns ? "Do Yourself 😛" : "Submit"}
          </button>
        </div>
      </form>

      {/* RESET */}
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            generateQuestions();
            setInput("");
            setIsWrong(false);
            setIsSeeCorrectAns(false);
            setText("");
          }}
          className="bg-slate-950 text-white py-2 px-5 rounded hover:opacity-90 transition-all duration-300 mt-5"
        >
          Try Another
        </button>
      </div>
    </div>
  );
};

export default Game;
