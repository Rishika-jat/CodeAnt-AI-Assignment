import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineCode } from 'react-icons/ai';
import { IoIosCloudOutline } from 'react-icons/io';
import { FaCode } from "react-icons/fa6";
import { LuBookText } from 'react-icons/lu';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';

const MyComponent = () => {
  const [activeItem, setActiveItem] = useState('Repositories');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('UtkarshDhairyaPanwar');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const items = [
    { name: 'Repositories', icon: <AiOutlineHome className="text-2xl" /> },
    { name: 'AI Code Review', icon: <FaCode className="text-2xl" /> },
    { name: 'Cloud Security', icon: <IoIosCloudOutline className="text-2xl" /> },
    { name: 'How to use', icon: <LuBookText className="text-2xl" /> },
    { name: 'Settings', icon: <IoSettingsOutline className="text-2xl" /> },
  ];

  const dropdownOptions = [
    'Option 1',
    'Option 2',
    'Option 3',
  ];

  return (
    <div className=''>
      <div className="relative inline-block text-left mb-2">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center w-52 px-2 text-base border font-normal bg-white truncate rounded-lg nav-item "
        >
          <span className="truncate">{selectedOption}</span>
          <RiArrowDropDownLine
            className="ml-2"
            style={{ fontSize: "40px" }}
          />
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 py-2 w-48 bg-white rounded-md nav-item">
            {dropdownOptions.map((option) => (
              <a
                key={option}
                href="#"
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-gray-700 hover:bg-custumBlue hover:text-white no-underline"
              >
                {option}
              </a>
            ))}
          </div>
        )}
      </div>

      <ul className="list-none text-base mx-0 px-0 w-52 font-semibold leading-6 mt-4">
        {items.map((item) => (
          <li
            key={item.name}
            className={`py-3 rounded-lg items-center flex gap-4 px-3 cursor-pointer nav-item ${
              activeItem === item.name ? 'bg-custumBlue text-white' : 'text-custumBrown'
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
