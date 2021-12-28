import { useNavigate } from "react-router-dom";
import classes from "./start-page.module.css";

function StartPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/events");
  };
  return (
    <div>
      <button className={classes["events-button"]} onClick={handleClick}>
        События
      </button>
    </div>
  );
}

export default StartPage;
