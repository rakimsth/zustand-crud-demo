import React from "react";
import useCourseStore from "../../store/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor: course.completed ? "#00FF0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course?.completed}
                    onChange={(e) =>
                      toggleCourseStatus(course.id, e.target.checked)
                    }
                  />
                </span>
                <span>{course?.title}</span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
