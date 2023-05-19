import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import USER_AUTH from "../services/user-auth-api";
import { profileContext } from "../context/myContext";
import FIND_COURSE from "../services/course-api";



const Question = () => {
  
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
        <h3>Welcome to Assignment Question</h3>
        <ol>
         <li>Create authentication apis using express and mongodb as database (login,  signup, userdetails, ect ).</li>
         <li>Create protected routes using auth middleware.</li>
         <li>Use JWT token for all types of authentication for the routes.</li>
         <li>Push the code to github and share the link.</li>
         <li>If you wish you can also make frontend in react js and host it in netlify ( Bonus Task ).</li>
        </ol>
       
        <p>- given by Bhavana Polisetty</p>
      </div>
     
    </div>
  );
};
export default Question;
