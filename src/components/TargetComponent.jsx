import { useContext, useState } from "react";
// import AddContext from "../contex/AddContext";
import { useAuth } from "../contex/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons for toggle
import AddContext from "../contex/AddContext";
import QuickSave from "./QuickSave";

function Target() {
  const { account, setAccount } = useContext(AddContext);
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  return (
    <div>
      <div className="bg-bgImg bg-center bg-blue-600 text-gray-100 rounded-[10px] h-[220px] w-[90vw] sm:w-full p-3">
        <h3 className="font-semibold">My Saving</h3>
        <div className="flex justify-center items-center h-[80%] gap-y-[8px] flex-col text-center">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl">
              &#8358; {isVisible ? user?.userAccount?.balance : "******"}
            </h2>
            {/* Toggle visibility */}
            <button onClick={() => setIsVisible(!isVisible)} className="ml-2">
              {isVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {user?.userAccount?.target && (
            <h3 className="text-sm">{user?.userAccount?.target}/Month</h3>
          )}
          <h2 className="font-semibold text-end">Goal- &#8358; 700,000</h2>
        </div>
      </div>
      <div
        onClick={() => setAccount(4)}
        className="p-2 mt-4 w-[40%] sm:block hidden bg-blue-600 border-[1px] border-blue-100 text-blue-100 text-sm rounded-md hover:scale-105 transition-all duration-500"
      >
        Quick save
      </div>
      {account == 4 && <QuickSave />}
    </div>
  );
}

export default Target;
