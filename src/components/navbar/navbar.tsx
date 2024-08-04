import Logo from "./logo";
import Profile from "./profile";
import Search from './search'
const Navbar = () => {
  return (
    <nav className="border p-5 md:flex md:flex-row  md:items-center md:justify-between block text-center shadow-sm">
      <Logo />
      <Search />
      <Profile />
    </nav>
  );
}

export default Navbar;
