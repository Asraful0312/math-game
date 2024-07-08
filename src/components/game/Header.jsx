const Header = ({ setCurrentStep }) => (
  <h2
    onClick={() => setCurrentStep(1)}
    className="cursor-pointer text-2xl font-bold mb-10 underline text-center"
  >
    HOME
  </h2>
);

export default Header;
