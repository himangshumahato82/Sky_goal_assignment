import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register-User";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login-User";
import Question from "./pages/Question"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
