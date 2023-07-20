import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUpLogin/Signup";
import Login from "./components/SignUpLogin/Login";
import NavScrollExample from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavScrollExample />
        <div className="Components">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
