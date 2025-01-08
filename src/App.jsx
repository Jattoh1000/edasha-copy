import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AddContext from "./contex/AddContext";
import AuthProvider from "./contex/AuthContext";

//1.CREATE A NEW CONTEXT

function App() {
  const [Popup, setPopup] = useState(false);
  const [Show, setShow] = useState(false);
  const [account, setAccount] = useState("");
  const [more, setMore] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const { isCollapsed, setIsCollapsed } = useContext(AddContext);

  // const user = {
  //   first_name: "David",
  //   last_name: "Dosu",
  //   amount: 290_000,
  // };

  // localStorage.setItem("user", JSON.stringify(user));
  // const data = JSON.parse(localStorage.getItem("user"));

  // const data = localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : localStorage.setItem("user", JSON.stringify(user));

  const history = [
    { methodOfDeposit: "Auto Save", depositedAmount: 6_000 },
    { methodOfDeposit: "Quick Save", depositedAmount: 4_500 },
    { methodOfDeposit: "Auto Save", depositedAmount: 1_500 },
    { methodOfDeposit: "Quick Save", depositedAmount: 920 },
    { methodOfDeposit: "Auto Save", depositedAmount: 650 },
    { methodOfDeposit: "Quick Save", depositedAmount: 13_200 },
    { methodOfDeposit: "Auto Save", depositedAmount: 50_000 },
  ];

  localStorage.setItem("history", JSON.stringify(history));
  const transaction = JSON.parse(localStorage.getItem("history"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Popup, Show, account]);

  return (
    <AuthProvider>
      <AddContext.Provider
        value={{
          Popup,
          setPopup,
          Show,
          setShow,
          // data,
          account,
          setAccount,
          transaction,
          more,
          setMore,
          isCollapsed,
          setIsCollapsed,
        }}
      >
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </AddContext.Provider>
    </AuthProvider>
  );
}

export default App;
