import { useContext, useEffect } from "react";
import USER_AUTH from "../services/user-auth-api";
import { profileContext } from "../context/myContext";
import { FaApple, FaMicrosoft, FaSpotify, FaAmazon } from "react-icons/fa";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { profile, setProfile } = useContext(profileContext);
  const token = localStorage.getItem("TALENT_BOX_TOKEN");
  console.log(token);

  const getUser = async () => {
    const result = await USER_AUTH(token);
    console.log(result);
    if (result.status === 200) {
      setProfile(result.data.user);
    }
  };
  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);
  const redirect = useNavigate();
  const handleClick = () => {
    if (Object.keys(profile).length > 0) {
      redirect("/course");
    } else {
      redirect("/register");
    }
  };
  return (
    <div id="home-div">
      <div className="home-top-div">
        <h3>Learn to Code - for free.</h3>
        <h3>Build Projecst.</h3>
        <h3>Earn Certifications.</h3>
      </div>
      <div className="home-bottom-div">
        <p>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
        <div>
          <p>
            <FaApple />
          </p>
          <p>Google</p>
          <p>
            <span>
              <FaMicrosoft />
            </span>
            <span>Microsoft</span>
          </p>
          <p>
            <span>
              <FaSpotify />
            </span>{" "}
            <span>Spotify</span>
          </p>
          <p>
            <FaAmazon />
          </p>
        </div>
      </div>
      <Button buttonText="Get started (it's free) " onClick={handleClick} />
    </div>
  );
};
export default Home;
