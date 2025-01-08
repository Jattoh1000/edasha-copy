import React, { useState, useRef } from "react";
import Logo from "../../../public/bgimg.png";

const OtpScreen = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus on next input field if input is not empty
    if (element.value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      if (index > 0 && otp[index] === "") {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").split("");
    let newOtp = [...otp];
    pasteData.forEach((char, index) => {
      if (index < newOtp.length && !isNaN(char)) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);
  };

  return (
    <div>
      <div className=" bg-slate-50 sm:bg-blue-600 h-screen">
        <div className=" hidden sm:block sm:w-[300px] mx-auto sm:pt-[40px] sm:mb-[-50px]">
          <img src={Logo} alt="image of logo" />
        </div>
        <div className="sm:w-[500px] sm:mt-[100px] p-3 rounded-2xl mx-auto pt-[7%] sm:pt-4 bg-slate-50 sm:shadow">
          <h1 className=" text-blue-700 text-2xl text-center w-[60%] mx-auto font-semibold">
            Please enter the code we sent to your Email
          </h1>
          <p className=" text-gray-500 text-center my-2 text-sm">
            we have sent your OTP to your Email.
          </p>
          <form className=" w-full" action="POST">
            <div
              className="flex gap-2 justify-center sm:w-[80%] mx-auto"
              onPaste={handlePaste}
            >
              {otp.map((data, index) => (
                <input
                  className=" bg-inherit w-10 p-4 border-b-2 border-blue-600 my-10 focus:outline-none"
                  type="text"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            <p className=" font-semibold text-gray-800 text-center">
              Didn't get it?
              <a className=" text-blue-700 underline" href="#">
                Send me a new Mail
              </a>
            </p>
            <button className=" bg-blue-700 text-white w-[70%] ml-[15%] mt-2 rounded h-[40px]">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
