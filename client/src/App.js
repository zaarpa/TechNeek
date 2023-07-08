import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUpLogin/Signup";
import Login from "./components/SignUpLogin/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Components">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
