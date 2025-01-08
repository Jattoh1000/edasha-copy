import AmountLeft from "../components/AmountLeft";
import MySavings from "../components/MySavings";
import Navbar from "../components/Navbar";
import RecentTransaction from "../components/RecentTransaction";
import TargerImg from "/targetimg.png";
import MobileNavbar from "../components/MobileNavBar";
import MoreOption from "../components/MoreOption";
import { useContext } from "react";
import AddContext from "../contex/AddContext";
import chat from "../../public/chat.png";
import RequestWithdrawal from "../components/RequestWithdrawal";

function TargetPage() {
  const { account, setAccount, isCollapsed } = useContext(AddContext);
  const { more } = useContext(AddContext);
  return (
    <div
      className={`bg-slate-100 w-[100vw] ${
        isCollapsed ? "sm:w-[92vw]" : "sm:w-[75vw]"
      } sm:h-full sm:ml-auto sm:flex pb-[60px] sm:pb-0`}
    >
      <div className="sm:block hidden">
        <Navbar />
      </div>
      <div className=" w-full ml-5 sm:ml-10">
        <header className="px-[2vw] pt-5 pb-8">
          <h1 className="text-3xl font-medium pt-4 ">Target</h1>
          <h2 className=" font-semibold pt-2 text-gray-600">
            Let&apos;s see what you&apos;ve got cooking!
          </h2>
        </header>
        <div className="sm:flex sm:gap-6">
          <div className=" w-[90vw] sm:w-[60%]">
            <MySavings />
          </div>
          <div className="w-[97vw] sm:w-[40%] pr-8">
            <AmountLeft />
          </div>
        </div>

        <div className="sm:flex sm:gap-6">
          {more && <MoreOption />}
          <div className=" w-[90%] mx-auto sm:m-0 sm:w-[60%]">
            <RecentTransaction />
          </div>
          <div className=" w-[97vw] sm:w-[40%] pr-8 mt-10 hidden sm:block">
            <div>
              <h2 className=" text-gray-700 font-semibold mb-4">
                COMPLETE YOUR SETUP
              </h2>

              <div>
                <img src={TargerImg} alt="image of setup" />
              </div>
              <div className=" w-full mt-8">
                <p className=" text-gray-700 font-semibold mb-4">
                  Download the Mobile App
                </p>
                <div className="flex justify-between items-center">
                  <div className="p-2 m-1 w-[50%] text-center bg-gray-900 border-[1px] border-gray-700 text-gray-200 text-sm rounded cursor-pointer hover:scale-105 hover:bg-gray-200  hover:text-gray-900 transition-all duration-500">
                    Get on iPhone
                  </div>
                  <div className="p-2 m-1 w-[50%] text-center bg-gray-900 border-[1px] border-gray-700 text-gray-200 text-sm rounded cursor-pointer hover:scale-105 hover:bg-gray-200  hover:text-gray-900 transition-all duration-500">
                    Get on Andriod
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden block">
        <MobileNavbar />
      </div>
      {account == 3 && <RequestWithdrawal />}
      <div
        onClick={() => setAccount(3)}
        className=" fixed bottom-[15%] sm:bottom-0 right-0 cursor-pointer"
      >
        <img src={chat} alt="image of chat logo" />
      </div>
    </div>
  );
}

export default TargetPage;
