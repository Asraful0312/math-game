const Modal = ({ children, onClick, show }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 bg-black/50 flex items-center justify-center px-5 z-50 transition-all duration-200 overflow-y-scroll ${
        show
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-5"
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
