import "./LearningBoard.scss";
import { useLocation } from "react-router-dom";

const LearningBoard = () => {
  const loc = useLocation().pathname.split("/")[3];
  console.log(loc);
  const getData = () => {};
  return (
    <div>
      <h1>{loc}</h1>
    </div>
  );
};

export default LearningBoard;

