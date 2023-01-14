import React, { useState, useEffect } from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Navbar from "../../Components/Navbar/Navbar";
import FirestoneDB from "../../Utils/FirestoneDB";
import "./BrowseCourses.scss";
const BrowseCourses = () => {
  const [loaded, setLoaded] = useState(false);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  useEffect(() => {
    setLoaded(true);
  }, [courses]);

  const getCourses = async () => {
    let courses = await FirestoneDB.getCourses();
    setCourses(courses);
  };
  return (
    <>
      <Navbar />
      <div id="browse-courses">
        <div className="courses-section">
          <div className="browse-title">
            <h1>Browse Courses</h1>
          </div>
          <div className="courses">
            {loaded ? (
              courses.map((course, idx) => {
                return <CourseCard data={course} key={idx} />;
              })
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseCourses;

