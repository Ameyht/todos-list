import "./App.css";
import "./Components/Css/Nav.css";
import "./Components/Css/Card.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import FortD from "./Components/FortD";
import Home from "./Components/Home";
import { useEffect, useRef } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import SignIn from "./Components/SignIn";

function App() {
  // const backgroundImageUrl = 'url(/images/back.jpeg)';
  // const containerStyle = {
  //   background: backgroundImageUrl,
  //   backgroundSize: 'cover',  // Adjust as needed
  //   backgroundRepeat: 'no-repeat',  // Adjust as needed
  //   height: '300vh',  // Set height as needed
  //   // Add other styles as needed
  // };

  //Footer action
  const footerRef = useRef(null);

  useEffect(() => {
    // Scroll to the footer when the component mounts
    // if (footerRef.current) {
    //   footerRef.current.scrollIntoView({ behavior: "smooth" });
    // }
  }, []);

  const scrollToFooter = () => {
    // Scroll to the footer when the "About Us" link is clicked
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Nav className="nav" scrollToFooter={scrollToFooter} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forts" element={<FortD />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/aboutUs" element={<Footer />} /> */}
          <Route path="/signin" element={<SignIn />} />
          {/* aboutUs */}
        </Routes>
      </Router>
      <Footer setScrollBehavior={(node) => (footerRef.current = node)} />
    </div>
  );
}

export default App;
