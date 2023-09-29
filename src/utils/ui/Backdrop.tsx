import ReactDOM from "react-dom";

interface BackdropProps {
  onClick: () => void;
  style?: React.CSSProperties;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  const backdropHook = document.getElementById("backdrop-hook");

  return (
    backdropHook?.parentNode &&
    ReactDOM.createPortal(
      <div
        className="fixed top-0 left-0 w-full h-screen bg-transparent z-49"
        onClick={props.onClick}
        style={props.style}
      ></div>,
      backdropHook
    )
  );
};

export default Backdrop;
