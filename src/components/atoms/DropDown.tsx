"use client";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import IconComponent from "../container/IconComponent";

const Dropdown = ({
  options,
  onSelect,
  selectedOption,
  setSelectedOption,
  isOpen,
  setIsOpen,
}: any) => {
  const handleSelect = (option: any) => {
    setSelectedOption(option?.label);
    onSelect(option?.value);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[100px] bg-white rounded">
      <div className="flex border border-sky-500 w-18 rounded-sm cursor-pointer h-10 items-center ">
        <div
          className="outline-none shadow-sm appearance-none flex text-sm items-center h-[46px] "
          onClick={toggleDropdown}
        >
          <p className="px-3">{selectedOption || "Months"}</p>
        </div>
        <div
          className="flex items-center  bg-white w-[30%]"
          onClick={toggleDropdown}
        >
          <IconComponent icon="uiw:down" className="text-primary h-4 w-4" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-18 bg-white z-50">
          {options.map((option: any, index: Key | null | undefined): any => (
            <div
              key={index}
              className="cursor-pointer p-2 hover:bg-[#FFF2F7] px-5 text-sm "
              onClick={() => handleSelect(option)}
            >
              <p>hi</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
