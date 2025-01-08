function Forgot() {
  return (
    <div>
      <div className=" w-[95%] sm:w-[500px] p-3 rounded-2xl mx-auto sm:mt-[7%] bg-slate-50 sm:shadow ">
        <h1 className=" pt-16 sm:pt-4 text-blue-700 text-4xl sm:text-center font-semibold">
          Forgot your Password?
        </h1>
        <p className=" text-gray-500 w-[60%] sm:w-full sm:text-center my-4 text-sm">
          Please enter your Edesah email address below
        </p>
        <form action="" className=" flex flex-col gap-3 mx-auto sm:w-[80%]">
          <label className=" text-sm text-gray-500 ">Email address</label>
          <input
            type="email"
            placeholder="Email address"
            className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
          />

          <button className=" bg-blue-700 text-white sm:w-[70%] sm:mx-auto mt-4 rounded h-[40px]">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
