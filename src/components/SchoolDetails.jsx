import { useContext, useState } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SchoolDetails() {
  const { setAccount } = useContext(AddContext);

  // State to store the selected value
  const [selectedDuration, setSelectedDuration] = useState("");

  // Handle change in select dropdown
  const handleChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    handleSuccess();
  };

  const handleSuccess = (e) => {
    toast.success("Student details sumbitted succefully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className=" absolute top-0 right-0 z-50">
      <div className=" w-[100vw] sm:w-[400px] h-screen p-3 pl-8 rounded-2xl mx-auto  bg-slate-50 shadow">
        <div
          onClick={() => setAccount("")}
          className="text-3xl font-bold pb-10 text-blue-800 cursor-pointer"
        >
          <IoClose />
        </div>
        <h1 className="text-blue-700 text-2xl text-left font-semibold">
          Enter school details
        </h1>
        <p className="text-gray-500 text-left mb-10 text-sm w-[50%] sm:w-full">
          We'd love to know more about you. Please fill the form below
        </p>
        <form
          onSubmit={handlesubmit}
          className="flex flex-col gap-3 sm:w-[90%]"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 font-semibold">
              What university are you in?
            </label>

            <input
              type="text"
              placeholder="Eg: University of Benin"
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 pt-3">
            <label className="text-sm text-gray-500 font-semibold">
              What university is your Course of Study?
            </label>
            <input
              type="text"
              placeholder="Eg: Philosophy"
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 pt-3">
            <label className="text-sm text-gray-500 font-semibold">
              What is the duration of your course?
            </label>

            <div>
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Select Duration
              </label>
              <select
                id="duration"
                value={selectedDuration}
                onChange={handleChange}
                className="bg-gray-300 rounded h-[40px] pl-3 w-full"
              >
                <option value="">Select a duration</option>
                <option value="4 years">4 years</option>
                <option value="5 years">5 years</option>
                <option value="6 years">6 years</option>
              </select>

              {/* Display the selected value */}
              <p className="mt-4">Selected Duration: {selectedDuration}</p>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white w-[100%] mx-auto mt-5 rounded h-[40px]"
          >
            Finish
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default SchoolDetails;
