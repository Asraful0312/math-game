import TutorialCard from "./TutorialCard";

const Tutorial = ({ setShowTutorial, theme }) => {
  return (
    <div
      className={`py-8 px-5 rounded w-full max-w-4xl overflow-y-scroll h-full ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-end ">
        <span
          onClick={() => setShowTutorial(false)}
          className="cursor-pointer text-end text-2xl"
        >
          x
        </span>
      </div>

      <h2 className="text-red-500 text-xl text-center font-semibold mb-6 skip">
        Don't Skip the Tutorial 🥸
      </h2>

      <div className="w-full flex flex-col items-center justify-center gap-8">
        <TutorialCard
          theme={theme}
          title="1. Select a Difficulty to start the game."
          image="/images/1.png"
        />
        <TutorialCard
          theme={theme}
          title="2. You can play easy mode but to unlock medium difficulty you need 20 Score and for hard 100 Score points."
          image="/images/2.png"
        />
        <TutorialCard
          theme={theme}
          title="3. After choosing difficulty you will get this content warning you can continue or go back."
          image="/images/3.png"
        />
        <TutorialCard
          theme={theme}
          title="4. After continuing from the content warning page you can now play the game. Read the question and put your answer to the box and to submit click the submit button or press enter to submit the answer."
          image="/images/4.png"
        />
        <TutorialCard
          theme={theme}
          title="5. You will get tips on the marked place."
          image="/images/5.png"
        />
        <TutorialCard
          theme={theme}
          title="6. To get extra score points type 'i love you' and submit."
          image="/images/6.png"
        />
        <TutorialCard
          theme={theme}
          title="7. You will Randomly get the marked text by clicking on the text will will get 10 score points you can click 5 time and get 50 score points."
          image="/images/7.png"
        />
        <TutorialCard
          theme={theme}
          title="8. After clicking 5 time you will get this text. To reset the limit refresh the page and try again."
          image="/images/8.png"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setShowTutorial(false)}
          className=" dark:bg-purple-400 py-2 px-5 rounded font-semibold mt-8 hover:bg-purple-900 transition-colors duration-200 "
        >
          I understand
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
