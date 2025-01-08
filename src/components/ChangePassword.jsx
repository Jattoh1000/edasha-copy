import { useContext, useState } from "react";
import AddContext from "../contex/AddContext";
import { useAuth } from "../contex/AuthContext";
import { updatePassWord } from "../utills/api";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChangePassword() {
  const { setAccount } = useContext(AddContext);

  const [error, setErrors] = useState({});
  const [formdata, setFormdata] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const validate = (data) => {
    let errors = {};

    if (!data.currentPassword) {
      errors.currentPassword = "Please enter your current password";
    }

    if (!data.newPassword) {
      errors.newPassword = "Please enter a new password";
    } else if (data.newPassword.length < 8) {
      errors.newPassword = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(data.newPassword)) {
      errors.newPassword =
        "Password must include at least one uppercase letter";
    } else if (!/\d/.test(data.newPassword)) {
      errors.newPassword = "Password must include at least one number";
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Please confirm your new password";
    } else if (data.newPassword !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validate(formdata);
    setErrors(valid);
    if (valid) {
      const response = await updatePassWord({
        oldPassword: formdata.currentPassword,
        newPassword: formdata.newPassword,
      });
      console.log(response);
    }

    toast.success("Password changed succefully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const closeModal = () => {
    setAccount("");
  };

  return (
    <div className="modal-container fixed inset-0 z-50 flex items-center justify-end">
      {/* Blur Overlay */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40"
      ></div>

      {/* Modal */}
      <div className="relative z-50 w-full sm:w-[400px] h-screen p-3 pl-8 bg-slate-50 shadow-right">
        <div
          onClick={() => setAccount("")}
          className="text-3xl font-bold pb-4 text-blue-800 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
        >
          <IoClose />
        </div>
        <h1 className="text-blue-700 text-2xl text-left font-semibold">
          Change Password
        </h1>
        <p className="text-gray-500 text-left mb-10 text-sm">
          Set a new password for your account
        </p>
        <form action="" className="flex flex-col gap-3 w-[90%]">
          <div className="flex flex-col gap-3">
            <label className="text-sm text-gray-500 font-semibold">
              Enter your current Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                name="currentPassword"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Current Password"
                className="bg-gray-300 rounded h-[40px] pl-3 w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {error.currentPassword && (
              <p className="text-[12px] text-red-500 mt-[-15px]">
                {error.currentPassword}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm text-gray-500 font-semibold">
              Enter New Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                name="newPassword"
                type={showNewPassword ? "text" : "password"} // Toggle new password visibility
                placeholder="New Password"
                className="bg-gray-300 rounded h-[40px] pl-3 w-full"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>
            {error.newPassword && (
              <p className="text-[12px] text-red-500 mt-[-15px]">
                {error.newPassword}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm text-gray-500 font-semibold">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                placeholder="Confirm New Password"
                className="bg-gray-300 rounded h-[40px] pl-3 w-full"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {error.confirmPassword && (
              <p className="text-[12px] text-red-500 mt-[-15px]">
                {error.confirmPassword}
              </p>
            )}
          </div>

          <p className="text-sm font-semibold text-blue-700 bg-blue-100 p-3 pr-10 mt-6 rounded">
            You will be logged out and required to log in with your new password
          </p>

          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white w-[100%] mx-auto mt-2 rounded h-[40px]"
          >
            Update
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ChangePassword;
