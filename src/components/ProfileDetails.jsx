import { useContext, useState } from "react";
import AddContext from "../contex/AddContext";
import { useAuth } from "../contex/AuthContext";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCamera } from "react-icons/fa";

function ProfileDetails() {
  const [error, setErrors] = useState({});
  const { setAccount } = useContext(AddContext);
  const { user } = useAuth();

  const [formdata, setFormdata] = useState({
    email: user?.userDetails?.email,
    fullname: user?.userDetails?.fullname,
    username: user?.userDetails?.username,
    dateofbirth: user?.userDetails?.dateofbirth,
    country: user?.userDetails?.country,
    gender: user?.userDetails?.gender,
    profilePicture: null, // Add profile picture field
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFormdata({ ...formdata, profilePicture: file }); // Store file in formdata
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validate(formdata);
    setErrors(valid);

    if (Object.keys(valid).length === 0) {
      console.log("Form is valid, submitting...", formdata);
    } else {
      console.log("Validation errors", valid);
    }

    handleSuccess();
  };

  const validate = (data) => {
    let errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format";
    }

    // Full name validation
    if (!data.fullname) {
      errors.fullname = "Full name is required";
    } else if (data.fullname.length < 3) {
      errors.fullname = "Full name must be at least 3 characters";
    }

    // Username validation
    if (!data.username) {
      errors.username = "Username is required";
    } else if (data.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    // Date of Birth validation
    if (!data.dateofbirth) {
      errors.dateofbirth = "Date of birth is required";
    } else if (new Date(data.dateofbirth) > new Date()) {
      errors.dateofbirth = "Date of birth cannot be in the future";
    }

    // Country validation
    if (!data.country) {
      errors.country = "Country is required";
    } else if (data.country === "Others") {
      errors.country = "Please select a valid country";
    }

    return errors;
  };

  const handleSuccess = () => {
    toast.success("Profile submitted successfully", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const closeModal = () => {
    setAccount("");
  };

  return (
    <>
      <div className="inset-0 z-50 flex items-center justify-end">
        <div
          className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
          onClick={closeModal}
        ></div>

        <div className="absolute top-0 bg-white w-full sm:w-[400px] p-6 shadow-lg z-10">
          <div
            onClick={closeModal}
            className="text-3xl font-bold text-blue-800 cursor-pointer absolute top-4 right-4 hover:scale-125 active:scale-90 duration-200"
          >
            <IoClose />
          </div>
          <h1 className="text-gray-700 text-2xl text-center font-semibold">
            Profile Details
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-10">
            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <label htmlFor="image-upload" className="relative cursor-pointer">
                <div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex items-center justify-center relative">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="rounded-full w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-4xl">
                      <FaCamera />
                    </div>
                  )}
                  <div className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full">
                    <FaCamera className="text-white" />
                  </div>
                </div>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            {/* Username */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">User Name</label>
              <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="User Name"
                className="bg-gray-300 rounded h-[40px] pl-3"
                value={formdata.username}
              />
              {error.username && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.username}
                </p>
              )}
            </div>

            {/* Fullname */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Full Name</label>
              <input
                onChange={handleChange}
                name="fullname"
                type="text"
                placeholder="Full Name"
                className="bg-gray-300 rounded h-[40px] pl-3"
                value={formdata.fullname}
              />
              {error.fullname && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.fullname}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Email address</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email address"
                className="bg-gray-300 rounded h-[40px] pl-3"
                value={formdata.email}
              />
              {error.email && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.email}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Gender</label>
              <select
                name="gender"
                onChange={handleChange}
                className="bg-gray-300 rounded h-[40px] pl-3"
                value={formdata.gender}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Date of Birth</label>
              <input
                onChange={handleChange}
                name="dateofbirth"
                type="date"
                className="bg-gray-300 rounded h-[40px] pl-3"
                value={formdata.dateofbirth}
              />
              {error.dateofbirth && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.dateofbirth}
                </p>
              )}
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Country</label>
              <select
                name="country"
                onChange={handleChange}
                className="bg-gray-300 rounded h-[40px] pl-3"
                value={formdata.country}
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Others">Others</option>
              </select>
              {error.country && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.country}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white font-semibold py-3 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ProfileDetails;
