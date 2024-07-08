const SubmitButton = ({ isSeeCorrectAns }) => (
  <div className="flex items-center justify-center mt-8">
    <button
      disabled={isSeeCorrectAns}
      type="submit"
      className="bg-blue-500 disabled:opacity-65 text-white py-2 px-5 rounded hover:opacity-90 transition-all duration-300"
    >
      {isSeeCorrectAns ? "Do Yourself 😛" : "Submit"}
    </button>
  </div>
);

export default SubmitButton;