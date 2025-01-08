import { useContext } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";

// Introduction- - .- - -
function GeneralTerms() {
  const { setAccount } = useContext(AddContext);

  const closeModal = () => {
    setAccount("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div className="bg-slate-50 rounded-md w-full sm:w-[400px] absolute top-0 right-0 ">
        <div
          onClick={() => setAccount("")}
          className=" ml-3 font-bold text-2xl text-right pr-6 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
        >
          <IoClose />
        </div>
        <h1 className=" text-3xl font-semibold text-gray-950 border-b-[1px]  p-3 border-gray-200 ">
          General Terms of Service.
        </h1>
        <div className=" text-sm text-gray-600 p-5 h-[450px] overflow-auto">
          <h3 className=" text-base text-gray-700 font-bold py-4">
            General Terms of Service
          </h3>
          <p>
            These ("Terms") apply to your use of our piggy savings platform for
            study abroad applications.
          </p>

          <h3 className=" text-base text-gray-700 font-bold py-4">
            Account Registration
          </h3>
          <ul>
            <li className="before:content-['-'] before:mr-2">
              You must register for an account to use our services.
            </li>
            <li className="before:content-['-'] before:mr-2">
              You are responsible for maintaining the security of your account
              and password.
            </li>
          </ul>

          <h3 className=" text-base text-gray-700 font-bold py-4">
            Use of Services
          </h3>
          <ul>
            <li className="before:content-['-'] before:mr-2">
              Our services are intended for individuals applying to study abroad
              programs.
            </li>
            <li className="before:content-['-'] before:mr-2">
              You agree to use our services only for their intended purpose.
            </li>
          </ul>

          <h3 className=" text-base text-gray-700 font-bold py-4">
            Fees and Payments
          </h3>
          <ul>
            <li className="before:content-['-'] before:mr-2">
              Our services may require payment of fees, which will be deducted
              from your wallet.
            </li>
            <li className="before:content-['-'] before:mr-2">
              You are responsible for ensuring sufficient funds in your wallet
            </li>
          </ul>

          <h3 className=" text-base text-gray-700 font-bold py-4">
            Intellectual Property
          </h3>
          <ul>
            <li className="before:content-['-'] before:mr-2">
              Our platform and services are protected by intellectual property
              rights.
            </li>
            <li className="before:content-['-'] before:mr-2">
              You agree not to reproduce, modify, or distribute our content
              without permission.
            </li>
          </ul>

          <h3 className=" text-base text-gray-700 font-bold py-4">
            Termination
          </h3>
          <ul>
            <li className="before:content-['-'] before:mr-2">
              We may terminate or suspend your account and access to our
              services at any time.
            </li>
            <li className="before:content-['-'] before:mr-2">
              You can delete your account at any time.
            </li>
          </ul>

          <h3 className=" text-base text-gray-700 font-bold py-4">
            Changes to Terms
          </h3>
          <ul>
            <li className="before:content-['-'] before:mr-2">
              We may update these Terms from time to time.
              <li className="before:content-['-'] before:mr-2">
                We will notify you of significant changes by email or through
                our platform.
              </li>
            </li>
          </ul>
          <p className=" pt-5">
            By using our services, you agree to these Terms and our User Privacy
            Policy. If you have any questions or concerns, please contact us at
            support@edesah.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeneralTerms;
