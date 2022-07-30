import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ showForm, onShowForm }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={showForm ? "red" : "green"}
          text={showForm ? "Close" : "Add"}
          onClick={onShowForm}
        />
      )}
    </header>
  );
};

export default Header;
