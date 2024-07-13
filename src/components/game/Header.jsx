const Header = ({ setCurrentStep }) => (
  <>
    <h2
      onClick={() => setCurrentStep(1)}
      className="cursor-pointer text-2xl font-bold  underline text-center mb-10"
    >
      HOME
    </h2>
  </>
);

export default Header;
