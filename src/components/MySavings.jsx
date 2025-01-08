import { useContext, useState } from "react";
import AddContext from "../contex/AddContext";
import { useAuth } from "../contex/AuthContext";
import SetFrequency from "../components/SetFrequency";
import RequestWithdrawal from "./RequestWithdrawal";
import SaveCard from "./SaveCard";
import { FaRegCopy } from "react-icons/fa";

function MySavings() {
  const { account, setAccount } = useContext(AddContext);
  const { user } = useAuth();

  const [number] = useState(123456789); // The number to be displayed

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(number.toString())
      .then(() => {
        alert("Number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div>
      <div className=" text-gray-50 sm:text-blue-600 bg-blue-600 sm:bg-gray-100 border-[1px] border-gray-300 shadow rounded-[10px] h-[220px] w-full p-3 flex flex-col">
        <h3 className=" font-semibold">My Saving</h3>
        <div className=" flex justify-center items-center h-[80%] gap-y-[8px]  flex-col text-center">
          <h2 className=" text-4xl font-semibold">
            &#8358; {user?.userAccount?.balance}
          </h2>
          <h3 className=" text-sm">6k/Month</h3>
        </div>
        <div className="flex justify-between items-center text-gray-50 sm:text-gray-600">
          <div className=" border border-gray-600 rounded-lg p-2">
            <h2 className=" font-semibold text-end text-xs">
              Please add a valid debit card
            </h2>
            <h2 className=" font-semibold text-sm">No Card Added!</h2>
          </div>
          <div>
            <div className="font-semibold text-end text-sm flex flex-col items-center justify-center">
              <h1>WEMA BANK</h1>
              <div className=" flex gap-3">
                <h1>{number}</h1>
                <button onClick={copyToClipboard}>
                  <FaRegCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden sm:flex gap-1 pt-3 text-gray-600">
        <div
          onClick={() => setAccount(1)}
          className="p-2 mt-1 text-center font-semibold w-[40%] border-[1px] border-gray-300 text-sm rounded-md hover:scale-105 transition-all duration-500"
        >
          Change Frequency
        </div>
        <div
          onClick={() => setAccount(2)}
          className="p-2 mt-1 text-center font-semibold w-[40%] border-[1px] border-gray-300 text-sm rounded-md hover:scale-105 transition-all duration-500"
        >
          Save Cards
        </div>
        <div
          onClick={() => setAccount(3)}
          className="p-2 mt-1 text-center font-semibold w-[40%] border-[1px] border-gray-300 text-sm rounded-md hover:scale-105 transition-all duration-500"
        >
          Request Withdral
        </div>
      </div>

      {account == 1 && <SetFrequency />}
      {account == 2 && <SaveCard />}
      {account == 3 && <RequestWithdrawal />}
    </div>
  );
}

export default MySavings;
