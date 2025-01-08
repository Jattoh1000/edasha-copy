import { useState } from "react";
import Confirm from "../components/Confirm";
import Forgot from "../components/Forgot";
import Logo from "/bgimg.png";

function ForgotPage() {
  const [display, setdisplay] = useState(true);
  return (
    <div className="h-screen bg-slate-50 sm:bg-blue-600">
      <div className=" hidden sm:block w-[300px] mx-auto pt-[40px] mb-[-40px] bg-blue-600">
        <img src={Logo} alt="" />
      </div>
      {display ? <Forgot /> : <Confirm />}
    </div>
  );
}

export default ForgotPage;
