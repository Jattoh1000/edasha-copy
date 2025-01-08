import React, { useContext, useState } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mastercardLogo from "../../public/mastercardLogo.png";

function SaveCard() {
  const { setAccount } = useContext(AddContext);

  // State to store the card details
  const [cards, setCards] = useState([]);

  // Function to handle card submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // WHERE TO INPUT THE CARD DATA
    const newCard = {
      id: cards.length + 1, // Unique id
      type: `Master Card`, // Example card name
      number: 123456789000, // Generate a 16-digit card number
    };

    // Add the new card to the cards array
    setCards([...cards, newCard]);

    // Show success message
    handleSuccess();

    console.log(newCard);
  };

  // Function to generate a random 16-digit card number

  // Toast notification for success
  const handleSuccess = () => {
    toast.success("Card added successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="absolute top-0 right-0 z-50">
      <div className="w-[95vw] sm:w-[400px] p-3 rounded-2xl mx-auto bg-slate-50 shadow h-full">
        <div
          onClick={() => setAccount("")}
          className="text-3xl font-bold text-blue-800 cursor-pointer"
        >
          <IoClose />
        </div>
        <h1 className="text-blue-700 text-2xl text-left font-semibold py-4">
          Saved Cards
        </h1>

        {/* If there are no cards, show "No cards added" */}
        {cards.length === 0 ? (
          <p className="text-gray-500 text-center">No cards added yet.</p>
        ) : (
          // Display the list of cards when the array is not empty
          <div className="mt-4 space-y-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className="p-4 bg-inherit rounded-md border border-blue-600 w-[70%] shadow-md text-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-sm text-gray-600">
                      <span className="font-mono">{card.number}</span>
                    </div>
                    <div className="font-semibold text-lg">{card.type}</div>
                  </div>
                  <div className="flex items-center justify-center bg-gray-200 p-2 rounded">
                    {/* Use the imported local image */}
                    <img
                      src={mastercardLogo}
                      alt="MasterCard Logo"
                      className="w-[30px] h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="text-gray-500 text-sm font-bold mt-8 block">
            You can view all your cards here
          </label>

          <button
            type="submit"
            className="text-center text-blue-600 font-semibold mt-8 p-2 rounded block w-[60%] mx-auto border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Add new card
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SaveCard;
