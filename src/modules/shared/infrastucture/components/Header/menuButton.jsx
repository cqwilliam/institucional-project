// MenuButton.js
const MenuButton = ({ toggleMenu }) => (
    <img
      id="open"
      onClick={toggleMenu}
      className="w-10 filter invert cursor-pointer sm:hidden"
      src="./menu.png"
      alt="Menu"
    />
  );
  
  export default MenuButton;