import { PiLessThanBold } from "react-icons/pi";

interface Login {
  closemodal: () => void;
}

const Login: React.FC<Login> = ({ closemodal }) => {
  return (
    <main className="w-[40rem]  bg-white shadow-md rounded-2xl p-4">
      <div className="top-section flex items-center border-b pb-3">
        <PiLessThanBold className="cursor-pointer" onClick={closemodal} />
        <span className="w-full text-lg font-semibold">Login</span>
      </div>
      <div className="form-section ">
        <form
          action=""
          className=" py-3  flex flex-col items-center justify-center"
        >
          <div className="form flex flex-col items-start  w-[90%]">
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="border border-gray-300 w-[90%] h-10 rounded-t-xl my-3 p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="form flex flex-col items-start  w-[90%]">
            <label htmlFor="password" className="text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="border border-gray-300 w-[90%] h-10 rounded-t-xl my-3 p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="button"
            className="bg-[#E51D53] w-[50%] h-[3rem] rounded-lg text-white text-md font-medium"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
