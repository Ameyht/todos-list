import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export default function SignIn() {
  // const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   navigate("/authenticated");
  // };

  const registered = () => {
    toast.success("Sign In Successfull", {
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
    <div className="space">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
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

        <div className="forget">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id=""
            // checked
          />
          &nbsp; &nbsp;
          <label class="form-check-label">
            {" "}
            <b>Remember me </b>
          </label>
          <a className="btn" href="#!">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block mb-1"
          // onClick={handleButtonClick}
        >
          Sign in
        </button>

        {/* Not a member */}
        <div className="member">
          <b>Not a Member Yet?</b>
          <button className="register">
            {" "}
            <a href="/signup">Register</a>
          </button>
        </div>

        <ToastContainer />
      </form>
      {/* <div className="space"></div> */}
    </div>
  );
}
