import { useContext } from "react";
import AddContext from "../contex/AddContext";
import QuickSave from "./QuickSave";
import { useAuth } from "../contex/AuthContext";
import ProgressBar from "./ProgressBar";

function AmountLeft() {
  const { setMore, account, setAccount } = useContext(AddContext);
  const { user } = useAuth();

  return (
    <div>
      <div className=" mt-6 sm:mt-0 border-[1px] border-gray-300 shadow rounded-[10px] sm:h-[220px] w-full p-6 flex gap-3 sm:block">
        <div className=" sm:hidden h-[100px] w-[120px] bg-blue-600 rounded"></div>
        <div className="sm:h-[130px] w-full">
          <h3 className=" text-gray-600 sm:text-blue-600 font-semibold sm:text-xl pb-2 sm:pb-5">
            Target due in 116 weeks
          </h3>
          <div className="flex justify-between w-[90%]">
            <div className="text-gray-900">
              <h2 className=" text-sm font-semibold">Amount left</h2>
              <h3 className=" font-semibold">
                &#8358; {700_000 - user?.userAccount?.balance}
              </h3>
            </div>
            <div className=" text-gray-900">
              <h2 className=" text-sm font-semibold">Target Amount</h2>
              <h2 className=" font-semibold">&#8358; 700,000</h2>
            </div>
          </div>

          <div className="flex gap-1 pt-3 text-gray-600">
            <ProgressBar />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setAccount(4)}
          className=" text-sm font-semibold bg-blue-700 text-white w-full mx-auto mt-4 rounded h-[40px] hover:scale-105 hover:bg-blue-200  hover:text-blue-700 transition-all duration-500"
        >
          Quick save
        </button>
        <div
          onClick={() => setMore(true)}
          className="w-[60px] ml-5 mt-4 rounded h-[40px] bg-blue-200 flex flex-col justify-evenly items-center cursor-pointer sm:hidden"
        >
          <span className="w-[6px] h-[6px] bg-blue-600 block rounded-full"></span>
          <span className="w-[6px] h-[6px] bg-blue-600 block rounded-full"></span>
          <span className="w-[6px] h-[6px] bg-blue-600 block rounded-full"></span>
        </div>
      </div>

      {account == 4 && <QuickSave />}
    </div>
  );
}

export default AmountLeft;
