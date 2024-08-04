import { useSelector } from "react-redux";

interface PopupOptionProps {
  openSignUpModal: () => void;
  openLoginModal: () => void;
  handleShowPopupOption: () => void;
}

const PopupOption: React.FC<PopupOptionProps> = ({
  openSignUpModal,
  openLoginModal,
  handleShowPopupOption,
}) => {
  const handleSignUpClick = () => {
    openSignUpModal();
    handleShowPopupOption();
  };
  const handleLoginClick = () => {
    openLoginModal();
    handleShowPopupOption();
  };
  const userInfo = useSelector((state: any) => state.auth.userInfo);

  return (
    <>
      <div className="w-[15rem]  shadow-xl bg-white rounded-md p-1">
        {!userInfo ? (
          <>
            <div
              className="p-2 text-start text-m hover:font-bold hover:cursor-pointer font-light transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-90 hover:bg-gray-100"
              onClick={handleSignUpClick}
            >
              Sign up
            </div>
            <div
              className="p-2 text-start text-m hover:font-bold hover:cursor-pointer font-light transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-90 hover:bg-gray-100"
              onClick={handleLoginClick}
            >
              Log in
            </div>
          </>
        ) : (
          <>
            <div className="p-2 text-start text-m hover:font-bold hover:cursor-pointer font-light transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-90 hover:bg-gray-100">
              Logout
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PopupOption;
