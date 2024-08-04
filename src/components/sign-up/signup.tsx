import { PiLessThanBold } from "react-icons/pi";
import { useState } from "react";
import { get, post } from "../../api/HandleApi";
import {jwtDecode} from "jwt-decode";
import { useDispatch  } from "react-redux";
import { setUser } from "../../slices/authSlice";
interface SignUpProps {
  closemodal: () => void;
}

interface DecodedToken {
  userId: string;
}

const SignUp: React.FC<SignUpProps> = ({ closemodal }) => {

  const [data, setData] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    password: '',
    profilePicture: null
  });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: files && files[0] ? files[0] : value
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

   
    if (!data.name || !data.dateOfBirth || !data.email || !data.password) {
      alert("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      alert("Please enter a valid email address");
      return;
    }

 
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('dateOfBirth', data.dateOfBirth);
    formData.append('email', data.email);
    formData.append('password', data.password);
    if (data.profilePicture) {
      formData.append('profilePicture', data.profilePicture);
    }

    try {
      const response = await post('auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
       const token = response.data;
       const decodedtoken:DecodedToken = jwtDecode(token);
       const userId = decodedtoken.userId;
       if (userId) {
        const userInfo = await get("profile");
        localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
        dispatch(setUser(userInfo.data))
        console.log(userInfo);
      }
       console.log(decodedtoken.userId);

    } catch (err) {
      console.error(err);
    }

    // Reset form
    setData({
      name: '',
      dateOfBirth: '',
      email: '',
      password: '',
      profilePicture: null
    });
    closemodal();
  };

  return (
    <main className="w-[40rem] bg-white shadow-md rounded-2xl p-4">
      <div className="top-section flex items-center border-b pb-3">
        <PiLessThanBold className="cursor-pointer" onClick={closemodal} />
        <span className="w-full text-lg font-semibold">Sign Up</span>
      </div>

      <div className="form-section">
        <form className="py-3 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <div className="form flex flex-col items-start w-[90%]">
            <label htmlFor="name" className="text-lg font-semibold">Legal name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Full Name"
              value={data.name}
              onChange={handleChange}
              className="border border-gray-300 w-[90%] h-10 rounded-t-xl my-3 p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="form flex flex-col items-start w-[90%]">
            <label htmlFor="dateOfBirth" className="text-lg font-semibold">Date of birth</label>
            <input
              type="text"
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Enter Date of birth"
              value={data.dateOfBirth}
              onChange={handleChange}
              className="border border-gray-300 w-[90%] h-10 rounded-t-xl my-3 p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="form flex flex-col items-start w-[90%]">
            <label htmlFor="email" className="text-lg font-semibold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={data.email}
              onChange={handleChange}
              className="border border-gray-300 w-[90%] h-10 rounded-t-xl my-3 p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="form flex flex-col items-start w-[90%]">
            <label htmlFor="password" className="text-lg font-semibold">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={data.password}
              onChange={handleChange}
              className="border border-gray-300 w-[90%] h-10 rounded-t-xl my-3 p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="form flex flex-col items-start w-[90%]">
            <label htmlFor="profilePic" className="text-lg font-semibold">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              id="profilePicture"
              onChange={handleChange}
              className="border border-gray-300 w-[90%] rounded-t-xl my-3 p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="bg-[#E51D53] w-[50%] h-[3rem] rounded-lg text-white text-md font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
