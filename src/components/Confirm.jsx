function Confirm() {
  return (
    <div>
      <div className="sm:w-[500px] p-8 sm:p-3 rounded-2xl mx-auto mt-[7%] bg-slate-50 sm:shadow">
        <h1 className=" text-blue-700 text-4xl sm:text-center font-semibold">
          Check your email
        </h1>
        <p className=" text-gray-500 text-left my-4 text-sm sm:w-[80%] mx-auto">
          Enter 6 digit rest code sent to{" "}
          <span className=" font-bold">David.scholar@gmail.com </span>
          and create new password
        </p>
        <form action="" className=" flex flex-col gap-3 mx-auto sm:w-[80%]">
          <label className=" text-sm text-gray-500 ">Reset Code</label>
          <input
            type="text"
            placeholder="Reset Code"
            className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
          />

          <label className=" text-sm text-gray-500 ">New Password</label>
          <input
            type="password"
            placeholder="Password"
            className=" bg-gray-300 rounded h-[40px] pl-3"
          />

          <label className=" text-sm text-gray-500 ">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className=" bg-gray-300 rounded h-[40px] pl-3"
          />

          <button className=" bg-blue-700 text-white w-full sm:w-[70%] mx-auto mt-4 rounded h-[40px]">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Confirm;
