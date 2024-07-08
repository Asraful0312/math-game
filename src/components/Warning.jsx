const Warning = ({ setCurrentStep }) => {
  return (
    <div>
      <h2 className="text-center text-2xl text-red-600 font-bold m-3">
        WARNING
      </h2>
      <p className="text-center text-lg mb-10">
        This content may offensive for some users do you still want to continue?
      </p>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(1)}
          className="bg-slate-950 text-white py-2 px-5 rounded hover:opacity-90 transition-all duration-300"
        >
          No
        </button>
        <button
          onClick={() => setCurrentStep(3)}
          className="bg-blue-500 text-white py-2 px-5 rounded hover:opacity-90 transition-all duration-300"
        >
          I don't Care
        </button>
      </div>
    </div>
  );
};

export default Warning;
