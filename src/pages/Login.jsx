import { useState } from "react";
import Logo from "/bgimg.png";
import { NavLink, useNavigate } from "react-router-dom";
import {login} from '../utills/api.js'
import { useAuth } from "../contex/AuthContext.jsx";

function Login() {
  const [error, setErrors] = useState({});
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useAuth();

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // console.log(formdata);

  const validate = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Input Email";
    }
    if (!data.password) {
      errors.password = "Input Password";
    }
    return errors;
  };

  // console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validate(formdata);

    setErrors(valid);

    const data = await login(formdata)
    // setUser(data)
    navigate('/')
  };

  return (
    <div className=" bg-slate-50 sm:bg-blue-600 h-screen">
      <div className=" hidden sm:block sm:w-[300px] mx-auto sm:pt-[40px] sm:mb-[-50px]">
        <img src={Logo} alt="image of logo" />
      </div>
      <div className="sm:w-[500px] sm:mt-[100px] p-3 rounded-2xl mx-auto pt-[7%] sm:pt-4 bg-slate-50 sm:shadow">
        <h1 className=" text-blue-700 text-4xl sm:text-center w-[80%] mx-auto font-semibold">
          Log in to Edesah
        </h1>
        <p className=" hidden sm:block text-gray-500 text-center my-4 text-sm">
          Create a free account and start your journey with Edesah
        </p>
        <form action="" className=" pt-4 flex flex-col gap-3 mx-auto w-[80%]">
          <div className="flex flex-col gap-3">
            <label className=" text-sm text-gray-500 ">Email address</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
            />

            {error.email && (
              <p className="text-[12px] text-red-500">{error.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className=" text-sm text-gray-500 ">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              className=" bg-gray-300 rounded h-[40px] pl-3"
            />
            {error.password && (
              <p className="text-[12px] text-red-500">{error.password}</p>
            )}
          </div>

          <NavLink
            to={"/forgotpage"}
            className=" text-blue-700 underline font-bold"
          >
            Forgot Password?
          </NavLink>

          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white w-full sm:w-[70%] mx-auto mt-4 rounded h-[40px]"
          >
            Log in
          </button>
          <p className=" text-center font-bold text-gray-700">
            Don’t have an account?
            <NavLink to={"/create"} className=" text-blue-600">
              {" "}
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
