import Logo from "../../../public/bgimg.png";
import check from "../../../public/check.png";

function EmailConfirmation() {
  return (
    <div className="h-screen bg-slate-50 sm:bg-blue-600">
      <div className=" hidden sm:block w-[300px] mx-auto pt-[40px] mb-[-40px] bg-blue-600">
        <img src={Logo} alt="" />
      </div>
      <div>
        <div className=" w-[95%] sm:w-[400px] p-3 rounded-2xl mx-auto sm:mt-[7%] bg-slate-50 sm:shadow ">
          <div className=" pt-10 w-[100px] mx-auto">
            <img src={check} alt="image of good" />
          </div>
          <h1 className=" pt-16 sm:pt-4 text-blue-700 text-2xl text-center font-semibold">
            You've got Mail!
          </h1>
          <p className=" text-gray-500 w-full text-center my-2 text-sm">
            we have sent your OTP to your email.
          </p>
          <div className=" flex flex-col mt-10 gap-1 mx-auto sm:w-[80%]">
            <p className=" font-semibold text-gray-800 text-center text-sm">
              Didn't get it?
              <a className=" text-blue-700 underline" href="#">
                Send me a new Mail
              </a>
            </p>

            <button className=" bg-blue-700 text-white sm:w-[85%] sm:mx-auto rounded h-[40px]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailConfirmation;
