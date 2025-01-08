import { FaApple, FaGooglePlay } from "react-icons/fa";
import SarahImg from "/sarah.png";

function MeetSarah() {
  return (
    <div className=" sm:w-[full]">
      {/* MEET SARAH SECTION */}
      <h2 className=" text-gray-700 font-semibold mb-4 hidden sm:block">
        #MEETEDESAHSAVER: SARAH{" "}
      </h2>
      <div className=" text-gray-700">
        <img src={SarahImg} alt="Image of Sarah" />
      </div>

      {/* DOWNLOAD SECTION */}
      <div className=" w-full mt-12 hidden sm:block">
        <p className=" text-gray-700 font-semibold mb-4">
          Download the Mobile App
        </p>
        <div className="flex justify-between items-center">
          <div className=" flex items-center justify-center gap-4 p-2 m-1 w-[50%] text-center bg-gray-900 border-[1px] border-gray-700 text-gray-200 text-sm rounded cursor-pointer hover:scale-105 hover:bg-gray-200  hover:text-gray-900 transition-all duration-500">
            <FaApple />
            <a>Get on iPhone</a>
          </div>

          <div className=" flex items-center justify-center gap-4 p-2 m-1 w-[50%] text-center bg-gray-900 border-[1px] border-gray-700 text-gray-200 text-sm rounded cursor-pointer hover:scale-105 hover:bg-gray-200  hover:text-gray-900 transition-all duration-500">
            <FaGooglePlay />
            <a href="https://play.google.com/store/apps/details?id=com.edesah.app">
              Get on Andriod
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetSarah;
