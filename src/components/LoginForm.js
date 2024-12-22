import React, {useEffect} from "react";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { Button } from "@mui/material";
import "./Login.css";

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log(token)
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("* username is required")
        .oneOf(["emilys"], "* invalid username")
        .min(3, "* username must be at least 3 characters"),
      email: Yup.string()
        .email("* invalid email address")
        .required("* email is required"),
      password: Yup.string()
        .required("* Password is required")
        .min(6, "* password must be at least 6 characters"),
    }),
    onSubmit: async (values) => {
        try {
            const response = await axios.post("https://dummyjson.com/auth/login", {
              username: values.username,
              password: values.password,
            });
            console.log("Login Successful:", response.data);
            const token = response.data.accessToken;
            localStorage.setItem("authToken", token);
            alert("Login Successful!");
            navigate('/home');
          } catch (error) {
            console.error("Login Failed:", error.response?.data || error.message);
            alert("Login Failed. Please check your credentials.");
          }
    },
  });

  return (
    <div className="login-container">
      <h1 style={{ textAlign: "left" }}>
        Welcome to <br /> <span className="brand-name">Unstop</span>
      </h1>
      <div className="social-login" style={{marginTop:'25px'}}>
        <Button
          variant="contained"
          color="white"
          startIcon={
            <img
              src="/loginPage/googleIcon.png"
              alt="Google logo"
              style={{ width: "24px", height: "24px" }}
            />
          }
          sx={{ textTransform: "none" }}
        >
          Login with Google
        </Button>

        <Button
          variant="contained"
          color="white"
          startIcon={
            <img
              src="/loginPage/facebooklogo.png"
              alt="Facebook logo"
              style={{ width: "24px", height: "24px" }}
            />
          }
          sx={{ textTransform: "none" }}
        >
          Login with Facebook
        </Button>
      </div>
      <div className="separator">
        <span>OR</span>
      </div>
      <form onSubmit={formik.handleSubmit} className="login-form">
        <div className="form-group">
          <div className="input-container">
            <span className="icon">
              <img src="/loginPage/account.png" alt="username icon" />
            </span>
            <input
              type="text"
              id="username"
              placeholder="username"
              {...formik.getFieldProps("username")}
              style={{ outline: "none" }}
            />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <div className="error-message">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="form-group">
          <div className="input-container">
            <span className="icon">
              <img src="/loginPage/email.png" alt="email icon" />
            </span>
            <input
              type="email"
              id="email"
              placeholder="username@gmail.com"
              {...formik.getFieldProps("email")}
              style={{ outline: "none" }}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <div className="password-group">
            <div className="input-container">
              <span className="icon">
                <img src="/loginPage/key.png" alt="password icon" />
              </span>
              <input
                type="password"
                id="password"
                placeholder="********"
                {...formik.getFieldProps("password")}
                style={{ outline: "none" }}
              />
            </div>
            <button
              type="button"
              className="toggle-password"
              onClick={() => {
                const passwordField = document.getElementById("password");
                passwordField.type =
                  passwordField.type === "password" ? "text" : "password";
              }}
            >
              <img
                src="/loginPage/eye.png"
                alt="Toggle Password Visibility"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>
        <div
          className="form-options"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <label>
            <input
              type="checkbox"
              {...formik.getFieldProps("rememberMe")}
            />
            &nbsp;&nbsp;&nbsp;Remember me
          </label>
          <a
            href="#"
            className="forgot-password"
            style={{ color: "#6c63ff", textDecoration: "none" }}
          >
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="register-link">
        Don’t have an account?{" "}
        <a
          href="#"
          style={{ color: "#6c63ff", textDecoration: "none" }}
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
