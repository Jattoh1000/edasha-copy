import { useContext } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";

function PrivacyPolicy() {
  const { setAccount } = useContext(AddContext);

  const closeModal = () => {
    setAccount("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div className=" absolute top-0 right-0 w-full sm:w-[400px] p-3 rounded mx-auto bg-slate-50 shadow">
        <div>
          <div
            onClick={() => setAccount(false)}
            className=" font-bold text-2xl text-right pr-6 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
          >
            <IoClose />
          </div>
          <h1 className=" text-3xl font-semibold text-gray-950 border-b-[1px]  p-3 border-gray-200 ">
            User Privacy Policy
          </h1>
          <div className=" text-sm text-gray-600 p-5 h-[450px] overflow-auto">
            <h3 className=" text-base text-gray-700 font-bold py-4">
              User Privacy Policy
            </h3>
            <p>
              At Edesah, we respect your privacy and are committed to protecting
              your personal information. This privacy policy explains how we
              collect, use, and disclose information when you use our piggy
              savings platform for study abroad applications.
            </p>

            <h3 className=" text-base text-gray-700 font-bold py-4">
              Information We Collect
            </h3>
            <ul>
              <li className="before:content-['-'] before:mr-2">
                Personal information: name, email address, phone number, and
                other details you provide when creating an account or using our
                services
              </li>
              <li className="before:content-['-'] before:mr-2">
                Application data: information related to your study abroad
                applications, including university choices, program details, and
                application status.
              </li>
              <li className="before:content-['-'] before:mr-2">
                Payment information: details about your payments, including
                amount, date, and method.
              </li>
              <li className="before:content-['-'] before:mr-2">
                Log data: IP address, browser type, device information, and
                usage patterns.
              </li>
            </ul>

            <h3 className=" text-base text-gray-700 font-bold py-4">
              How We Use Your Information
            </h3>
            <ul>
              <li className="before:content-['-'] before:mr-2">
                To provide and improve our services, including processing
                applications and payments.
              </li>
              <li className="before:content-['-'] before:mr-2">
                To communicate with you about your account, applications, and
                services.
              </li>
              <li className="before:content-['-'] before:mr-2">
                To comply with legal obligations and respond to legal requests.
              </li>
              <li className="before:content-['-'] before:mr-2">
                To analyze and improve our platform's performance and user
                experience.
              </li>
            </ul>

            <h3 className=" text-base text-gray-700 font-bold py-4">
              Information Sharing
            </h3>
            <ul>
              <li className="before:content-['-'] before:mr-2">
                We may share your information with:
              </li>
              <li className="before:content-['-'] before:mr-2">
                Third-party service providers (e.g., payment processors,
                universities).
              </li>
              <li className="before:content-['-'] before:mr-2">
                Law enforcement or legal authorities (if required by law).
              </li>
              <li className="before:content-['-'] before:mr-2">
                Our affiliates and subsidiaries (if necessary for business
                operations).
              </li>
            </ul>

            <h3 className=" text-base text-gray-700 font-bold py-4">
              Data Security
            </h3>
            <ul>
              <li className="before:content-['-'] before:mr-2">
                We implement appropriate technical and organizational measures
                to protect your information from unauthorized access,
                disclosure, or use
              </li>
              <li className="before:content-['-'] before:mr-2">
                Our platform uses encryption and secure servers to safeguard
                your data.
              </li>
            </ul>

            <h3 className=" text-base text-gray-700 font-bold py-4">
              Data Retention
            </h3>
            <ul>
              <li className="before:content-['-'] before:mr-2">
                We retain your information for as long as necessary to provide
                our services and comply with legal obligations.
              </li>
              <li className="before:content-['-'] before:mr-2">
                You can request deletion of your account and associated data at
                any time.
              </li>
            </ul>

            <h3 className=" text-base text-gray-700 font-bold py-4">
              Changes to This Policy
            </h3>
            <ul>
              <li className="before:content-['-'] before:mr-2">
                We may update this privacy policy from time to time.
              </li>
              <li className="before:content-['-'] before:mr-2">
                We will notify you of significant changes by email or through
                our platform.
              </li>
            </ul>

            <h3 className=" text-base text-gray-700 font-bold py-4">
              {" "}
              Contact Us
            </h3>
            <ul>
              <li className="before:content-['-'] before:mr-2">
                If you have questions or concerns about our privacy policy,
                please contact us at support@edesah.com.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
