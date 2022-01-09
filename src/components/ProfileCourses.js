import React from "react";
import styles from "./ProfileCourses.module.css";
const ProfileCourses = ({ courses }) => {
  return (
    <>
      <div>
        <div className={styles["courses_header"]}>
          <div className={styles["coruses_header-text"]}>
            You may like these courses
          </div>
        </div>
        <div className={styles["courses"]}>
          {courses.map((course, index) => {
            return (
              <div className={styles["course"]} key={`ProfileCourse_${index}`}>
                <div className={styles["course_picture"]}>
                  <img src={course.picture} alt="course" />
                </div>
                <div className={styles["course_info"]}>
                  <div className={styles["course_name"]}>{course.name}</div>
                  <div className={styles["course_view"]}>
                    {course.viewers} viewers
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["courses_bottom"]}>
          <div className={styles["courses_bottom-text"]}>
            <a href="#">See all recomendations</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCourses;
