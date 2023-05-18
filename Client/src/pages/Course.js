import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import USER_AUTH from "../services/user-auth-api";
import { profileContext } from "../context/myContext";
import FIND_COURSE from "../services/course-api";
import {
  FaUser,
  FaHome,
  FaReact,
  FaLaptop,
  FaLaptopCode,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Course = () => {
  const [allCourse, setAllCourse] = useState([]);
  const { setProfile } = useContext(profileContext);
  const token = localStorage.getItem("TALENT_BOX_TOKEN");
  console.log(token);

  const redirect = useNavigate();
  const getUser = async () => {
    const result = await USER_AUTH(token);
    console.log(result);
    if (result.status === 200) {
      setProfile(result.data.user);
    } else {
      alert(result.response.data.message);
    }
  };
  useEffect(() => {
    if (token) {
      getUser();
    } else {
      alert("For access course plzz login");
      console.log("hello");
      redirect("/login");
    }
  }, [token]);

  // fetch Course data from mongo
  const fetCourseData = async () => {
    const result = await FIND_COURSE();
    console.log(result.data.course);
    if (result.status === 200) {
      setAllCourse(result.data.course);
    } else {
      alert(result.response.data.message);
    }
  };
  useEffect(() => {
    fetCourseData();
  }, []);

  const iconObject = {
    FaUser,
    FaHome,
    FaReact,
    FaLaptop,
    SiJavascript,
    FaLaptopCode,
  };
  return (
    <div id="course-div">
      <div className="course-top-div">
        <h3>Welcome to freeCodeCamp.org</h3>
        <p>
          "I have not failed. I' ve just found 10,000 ways that won't work."
        </p>
        <p>- Thomas A. Edison</p>
      </div>
      {allCourse.map((elem) => {
        const IconShow = iconObject[elem.icon];
        return (
          <div key={elem._id} className="course-item">
            <p>
              <IconShow /> <span>{elem.title}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Course;
