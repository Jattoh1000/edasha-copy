import { useContext } from "react";
import AddContext from "../contex/AddContext";

function TodoList() {
  const { setAccount } = useContext(AddContext);

  return (
    <div className="w-[90%] mx-auto">
      <h2 className=" text-gray-600 font-semibold mb-4">To do list</h2>
      <div className=" flex flex-col gap-3  ">
        <label
          onClick={() => setAccount()}
          className="flex justify-between text-gray-950 p-3 border border-gray-300"
        >
          <div className="flex gap-3">
            <input type="radio" name="gender" value="male" />
            <span>Enter School Details</span>
          </div>
          <div></div>
        </label>

        <label className="flex justify-between text-gray-950 p-3 border border-gray-300">
          <div className="flex gap-3">
            <input type="radio" name="gender" value="male" />
            <span>Set Frequency for Auto Save</span>
          </div>
          <div></div>
        </label>

        <label className="flex justify-between text-gray-950 p-3 border border-gray-300">
          <div className="flex gap-3">
            <input type="radio" name="gender" value="male" />
            <span>Add Card</span>
          </div>
          <div></div>
        </label>
      </div>
    </div>
  );
}

export default TodoList;
