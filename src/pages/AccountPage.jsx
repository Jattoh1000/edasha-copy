import { useContext } from "react";
import MeetSarah from "../components/MeetSarah";
import Navbar from "../components/Navbar";
import { useAuth } from "../contex/AuthContext";
import AddContext from "../contex/AddContext";
import ProfileDetails from "../components/ProfileDetails";
import ChangePassword from "../components/ChangePassword";
import InviteFriend from "../components/InviteFriend";
import PrivacyPolicy from "../components/PrivacyPolicy";
import GeneralTerms from "../components/GeneralTerms";
import DeleteAccount from "../components/DeleteAccount";
import MobileNavbar from "../components/MobileNavBar";
import { CgProfile } from "react-icons/cg";
import { GiPadlockOpen } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import chat from "../../public/chat.png";
import RequestWithdrawal from "../components/RequestWithdrawal";

function AccountPage() {
  const { user } = useAuth();
  const { account, setAccount, isCollapsed } = useContext(AddContext);

  return (
    <div
      className={`bg-slate-100 w-[100vw] ${
        isCollapsed ? "sm:w-[92vw]" : "sm:w-[75vw]"
      } sm:h-screen sm:ml-auto sm:flex pb-[60px] sm:pb-0 sm:pt-10`}
    >
      <div className="sm:block hidden">
        <Navbar />
      </div>

      <div
        className={`bg-slate-100 w-[100vw] ${
          isCollapsed ? "sm:w-[92vw]" : "sm:w-[75vw]"
        } sm:h-full sm:ml-auto sm:flex pb-[60px] sm:pb-0`}
      >
        <div className="w-[90%] md:w-[50%] px-5">
          <header>
            <h1 className="text-4xl font-medium">My Account</h1>
            <h2 className="text-base pt-2 text-gray-600 font-normal pb-4">
              {user?.userDetails?.fullname}
            </h2>
          </header>
          <section className=" flex flex-col gap-4">
            {/* NEW ACCOUNT DETAILS */}
            <div className="flex flex-col gap-3">
              <div
                onClick={() => setAccount("Profile Details")}
                className="py-4 pl-3 m-1 text-left border-[1px] border-gray-300 text-gray-600 text-sm rounded hover:scale-105 hover:bg-blue-700 hover:text-blue-100 transition-all active:scale-90 duration-300 flex items-center"
              >
                <div className="mr-3 text-blue-600 text-xl">
                  <CgProfile />
                </div>
                <div>Profile Details</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div
                onClick={() => setAccount("Change Password")}
                className="py-4 pl-3 m-1 text-left border-[1px] border-gray-300 text-gray-600 text-sm rounded hover:scale-105 hover:bg-blue-700 hover:text-blue-100 transition-all active:scale-90 duration-300 flex items-center"
              >
                <div className="mr-3 text-blue-600 text-xl">
                  <GiPadlockOpen />
                </div>
                <div>Change Password</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div
                onClick={() => setAccount("Invite Friends")}
                className="py-4 pl-3 m-1 text-left border-[1px] border-gray-300 text-gray-600 text-sm rounded hover:scale-105 hover:bg-blue-700 hover:text-blue-100 transition-all active:scale-90 duration-300 flex items-center"
              >
                <div className="mr-3 text-blue-600 text-xl">
                  <FaUserFriends />
                </div>
                <div>Invite Friends</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div
                onClick={() => setAccount("Privacy Policy")}
                className="py-4 pl-3 m-1 text-left border-[1px] border-gray-300 text-gray-600 text-sm rounded hover:scale-105 hover:bg-blue-700 hover:text-blue-100 transition-all active:scale-90 duration-300 flex items-center"
              >
                <div className="mr-3 text-blue-600 text-xl">
                  <IoDocumentText />
                </div>
                <div>Privacy Policy</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div
                onClick={() => setAccount("Terms & Conditions")}
                className="py-4 pl-3 m-1 text-left border-[1px] border-gray-300 text-gray-600 text-sm rounded hover:scale-105 hover:bg-blue-700 hover:text-blue-100 transition-all active:scale-90 duration-300 flex items-center"
              >
                <div className="mr-3 text-blue-600 text-xl">
                  <AiOutlineFileDone />
                </div>
                <div>Terms & Conditions</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div
                onClick={() => setAccount("Log out")}
                className="py-4 pl-3 m-1 text-left border-[1px] border-gray-300 text-gray-600 text-sm rounded hover:scale-105 hover:bg-blue-700 hover:text-blue-100 transition-all active:scale-90 duration-300 flex items-center"
              >
                <div className="mr-3 text-blue-600 text-xl">
                  <RiLogoutBoxRLine />
                </div>
                <div>Log out</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div
                onClick={() => setAccount("Delete Account")}
                className="py-4 pl-3 m-1 text-left border-[1px] border-gray-300 text-gray-600 text-sm rounded hover:scale-105 hover:bg-blue-700 hover:text-blue-100 transition-all active:scale-90 duration-300 flex items-center"
              >
                <div className="mr-3 text-blue-600 text-xl">
                  <MdOutlineDeleteForever />
                </div>
                <div>Delete Account</div>
              </div>
            </div>
          </section>
        </div>
        <div className="hidden sm:block px-5">
          <MeetSarah />
        </div>
      </div>

      <div className="sm:hidden block">
        <MobileNavbar />
      </div>

      {account === "Profile Details" && <ProfileDetails />}
      {account === "Change Password" && <ChangePassword />}
      {account === "Invite Friends" && <InviteFriend />}
      {account === "Privacy Policy" && <PrivacyPolicy />}
      {account === "Terms & Conditions" && <GeneralTerms />}
      {account === "Delete Account" && <DeleteAccount />}
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

export default AccountPage;
