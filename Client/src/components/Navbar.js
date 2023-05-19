import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { profileContext } from "../context/myContext";
import { FaSearch, FaSistrix } from "react-icons/fa";
const Navbar = () => {
  const { profile, setProfile } = useContext(profileContext);
  console.log(profile)
  const URL = "http://localhost:8080";
  const redirect = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("TALENT_BOX_TOKEN");
    setProfile({});
    redirect("/");
  };
  const Question=()=>{
    alert("Without Login you can't view question")
    if(Object.keys(profile).length > 0){
     
      redirect("/question")
      
    }else{
      redirect("/register")
      
    }
  }
  
  return (
    <div id="nav-bar">
      
      <h4 className="freeCode-camp" onClick={Question}>
       View Assignment Question
      </h4>
      {Object.keys(profile).length > 0 ? (
        <div className="profile">
          <span>{profile.name}</span>
          <img src={`${URL}/upload/${profile.imageUrl}`} alt="" />
          <Button
            className="logout-btn"
            buttonText="LOGOUT"
            onClick={logoutUser}
          />
        </div>
      ) : (
        <div>
          <Button buttonText="MENU" className="menu-btn" />
          <Button buttonText="SIGN IN" onClick={() => redirect("/register")} />
        </div>
      )}
    </div>
  );
};
export default Navbar;
