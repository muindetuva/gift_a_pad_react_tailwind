import Logo from "../assets/Logo.png";
import Menu from "../assets/menu.svg";

function Navbar() {
  return (
    <div className="flex bg-primary justify-between p-3">
      <img className="h-12" src={Logo} alt="Logo" />
      <h1 className="font-bold">Gift A Pad</h1>
      <img className="h-12" src={Menu} alt="" />
    </div>
  );
}

export default Navbar;
