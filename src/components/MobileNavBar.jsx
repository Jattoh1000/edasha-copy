import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LuTarget } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineAccountCircle } from "react-icons/md";

function MobileNavbar() {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full flex flex-col justify-start items-center bg-blue-100`}
    >
      <ul className="flex flex-row gap-4 w-full justify-center ">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? " text-blue-700 font-semibold flex flex-col items-center  w-[80%] p-2 m-2 rounded"
                : "text-gray-600 font-semibold flex flex-col items-center  w-[80%] p-2 m-2 rounded"
            }
          >
            <IoHomeOutline />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/targetpage"}
            className={({ isActive }) =>
              isActive
                ? " text-blue-700 font-semibold flex flex-col items-center  w-[80%] p-2 m-2 rounded"
                : "text-gray-600 font-semibold flex flex-col items-center  w-[80%] p-2 m-2 rounded"
            }
          >
            <LuTarget />
            Target
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/applicationpage"}
            className={({ isActive }) =>
              isActive
                ? " text-blue-700 font-semibold flex flex-col items-center  w-[80%] p-2 m-2 rounded"
                : "text-gray-600 font-semibold flex flex-col items-center  w-[80%] p-2 m-2 rounded"
            }
          >
            <HiOutlineAcademicCap />
            Application
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/accountpage"}
            className={({ isActive }) =>
              isActive
                ? " text-blue-700 font-semibold flex flex-col items-center  w-[80%] p-2 m-2 rounded"
                : "text-gray-600 font-semibold flex flex-col items-center  w-[80%] p-2 m-2 rounded"
            }
          >
            <MdOutlineAccountCircle />
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
