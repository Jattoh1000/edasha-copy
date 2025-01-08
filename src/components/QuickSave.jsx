import { useContext, useState } from "react";
import AddContext from "../contex/AddContext";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QuickSave() {
  const { setAccount } = useContext(AddContext);

  // State to store the card details
  const [cards, setCards] = useState([]);

  // Function to handle card submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a dummy card for this example
    const newCard = {
      id: cards.length + 1, // Unique id
      name: `Card ${cards.length + 1}`, // Example card name
    };

    // Add the new card to the cards array
    setCards([...cards, newCard]);

    // Show success message
    handleSuccess();
  };

  // Function to delete a card by ID
  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
    toast.info("Card deleted successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSuccess = () => {
    toast.success("Card submitted successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="absolute top-0 right-0 z-50">
      <div className="w-full sm:w-[400px] p-3 rounded-2xl mx-auto bg-slate-50 shadow h-screen">
        <div
          onClick={() => setAccount("")}
          className="text-3xl font-bold text-blue-800 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
        >
          <IoClose />
        </div>
        <h1 className="text-blue-700 text-2xl text-left font-semibold pt-4">
          Quick Save
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
                className="p-2 bg-blue-100 rounded-md shadow text-gray-800 flex justify-between items-center"
              >
                {card.name}
                <button
                  onClick={() => handleDelete(card.id)}
                  className="text-red-600 font-bold"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="text-gray-500 text-sm font-bold mt-8 block">
            You can view all your cards here
          </label>

          <div>
            <button
              type="submit"
              className="text-center text-gray-400 mt-8 p-2 rounded block w-[60%] mx-auto border border-gray-300 cursor-pointer"
            >
              Add new card
            </button>
          </div>

          <div className="w-[20px] mx-auto py-5">Or</div>

          <div className="bg-blue-200 text-blue-600 w-[100%] sm:w-full text-sm font-semibold p-3 rounded">
            <p>
              Make transfer directly to your Edesah account by copying your
              unique account number on the bottom right of the card on your
              target screen
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default QuickSave;
