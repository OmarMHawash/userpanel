import { Link } from "react-router-dom";
import "./CourseCard.scss";
const CourseCard = (props) => {
  const course = props.data;
  return (
    <div className="course-card" key={course.id}>
      <Link to={"/course/" + course.id}>
        <div className="image-wrapper">
          <img src={course.image} alt="cardimg" />
        </div>
        <div className="description">
          <h3 className="course-title">{course.name}</h3>
          <p>{course.desc.split(".")[0]}</p>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;

