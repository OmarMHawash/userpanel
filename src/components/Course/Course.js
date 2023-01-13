import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Course.scss";
const Course = () => {
  const loc = useLocation();
  const C_id = loc.pathname.split("/")[2];
  console.log(C_id);
  return (
    <div id="course-data">
      <Navbar />
      <br />
      <br />
      <Link className="course-btn" to={`/dashboard/course/` + C_id}>
        Start Learning
      </Link>
    </div>
  );
};

export default Course;

