import React from "react";
import ArrowDropUp from "../../assets/icons/ArrowDropUp.svg";
import ArrowDropDown from "../../assets/icons/ArrowDropDown.svg";

interface ToggleButtonProps {
  expanded: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ expanded, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between text-sm font-semibold focus:outline-none"
    >
      <img
        src={expanded ? ArrowDropUp : ArrowDropDown}
        alt={expanded ? "Collapse" : "Expand"}
        className="w-6 h-5 ml-2 transition-transform duration-300"
      />
      <span className="text-orange-500">
        {expanded ? "Свернуть" : "Читать далее"}
      </span>
    </button>
  );
};

export default ToggleButton;
