import { useContext } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

function RequestWithdrawal() {
  const { setAccount } = useContext(AddContext);

  return (
    <div className=" absolute top-0 right-0 z-50">
      <div className="w-[100vw] sm:w-[400px] p-3 pl-8 rounded-2xl mx-auto  bg-slate-50 shadow">
        <div
          onClick={() => setAccount("")}
          className="text-3xl font-bold pb-5 text-blue-800 cursor-pointer"
        >
          <IoClose />
        </div>
        <div className=" p-4 bg-blue-200 text-blue-600 w-[100%] sm:w-full text-sm font-semibold rounded">
          <p className=" pt-5">
            Before proceeding, please note that our mission is to future-proof
            your education and financial stability. We want to ensure that any
            withdrawal is necessary and does not compromise your long-terms
            goals
          </p>
          <p className=" pt-4">
            If you're facing a pressing situation, we're here to help. However,
            our policy allows withdrawal of only 50% of your savings. Before
            processing your request, we'd like to explore alternative solutions
            with you
          </p>
          <p className=" pt-4">
            Please click the button below to connect with our CEO directly on
            Whatsapp. He'll discuss your situation, Offer guardiance, and
            explore options like loan assistance or other support. This way, we
            can work together to find a solution that minimizes impact on your
            future plans. Let's work together to make informed decisions about
            your financial future. Click to connect with our CEO on Whatsapp.
          </p>
        </div>
        <a
          className=" text-center mt-8 p-4 rounded-xl border border-blue-600 flex justify-around"
          href="#"
        >
          Chat with David on Whatsapp
          <div className=" text-green-600 text-3xl">
            <BsWhatsapp />
          </div>
        </a>
      </div>
    </div>
  );
}

export default RequestWithdrawal;
