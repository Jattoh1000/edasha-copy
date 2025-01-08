import { useState, useContext } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";

function SetFrequency() {
  const { setAccount } = useContext(AddContext);

  // State to store form data
  const [formData, setFormData] = useState({
    weeklyAmount: "",
    startDate: "",
    frequency: [], // New field for storing selected frequencies
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        frequency: [...prevState.frequency, value],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        frequency: prevState.frequency.filter((freq) => freq !== value),
      }));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Optionally clear the form after submission
    setFormData({
      weeklyAmount: "",
      startDate: "",
      frequency: [],
    });

    handleSuccess();
  };

  const handleSuccess = () => {
    toast.success("Frequency set successfully", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="absolute top-0 right-0 z-50">
      <div className="w-[100vw] sm:w-[400px] h-screen p-3 pl-8 rounded-2xl mx-auto bg-slate-50 shadow">
        <div
          onClick={() => setAccount("")}
          className="text-3xl font-bold pb-5 text-blue-800 cursor-pointer"
        >
          <IoClose />
        </div>
        <h1 className="text-blue-700 text-2xl text-left font-semibold">
          Set frequency
        </h1>
        <p className="text-gray-500 text-left mb-6 text-sm">
          Tailor your debit schedule to match your financial needs.
        </p>
        <div>
          <h3 className="text-gray-500 text-left text-sm font-semibold">
            Select Frequency
          </h3>
          <div className=" bg-blue-200 text-blue-600 w-[70%] sm:w-full text-sm font-semibold p-3 rounded">
            <p className=" w-[80%]">
              The standard amount for saving target is capped at 700,000
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[90%]">
          <div className="flex flex-row gap-4 mx-auto mt-6 w-[98%]">
            {/* Daily Checkbox */}
            <label className="h-[80px] w-[80px] relative">
              <input
                type="checkbox"
                value="daily"
                className="appearance-none w-full h-full border-4 border-gray-300 rounded bg-blue-600 checked:border-blue-900 cursor-pointer"
                onChange={handleCheckboxChange}
                checked={formData.frequency.includes("daily")}
              />
              <span className="text-gray-100 text-sm font-medium absolute left-[25%] top-1/3">
                Daily
              </span>
              {formData.frequency.includes("daily") && (
                <div className="absolute top-[5%] right-[5%]">
                  <FaCheckCircle className="text-blue-900" />
                </div>
              )}
            </label>

            {/* Weekly Checkbox */}
            <label className="h-[80px] w-[80px] relative">
              <input
                type="checkbox"
                value="weekly"
                className="appearance-none w-full h-full border-4 border-gray-300 rounded bg-blue-600 checked:border-blue-900 cursor-pointer"
                onChange={handleCheckboxChange}
                checked={formData.frequency.includes("weekly")}
              />
              <span className="text-gray-100 text-sm font-medium absolute left-[15%] top-1/3">
                Weekly
              </span>
              {formData.frequency.includes("weekly") && (
                <div className="absolute top-[5%] right-[5%]">
                  <FaCheckCircle className="text-blue-900" />
                </div>
              )}
            </label>

            {/* Bi-weekly Checkbox */}
            <label className="h-[80px] w-[80px] relative">
              <input
                type="checkbox"
                value="bi-weekly"
                className="appearance-none w-full h-full border-4 border-gray-300 rounded bg-blue-600 checked:border-blue-900 cursor-pointer"
                onChange={handleCheckboxChange}
                checked={formData.frequency.includes("bi-weekly")}
              />
              <span className="text-gray-100 text-sm font-medium absolute left-[4%] top-1/3">
                Bi-weekly
              </span>
              {formData.frequency.includes("bi-weekly") && (
                <div className="absolute top-[5%] right-[5%]">
                  <FaCheckCircle className="text-blue-900" />
                </div>
              )}
            </label>

            {/* Monthly Checkbox */}
            <label className="h-[80px] w-[80px] relative">
              <input
                type="checkbox"
                value="monthly"
                className="appearance-none w-full h-full border-4 border-gray-300 rounded bg-blue-600 checked:border-blue-900 cursor-pointer"
                onChange={handleCheckboxChange}
                checked={formData.frequency.includes("monthly")}
              />
              <span className="text-gray-100 font-medium absolute left-[8%] top-1/3 text-sm">
                Monthly
              </span>
              {formData.frequency.includes("monthly") && (
                <div className="absolute top-[5%] right-[5%]">
                  <FaCheckCircle className="text-blue-900" />
                </div>
              )}
            </label>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 font-semibold">
              How much do you want to save weekly?
            </label>
            <input
              type="number"
              name="weeklyAmount"
              value={formData.weeklyAmount}
              onChange={handleChange}
              placeholder="Min(4,000)"
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 pt-3">
            <label className="text-sm text-gray-500 font-semibold">
              Set start date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white w-[100%] mx-auto mt-5 rounded h-[40px]"
          >
            Finish
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SetFrequency;
