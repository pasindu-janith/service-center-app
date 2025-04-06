import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dashboard from "./Pages/UserPanel";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="/myaccount/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
