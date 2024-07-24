import React from "react";

const TutorialCard = ({ title, image, theme }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2
        className={`text-lg sm:text-xl mb-5 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        🥸 {title}
      </h2>

      <img className="w-[90%]" loading="lazy" src={image} alt="tutorial" />
    </div>
  );
};

export default TutorialCard;
