import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import USER_AUTH from "../services/user-auth-api";
import { profileContext } from "../context/myContext";
import FIND_COURSE from "../services/course-api";



const Course = () => {
  
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
   
    if (result.status === 200) {
      
    } else {
      
    }
  };
  useEffect(() => {
    fetCourseData();
  }, []);

  
  return (
    <div id="course-div">
      <div className="course-top-div">
        <h3>Welcome to freeCodeCamp.org</h3>
        <p>
          "I have not failed. I' ve just found 10,000 ways that won't work."
        </p>
        <p>- Thomas A. Edison</p>
      </div>
     
    </div>
  );
};
export default Course;
