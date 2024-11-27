// NavItem.js
import { useState, useRef } from 'react';
import Dropdown from './Dropdown';

const NavItem = ({ title, menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 640) {
      setTimeout(() => {
        if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
          setIsDropdownOpen(false);
        }
      }, 300);
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 640) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <li
      className="relative py-4 sm:py-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="text-lg text-gray-200 block no-underline hover:text-amber-300 hover:border-b hover:border-amber-300"
      >
        {title}
      </button>
      {isDropdownOpen && <Dropdown isDropdownOpen={isDropdownOpen} menuItems={menuItems} />}
    </li>
  );
};

export default NavItem;