import Navbar from "../components/Navbar";

import MeetSarah from "../components/MeetSarah";
import { useContext } from "react";
import AddContext from "../contex/AddContext";
import RequestApplication from "../components/RequestApplication";
import MobileNavbar from "../components/MobileNavBar";
import chat from "../../public/chat.png";
import RequestWithdrawal from "../components/RequestWithdrawal";

const data = [
  { info: "Personalized List of Potential Schools" },
  { info: "3 Academic CVs" },
  { info: "LinkedIn Optimization" },
  { info: "3 Statements or Application Essays" },
  { info: "6 sets of sample Recommendation Letters" },
  { info: "Guidance on Visa processing & Study permit." },
];

function ApplicationPage() {
  const { account, setAccount, isCollapsed } = useContext(AddContext);
  const displaydata = data;

  return (
    <div
      className={`bg-slate-100 w-[100vw] ${
        isCollapsed ? "sm:w-[92vw]" : "sm:w-[75vw]"
      } sm:h-full sm:ml-auto sm:flex pb-[60px] sm:pb-0`}
    >
      <div className="sm:block hidden">
        <Navbar />
      </div>

      <div className="p-8 flex-1">
        <header>
          <h1 className="text-3xl font-medium py-7">Request Application</h1>
        </header>
        <section className="flex flex-col-reverse sm:flex-row">
          {/* REQUEST APPLICATION SECTION */}
          <div className="flex-1 sm:mr-5">
            <h2 className=" text-2xl sm:text-3xl text-gray-600 font-normal pb-4 border-t-2 pt-5">
              Application Process
            </h2>
            <blockquote className=" text-gray-600">
              <p className=" pb-3">
                Congratulations on taking the first step towards achieving your
                international education goals! Our team of experts is dedicated
                to helping you navigate the complex process of studying abroad.{" "}
              </p>
              <p className=" pb-3">
                And, with our 100% money-back guarantee, you can trust that
                we&apos;re committed to your success.
              </p>
              <p>
                We&apos;ll be in touch soon to discuss your application and
                provide personalized guidance. If you have any questions or
                concerns in the meantime, please don&apos;t hesitate to reach
                out. We&apos;re here to support you every step of the way!
              </p>
            </blockquote>

            {/* WHAT YOU WILL GET SECTION */}
            <div className=" flex-1 py-8">
              <h2>What you&apos;d be getting</h2>
              <div>
                {displaydata.map((item, index) => (
                  <button
                    key={index}
                    className="p-2 m-1 bg-blue-100 border-[1px] border-blue-700 text-blue-700 text-sm rounded hover:scale-105 hover:bg-blue-700  hover:text-blue-100 transition-all duration-500"
                  >
                    {item.info}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <MeetSarah />
        </section>

        {/* IMPORTANT INOFRMATION SECTION */}
        <section className="flex sm:gap-12 mt-8">
          <div className=" sm:flex-1  bg-blue-100 px-5 sm:px-10 rounded ">
            <h3 className=" text-gray-950 font-semibold text-xl py-4 border-b-[1px] border-gray-300">
              Important Information
            </h3>
            <h3 className=" text-blue-700 font-semibold text-xl pt-2">
              Full Application Management{" "}
            </h3>
            <p className=" text-gray-600 pb-7">
              Select "All Services" on the next page to let us handle the entire
              application process on your behalf. You can opt-in to receive
              updates and be carried along throughout the process, if desired.
            </p>
            <h3 className=" text-blue-700 font-semibold text-xl py-4 border-b-[1px] border-gray-300">
              Important Information
            </h3>
            <p className=" text-gray-600 pb-7">
              Choose specific services you need help with, and we'll send a
              detailed cost estimate via email. Once approved, the amount will
              be deducted from your wallet.
            </p>
            <button
              onClick={() => setAccount(true)}
              className="hidden sm:block text-sm font-semibold mb-7 bg-blue-700 text-white w-[70%] mx-auto mt-4 rounded h-[40px] hover:scale-105 hover:bg-blue-300  hover:text-blue-500 transition-all duration-500"
            >
              Request Application
            </button>

            <button
              onClick={() => setAccount(true)}
              className="block sm:hidden text-sm font-semibold mb-7 bg-blue-700 text-white w-[100%] mx-auto mt-4 rounded h-[40px] hover:scale-105 hover:bg-blue-300  hover:text-blue-500 transition-all duration-500"
            >
              Request Application
            </button>
          </div>
          <div className=" sm:flex-1"></div>
        </section>

        {account && <RequestApplication />}
        {account == 3 && <RequestWithdrawal />}

        <div className="sm:hidden block">
          <MobileNavbar />
        </div>
      </div>
      <div
        onClick={() => setAccount(3)}
        className=" fixed bottom-[15%] sm:bottom-0 right-0 cursor-pointer"
      >
        <img src={chat} alt="image of chat logo" />
      </div>
    </div>
  );
}

export default ApplicationPage;
