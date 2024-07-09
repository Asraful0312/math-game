import { useEffect, useState } from "react";
import {
  easyCorrectText,
  hardCorrectText,
  loveText,
  mediumCorrectText,
  wrongAnswerText,
  hardWrongAnswer,
} from "../../utils/messages";
import Header from "./Header";
import Score from "./Score";
import Question from "./Question";
import Message from "./Message";
import AnswerInput from "./AnswerInput";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";

const easy = ["plus", "minus"];
const medium = ["plus", "minus", "multiply"];
const hard = ["plus", "minus", "multiply", "divide"];

const Game = ({
  setCurrentStep,
  score,
  difficulty,
  setScore,
  stats,
  setStats,
}) => {
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

  console.log(stats);

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
    // setScore(10);
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
      generateQuestions();
      generateCorrectText();
    }
    setInput("");
  };

  return (
    <div>
      <Header setCurrentStep={setCurrentStep} />
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
    </div>
  );
};

export default Game;
