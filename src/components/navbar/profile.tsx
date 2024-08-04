import  { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import PopupOption from "./popupOption";
import SignUp from "../sign-up/signup";
import Login from "../login/login";
import { useSelector } from "react-redux";

const Profile = () => {
  const [popupOption, setPopupOption] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const userInfo = useSelector((state:any) => state.auth.userInfo);

  

  const handleShowPopupOption = () => {
    setPopupOption((prevState) => !prevState);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSignUpmodal = () => {
    setIsSignUpModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="hidden md:block">
          <p className="font-semibold">Become a host</p>
        </div>
        <div className="w-[5rem] h-[3rem] shadow-md rounded-full flex items-center justify-around cursor-pointer">
          <AiOutlineMenu onClick={handleShowPopupOption} />
          <div className="rounded-full border border-gray-500 w-10 h-10">
            {
             userInfo && (

               <img src={`http://localhost:3000/${userInfo.profilePicture}`} alt="profileImg" />
             )
            }
          </div>
        </div>
      </div>
      <div
        className={`absolute z-10 right-12 top-[8rem]  transition-opacity duration-300 ${
          popupOption ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {popupOption && (
          <PopupOption
            openSignUpModal={openSignUpModal}
            openLoginModal={openLoginModal}
            handleShowPopupOption={handleShowPopupOption}
          />
        )}
      </div>
      <div
        className={`absolute top-0 left-0 z-10 flex items-center justify-center w-full h-screen transition-opacity duration-300 ${
          isSignUpModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        {isSignUpModalOpen && <SignUp closemodal={closeSignUpmodal} />}
      </div>
      <div
        className={`absolute top-0 left-0 z-10 flex items-center justify-center w-full h-screen transition-opacity duration-300 ${
          isLoginModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        {isLoginModalOpen && <Login closemodal={closeLoginModal} />}
      </div>
    </>
  );
};

export default Profile;
