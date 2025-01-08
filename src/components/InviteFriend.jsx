import { useContext } from "react";
import AddContext from "../contex/AddContext";
import InviteImg from "/inviteimg.png";
import { IoClose } from "react-icons/io5";

function InviteFriend() {
  const { setAccount } = useContext(AddContext);

  return (
    <div className=" absolute top-0 right-0">
      <div className="w-full sm:w-[400px] p-3 mx-auto bg-slate-50 shadow">
        <div
          onClick={() => setAccount("")}
          className=" text-3xl font-bold text-blue-800 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
        >
          <IoClose />
        </div>
        <h1 className=" text-blue-700 text-2xl text-left font-semibold py-4">
          Invite friends to start using Edesah
        </h1>
        <h2 className=" text-gray-600 text-sm font-semibold">
          Click the button below to invite your friends to Edesah. They&apos;ll
          Thank you!
        </h2>

        <div>
          <img src={InviteImg} alt="Image of invite friends" />
        </div>

        <button
          className="bg-blue-700 text-white w-[100%] mx-auto mt-4 rounded h-[40px] my-10 hover:scale-105 hover:bg-blue-100  hover:text-blue-700 transition-all duration-500"
          type="button"
        >
          Invite Friends
        </button>
      </div>
    </div>
  );
}

export default InviteFriend;
