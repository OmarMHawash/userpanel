import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Course.scss";
import React, { useState, useEffect } from "react";
import FirestoneDB from "../../Utils/FirestoneDB";
const Course = () => {
  const [course, setCourse] = useState({});
  const [loaded, setLoaded] = useState(false);
  const loc = useLocation();
  let course_id = loc.pathname.split("/")[2];
  useEffect(() => {
    getCourseData();
  }, []);
  useEffect(() => {
    course.chapters && setLoaded(true);
  }, [course]);

  const getCourseData = async () => {
    const course = await FirestoneDB.getCourseById(course_id);
    const chapters = await FirestoneDB.getCourseChapters(course_id);
    const ctags = await FirestoneDB.getCourseTags(course_id);
    const tags = await FirestoneDB.getTags();
    course.tags = ctags.map((ctag) => {
      return tags.find((tag) => tag.id === ctag.tag_id);
    });
    course.chapters = chapters;
    setCourse(course);
  };
  return (
    <>
      <Navbar />
      <div id="course-data">
        {loaded ? (
          <>
            <div className="course-info">
              <div className="image-wrapper">
                <img src={course.image} alt={course.name} />
              </div>
              <h1>{course.name}</h1>
              <p>{course.desc}</p>
              <h2>This Course Includes:</h2>
              <div className="tags">
                {course.tags?.map((tag) => (
                  <div className="ctag" key={tag.id}>
                    <img src={tag.image} alt="tag.name" />
                    <h3>{tag.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="chap-sec">
              <h2>Course Chapters:</h2>
              <div className="chapters">
                {course.chapters?.map((chapter) => (
                  <div className="chap" key={chapter.id}>
                    <h3>* {chapter.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <Link className="course-btn" to={`/dashboard/course/` + course.id}>
              Start Learning
            </Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Course;

