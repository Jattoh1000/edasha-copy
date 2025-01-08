import { useAuth } from "../contex/AuthContext";

function RecentTransaction() {
  const { user } = useAuth();

  return (
    <div className="mt-10 w-[100%]">
      <h2 className=" text-gray-500 font-semibold">Recent Transaction</h2>
      <div className="h-[300px] overflow-auto mt-5">
        {user?.userTransactions?.map((trx, index) => (
          <div
            key={index}
            className=" mb-4 flex gap-4 sm:w-[80%] justify-between items-center"
          >
            <div className="flex gap-5 items-center">
              <div className="h-[50px] w-[50px] bg-pink-300 rounded-full"></div>
              <div className=" flex flex-col">
                <p className=" text-sm font-semibold text-gray-700">
                  {trx.type}
                </p>
                <p className=" text-sm text-gray-400">{trx.date}</p>
              </div>
            </div>
            <div className=" text-blue-600 font-semibold pr-4">
              &#8358; {trx.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransaction;
