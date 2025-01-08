import { useContext } from "react";
import AddContext from "../contex/AddContext";
import SetFrequency from "./SetFrequency";
import SaveCard from "./SaveCard";
import RequestWithdrawal from "./RequestWithdrawal";

function MoreOption() {
  const { setMore, account, setAccount } = useContext(AddContext);

  const closeModal = () => {
    setMore(false);
  };
  return (
    <div>
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div className="bottom-0 left-0 fixed rounded p-5 bg-white w-[100vw] shadow-lg z-10">
        <div className="flex justify-between w-[90%] pb-3">
          <h1 className=" font-semibold text-xl text-gray-600">More Option</h1>
          <div
            onClick={() => setMore(false)}
            className=" font-bold text-2xl text-right pr-6 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
          >
            x
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            onClick={() => {
              setAccount(1), setMore(false);
            }}
            className="py-2 pl-3  m-1 text-left w-[90%] border-[1px] border-gray-300 text-gray-800 rounded-lg cursor-pointer"
          >
            <h2 className=" font-semibold text-xl">Change Frequency</h2>
            <h3 className=" text-sm">Change the frequency of your Targets</h3>
          </div>

          <div
            onClick={() => {
              setAccount(2), setMore(false);
            }}
            className="py-2 pl-3  m-1 text-left w-[90%] border-[1px] border-gray-300 text-gray-800 rounded-lg cursor-pointer"
          >
            <h2 className=" font-semibold text-xl">Saved Cards</h2>
            <h3 className=" text-sm">Change the frequency of your Targets</h3>
          </div>

          <div
            onClick={() => {
              setAccount(3), setMore(false);
            }}
            className="py-2 pl-3  m-1 text-left w-[90%] border-[1px] border-gray-300 text-gray-800 rounded-lg cursor-pointer"
          >
            <h2 className=" font-semibold text-xl">Request Withdrawal</h2>
            <h3 className=" text-sm">Request withdrawal of your funds here</h3>
          </div>
        </div>
      </div>

      {account == 1 && <SetFrequency />}
      {account == 2 && <SaveCard />}
      {account == 3 && <RequestWithdrawal />}
    </div>
  );
}

export default MoreOption;
