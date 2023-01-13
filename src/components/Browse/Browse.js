import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Browse.scss";
const Browse = () => {
  return (
    <>
      <Navbar />
      <div id="browse-section">
        <div className="courses-section">
          <div className="browse-title">
            <h1>Browse Courses</h1>
          </div>
          <div className="courses">
            <div className="course-card">
              <Link to="/course/1Kms4Qrs">
                <div className="image-wrapper">
                  <img src="images/course/fe-dev.jpeg" alt="cardimg" />
                </div>
                <div className="description">
                  <h3 className="course-title">Frontend development§</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam accusamus quidem quisquam alias dolore beatae harum
                    provident facere commodi in esse sint nobis
                  </p>
                </div>
              </Link>
            </div>
            <div className="course-card">
              <div className="image-wrapper">
                <img src="images/course/fe-dev.jpeg" alt="cardimg" />
              </div>
              <div className="description">
                <h3 className="course-title">Frontend development§</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  accusamus quidem quisquam alias dolore beatae harum provident
                  facere commodi in esse sint nobis
                </p>
              </div>
            </div>
            <div className="course-card">
              <div className="image-wrapper">
                <img src="images/course/fe-dev.jpeg" alt="cardimg" />
              </div>
              <div className="description">
                <h3 className="course-title">Frontend development§</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  accusamus quidem quisquam alias dolore beatae harum provident
                  facere commodi in esse sint nobis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;

