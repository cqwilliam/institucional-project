// Dropdown.js
const Dropdown = ({ menuItems, isMenuOpen }) => (
  <ul
    className={`mt-2 py-2 rounded shadow-lg bg-slate-700 w-full sm:w-32 z-50 ${
      isMenuOpen ? "relative" : "absolute left-0"
    } sm:absolute sm:left-0 sm:top-full`}
  >
    {menuItems.map((item, index) => (
      <li key={index} className="py-1 px-4 hover:bg-slate-800">
        <a href={item.link} className="text-gray-200 block">
          {item.text}
        </a>
      </li>
    ))}
  </ul>
);

export default Dropdown;
