import { useEffect, useState } from "react";
import {
  easyCorrectText,
  hardCorrectText,
  loveText,
  mediumCorrectText,
  wrongAnswerText,
  hardWrongAnswer,
} from "../../utils/messages";
import Score from "./Score";
import Question from "./Question";
import Message from "./Message";
import AnswerInput from "./AnswerInput";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";

const easy = ["plus", "minus"];
const medium = ["plus", "minus", "multiply"];
const hard = ["plus", "minus", "multiply", "divide"];

const Game = ({ setStats, stats, score, difficulty, setScore }) => {
  const [isSeeCorrectAns, setIsSeeCorrectAns] = useState(false);
  const [correctAns, setCorrectAns] = useState("");
  const [input, setInput] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [question, setQuestion] = useState({});
  const [operator, setOperator] = useState("");
  const [text, setText] = useState("");
  const [inputKey, setInputKey] = useState(0);
  const [scoreAdded, setScoreAdded] = useState("");
  const [isScoreAdded, setIsScoreAdded] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTip((prevShowTip) => !prevShowTip);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const generateQuestions = () => {
    const num1 =
      difficulty === "Easy"
        ? Math.floor(Math.random() * 100)
        : difficulty === "Medium"
        ? Math.floor(Math.random() * 300)
        : difficulty === "Hard"
        ? Math.floor(Math.random(Math.min(50)) * 550)
        : Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * (num1 + 1));

    //
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

  const generateWrongText = () => {
    if (difficulty === "Hard") {
      const result =
        hardWrongAnswer[Math.floor(Math.random() * hardWrongAnswer.length)];
      setText(result);
    } else {
      const result =
        wrongAnswerText[Math.floor(Math.random() * wrongAnswerText.length)];
      setText(result);
    }
  };

  useEffect(() => {
    generateQuestions();
    // setScore(5000);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScoreAdded(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [scoreAdded, isScoreAdded]);

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

  const calculateAnswer = (e) => {
    e.preventDefault();
    setCorrectAns(Number(decideOperator().toFixed(2)));

    const isLove = input.toLowerCase().trim() === "i love you";
    if (Number(decideOperator().toFixed(2)) !== Number(input)) {
      generateWrongText();
      if (isLove) {
        setText(loveText[Math.floor(Math.random() * loveText.length)]);
        setIsWrong(false);
        setScore((prev) => (prev === 0 ? 0 : prev - 0));
      } else {
        setScore((prev) => (prev === 0 ? 0 : prev - 1));
        setIsScoreAdded(true);
        setScoreAdded(score === 0 ? "-0" : "-1");
        setInputKey((prevKey) => prevKey + 1);
        setIsWrong(true);
        handleWrongStatsChange();
      }
    } else {
      setIsWrong(false);
      setIsScoreAdded(true);
      setScoreAdded(
        difficulty === "Medium" ? "+2" : difficulty === "Hard" ? "+5" : "+1"
      );
      setScore((prev) =>
        difficulty === "Medium"
          ? prev + 2
          : difficulty === "Hard"
          ? prev + 5
          : prev + 1
      );
      handleCorrectStatsChange();
      generateQuestions();
      generateCorrectText();
    }
    setInput("");
  };

  const handleCorrectStatsChange = () => {
    if (difficulty === "Easy") {
      setStats((prev) => ({
        ...prev,
        easy: {
          ...prev?.easy,
          correct: prev?.easy?.correct + 1,
        },
      }));
    } else if (difficulty === "Medium") {
      setStats((prev) => ({
        ...prev,
        medium: {
          ...prev?.medium,
          correct: prev?.medium?.correct + 1,
        },
      }));
    } else if (difficulty === "Hard") {
      setStats((prev) => ({
        ...prev,
        hard: {
          ...prev?.hard,
          correct: prev?.hard?.correct + 1,
        },
      }));
    }
  };

  const handleWrongStatsChange = () => {
    if (difficulty === "Easy") {
      setStats((prev) => ({
        ...prev,
        easy: {
          ...prev?.easy,
          wrong: prev?.easy?.wrong + 1,
        },
      }));
    } else if (difficulty === "Medium") {
      setStats((prev) => ({
        ...prev,
        medium: {
          ...prev?.medium,
          wrong: prev?.medium?.wrong + 1,
        },
      }));
    } else if (difficulty === "Hard") {
      setStats((prev) => ({
        ...prev,
        hard: {
          ...prev?.hard,
          wrong: prev?.hard?.wrong + 1,
        },
      }));
    }
  };

  return (
    <div>
      <Score
        isScoreAdded={isScoreAdded}
        score={score}
        scoreAdded={scoreAdded}
        difficulty={difficulty}
      />
      <Question question={question} operator={operator} />
      <form onSubmit={calculateAnswer}>
        <Message
          setScore={setScore}
          setIsScoreAdded={setIsScoreAdded}
          setScoreAdded={setScoreAdded}
          isWrong={isWrong}
          text={text}
          correctAns={correctAns}
          setInput={setInput}
          setIsSeeCorrectAns={setIsSeeCorrectAns}
        />
        <AnswerInput
          text={text}
          inputKey={inputKey}
          input={input}
          setInput={setInput}
          isWrong={isWrong}
        />
        <SubmitButton isSeeCorrectAns={isSeeCorrectAns} />
      </form>
      <ResetButton
        generateQuestions={generateQuestions}
        setInput={setInput}
        setIsWrong={setIsWrong}
        setIsSeeCorrectAns={setIsSeeCorrectAns}
        setText={setText}
      />
      <p
        className={`text-sm text-center text-gray-400 mt-5 transition-all duration-300${
          showTip
            ? "opacity-100 translate-y-0 visible"
            : "translate-y-5 opacity-0 invisible"
        }`}
      >
        Tip: If you want more score you can type "I love you" you will randomly
        get this "I love you too 💕 Click the text to get a gift 🎁" text and
        you can get 10 score points per click up to 50 score points.
      </p>
    </div>
  );
};

export default Game;
