import { useContext, useState } from "react";
import Logo from "/bgimg.png";
import { NavLink } from "react-router-dom";
import PrivacyPolicy from "../components/PrivacyPolicy";
import GeneralTerms from "../components/GeneralTerms";
import AddContext from "../contex/AddContext";

function Create() {
  const [error, setErrors] = useState({});

  const { Show, setShow, account, setAccount } = useContext(AddContext);

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
    phonenumber: "",
  });

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  console.log(formdata);

  const validate = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Input Email";
    }
    if (!data.password) {
      errors.password = "Input Password";
    }
    if (!data.fullname) {
      errors.fullname = "Input Fullname";
    }
    if (!data.username) {
      errors.username = "Input Username";
    }
    if (!data.phonenumber) {
      errors.phonenumber = "Input Phonenumber";
    }
    return errors;
  };

  // console.log(error);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate(formdata);

    setErrors(valid);

  };

  return (
    <div className=" p-7 w-full bg-slate-50 sm:bg-blue-600">
      <div className=" hidden sm:block w-[300px]  mx-auto pt-[40px] mb-[-50px]">
        <img src={Logo} alt="" />
      </div>
      <div className="sm:w-[500px] sm:p-3 rounded-2xl mx-auto mt-[7%] bg-slate-50 sm:shadow">
        <h1 className=" text-blue-700 text-4xl sm:text-center font-semibold">
          Create an Account
        </h1>
        <p className=" w-[70%] sm:w-full text-gray-500 sm:text-center my-4 text-sm">
          Create a free account and start your journey with Edesah
        </p>
        <form action="" className=" flex flex-col gap-3 mx-auto sm:w-[80%]">
          <div className="flex flex-col gap-3">
            <label className=" text-sm text-gray-500 ">Full Name</label>
            <input
              onChange={handleChange}
              name="fullname"
              type="text"
              placeholder="Full Name"
              className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
            />

            {error.fullname && (
              <p className="text-[12px] text-red-500 mt-[-15px]">
                {error.fullname}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className=" text-sm text-gray-500 ">User Name</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="User Name"
              className=" bg-gray-300 rounded h-[40px] pl-3"
            />
            {error.username && (
              <p className="text-[12px] text-red-500 mt-[-15px]">
                {error.username}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className=" text-sm text-gray-500 ">Email address</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email address"
              className=" bg-gray-300 rounded h-[40px] pl-3"
            />
            {error.email && (
              <p className="text-[12px] text-red-500 mt-[-15px]">
                {error.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className=" text-sm text-gray-500 ">Phone Number</label>
            <input
              onChange={handleChange}
              name="phonenumber"
              type="text"
              placeholder="Phone Number"
              className=" bg-gray-300 rounded h-[40px] pl-3"
            />
            {error.phonenumber && (
              <p className="text-[12px] text-red-500 mt-[-15px]">
                {error.phonenumber}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className=" text-sm text-gray-500 ">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="User Name"
              className=" bg-gray-300 rounded h-[40px] pl-3"
            />
            {error.password && (
              <p className="text-[12px] text-red-500 mt-[-15px]">
                {error.password}
              </p>
            )}
          </div>

          <p className=" text-sm text-gray-500">
            By signing up you are agreeing to our
            {/* TERMS AND CONDITION MODAL */}
            <a
              onClick={() => setAccount("Privacy policy")}
              className=" text-blue-700 underline cursor-pointer"
            >
              Term of Service
            </a>
            <span>view our</span>
            <a
              onClick={() => setAccount("Terms & Conditions")}
              className=" text-blue-700 underline cursor-pointer"
            >
              Privacy Policy
            </a>
          </p>

          <button
            onClick={handleSubmit}
            className=" bg-blue-700 text-white w-full sm:w-[70%] mx-auto mt-4 rounded h-[40px]"
          >
            Get Started
          </button>
          <p className=" text-center font-bold text-gray-700">
            Already have an account?
            <NavLink to={"/login"} className=" text-blue-600">
              {" "}
              Log in
            </NavLink>
          </p>
        </form>

        {account == "Privacy policy" && <PrivacyPolicy />}
        {account == "Terms & Conditions" && <GeneralTerms />}
      </div>
    </div>
  );
}

export default Create;
