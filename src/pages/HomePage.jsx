import { useContext } from "react";
import MeetSarah from "../components/MeetSarah";
import Navbar from "../components/Navbar";
import TargetComponent from "../components/TargetComponent";
import { AddContext } from "../contex/AddContext";
import RecentTransaction from "../components/RecentTransaction";
import SchoolDetails from "../components/SchoolDetails";
import SetFrequency from "../components/SetFrequency";
import MobileNavbar from "../components/MobileNavBar";
import AddBvn from "../components/AddBvn";
import SaveCard from "../components/SaveCard";
import { useAuth } from "../contex/AuthContext";
import nin from "../../public/nin.png";
import school from "../../public/school.png";
import frequency from "../../public/frequency.png";
import chat from "../../public/chat.png";
import RequestWithdrawal from "../components/RequestWithdrawal";

const data = [
  {
    info: "Enter School Details",
    logo: <img src={school} alt="image of nin" />,
  },
  {
    info: "Set Frequency for Auto Save",
    logo: <img src={frequency} alt="image of nin" />,
  },
  { info: "Add NIN", logo: <img src={nin} alt="image of nin" /> },
  { info: "Add Card", logo: <img src={frequency} alt="image of nin" /> },
];

function HomePage() {
  // const { data: user } = useContext(addContext);
  const { user } = useAuth();
  const { account, setAccount, isCollapsed } = useContext(AddContext);
  const displaydata = data;

  console.log(user);

  return (
    <div
      className={`bg-slate-100 w-[100vw] ${
        isCollapsed ? "sm:w-[92vw]" : "sm:w-[75vw]"
      } sm:h-full sm:ml-auto sm:flex pb-[60px] sm:pb-0`}
    >
      {/* Add padding to bottom */}
      <div className="sm:block hidden">
        <Navbar />
      </div>
      <div className="w-full p-5 sm:p-0">
        <header className="sm:px-[2vw] pt-5 pb-8">
          <h1 className="text-3xl font-medium pt-9 ">
            Hey {user?.userDetails?.fullname} 👋
          </h1>
        </header>
        <div className="sm:w-[100%] sm:px-[2vw] gap-x-[2vw]  sm:flex sm:items-start">
          <div className="w-full sm:w-[60%]">
            <section>
              <div>
                <div>
                  <h3 className="text-gray-600 font-semibold pb-5 w-full">
                    Ongoing Target
                  </h3>
                  <TargetComponent />
                </div>
              </div>
            </section>
          </div>
          <div className="hidden sm:block">
            <MeetSarah />
          </div>
        </div>

        <div className="w-[100%] px-[2vw] gap-x-[2vw] sm:flex sm:items-start">
          {/* To  do list*/}
          <div className="sm:w-[60%] mt-[40px] sm:mt-[-90px]">
            <h2 className="text-gray-600 font-semibold mb-4">To do list</h2>
            <div className="flex flex-col gap-3 w-[100%] sm:w-[90%]">
              {displaydata.map((item, index) => (
                <button
                  onClick={() => setAccount(item.info)}
                  key={index}
                  className="flex justify-between text-gray-950 p-3 border bg-slate-100 border-gray-300"
                >
                  <div className="flex items-center justify-between bg-gray-100 w-[95%]">
                    <div className=" block">
                      <input type="radio" name="gender" value="male" />
                      <span>{item.info}</span>
                    </div>
                    <div className=" block">{item.logo}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="hidden sm:block sm:w-[40%]">
            <RecentTransaction />
          </div>
        </div>
      </div>
      <div className="sm:hidden block">
        <MobileNavbar />
      </div>
      {account === "Enter School Details" && <SchoolDetails />}
      {account === "Add NIN" && <AddBvn />}
      {account === "Set Frequency for Auto Save" && <SetFrequency />}
      {account === "Add Card" && <SaveCard />}
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

export default HomePage;
