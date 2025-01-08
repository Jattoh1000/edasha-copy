import { useContext, useState } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteAccount() {
  const { setAccount } = useContext(AddContext);

  const [selectedReason, setSelectedReason] = useState("");

  const handleInputChange = (e) => {
    setSelectedReason(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedReason) {
      console.log("Selected reason for deletion:", selectedReason);
      // You can send this data to a server or use it as needed
    } else {
      console.log("No reason selected.");
    }

    toast.success("Account delected succefully", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSuccess = () => {
    toast.success("Student sumbitted succefully", {
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
    <div>
      <div className="w-full sm:w-[400px] p-3 rounded mx-auto bg-slate-50 shadow absolute top-0 right-0">
        <div
          onClick={() => setAccount("")}
          className=" text-3xl font-bold text-blue-800 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
        >
          <IoClose />
        </div>
        <h1 className=" text-blue-700 text-2xl text-center font-semibold py-10">
          Before you go, can you help us understand why you're leaving?
        </h1>

        <p className="font-semibold text-gray-950 pb-5 pl-3">
          Choose an option
        </p>

        <form
          className="flex flex-col gap-3 mx-auto w-[90%]"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex justify-between font-semibold text-gray-950">
            Problem with my application
            <input
              type="radio"
              name="reason"
              value="application"
              checked={selectedReason === "application"}
              onChange={handleInputChange}
            />
          </label>
          <label className="flex justify-between font-semibold text-gray-950">
            Problem with my savings
            <input
              type="radio"
              name="reason"
              value="savings"
              checked={selectedReason === "savings"}
              onChange={handleInputChange}
            />
          </label>
          <label className="flex justify-between font-semibold text-gray-950">
            Problem with my withdrawal
            <input
              type="radio"
              name="reason"
              value="withdrawal"
              checked={selectedReason === "withdrawal"}
              onChange={handleInputChange}
            />
          </label>
          <label className="flex justify-between font-semibold text-gray-950">
            Other reasons
            <input
              type="radio"
              name="reason"
              value="other"
              checked={selectedReason === "other"}
              onChange={handleInputChange}
            />
          </label>

          <button
            className="bg-blue-700 text-white w-[100%] mx-auto mt-4 rounded h-[40px] my-10 hover:scale-105 hover:bg-blue-100 hover:text-blue-700 transition-all duration-500"
            type="button"
            onClick={handleSubmit}
            onSubmit={handleSuccess}
          >
            Delete account
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DeleteAccount;
