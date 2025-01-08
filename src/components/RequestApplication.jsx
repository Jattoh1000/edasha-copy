import { useContext, useState } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RequestApplication() {
  const { setAccount } = useContext(AddContext);

  // State for checkboxes and form inputs
  const [formData, setFormData] = useState({
    degree: "Select option",
    fieldOfStudy: "",
    services: {
      personalizedList: false,
      academicCVs: false,
      sopEssays: false,
      tailoredLetters: false,
      linkedinOptimization: false,
      visaGuidance: false,
    },
    specificConcerns: "",
    ceoCorrespondence: "Select option",
    expectations: "",
  });

  const handleSuccess = () => {
    toast.success("Application submitted successfully", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the entire form data for debugging
    handleSuccess();
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: {
        personalizedList: checked,
        academicCVs: checked,
        sopEssays: checked,
        tailoredLetters: checked,
        linkedinOptimization: checked,
        visaGuidance: checked,
      },
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="absolute top-0 right-0 z-50">
      <div className="w-full sm:w-[400px] p-6 rounded-2xl mx-auto bg-slate-50 shadow">
        <div
          onClick={() => setAccount(false)}
          className="text-3xl font-bold text-blue-800 cursor-pointer"
        >
          <IoClose />
        </div>
        <h1 className="text-blue-700 text-2xl font-semibold py-3">
          Request application form
        </h1>

        <form
          onSubmit={handlesubmit}
          className="flex flex-col gap-3 mx-auto w-[100%]"
        >
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">
              What degree are you applying for (Master's/phD)
            </label>
            <select
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              className="bg-gray-300 rounded h-[40px] pl-3 text-black"
            >
              <option>Select option</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">
              What's your prospective field of study?
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleInputChange}
              placeholder="Enter Text here"
              className="bg-gray-300 rounded h-[40px] pl-3 text-black"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-gray-500">
                Choose service you want
              </p>
              <div className="text-sm font-semibold text-blue-700">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  className="mr-2"
                />
                Select all
              </div>
            </div>

            {Object.keys(formData.services).map((service) => (
              <div className="flex items-center" key={service}>
                <input
                  type="checkbox"
                  name={service}
                  checked={formData.services[service]}
                  onChange={handleCheckboxChange}
                  className="mr-2 h-4 w-4"
                />
                <label className="text-base text-gray-900 font-semibold">
                  {service.replace(/([A-Z])/g, " $1").trim()}{" "}
                  {/* Format service name */}
                </label>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">
              Is there anything specific you're struggling with or concerned
              about in the application process?
            </label>
            <input
              type="text"
              name="specificConcerns"
              value={formData.specificConcerns}
              onChange={handleInputChange}
              className="bg-gray-300 rounded h-[40px] pl-3 text-black"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">
              Would you love to correspond directly with our CEO during the
              application process?
            </label>
            <select
              name="ceoCorrespondence"
              value={formData.ceoCorrespondence}
              onChange={handleInputChange}
              className="bg-gray-300 rounded h-[40px] pl-3 text-black"
            >
              <option>Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">
              How can we exceed your expectation?
            </label>
            <input
              type="text"
              name="expectations"
              value={formData.expectations}
              onChange={handleInputChange}
              placeholder="Enter Text here"
              className="bg-gray-300 rounded h-[40px] pl-3 text-black"
            />
          </div>

          <button
            type="submit"
            className="text-sm font-semibold bg-blue-700 text-white w-[70%] mx-auto mt-4 rounded h-[40px] hover:scale-105 hover:bg-blue-100 hover:text-blue-700 transition-all duration-500"
          >
            Request Application
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RequestApplication;
