import React, { useState } from "react";
import "./Css/Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SignIn from "./SignIn";

export default function Signup() {
  //toastify
  const registered = () => {
    toast.success("Registration Successfull", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  //creating two states one is fot saving the inouts and other to sore the data in array.
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //state for storing data in array
  const [userData, setUserData] = useState([]);

  //function to handle the input change
  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //const handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((p) => [...p, formData]);
    console.log(userData);
    //resetting the form data
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    registered();
  };

  return (
    <div className="sign">
      {/*  <Nav className="nav" /> */}
      <div className="container1">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleinputChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleinputChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleinputChange}
            required
          />
          <button type="submit">Sign Up</button>
          <button type="button" className="signin">
            {" "}
            <a href="/signin">Sign In</a>
          </button>

          <ToastContainer />
        </form>

        {/* displaying the user details stored in the array */}
        <div className="submissions">
          <h3>All Submissions</h3>
          <ul>
            {userData.map((submission, index) => (
              <li key={index}>
                <strong>Username:</strong> {submission.username},{" "}
                <strong>Email:</strong> {submission.email},{" "}
                <strong>Password:</strong> {submission.password}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
