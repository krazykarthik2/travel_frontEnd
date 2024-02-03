import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Explore from "./components/Welcome/Explore";
import Home from "./components/Welcome/Home";
import Package from "./components/Welcome/Package";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/mylist" element={<></>} />
          <Route path="/package/:pack_id" element={<Package />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
