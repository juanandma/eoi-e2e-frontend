import testTube from "/test-tube.png";
import "./Logo.css";

export const Logo = () => {
  return (
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={testTube} className="logo" alt="Vite logo" />
    </a>
  );
};
