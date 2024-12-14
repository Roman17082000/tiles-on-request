import React from "react";
import { FilterBarProps } from "../types/types.ts";
import { FILTER_OPTIONS } from "../types/filterConfig.ts";
import Button from "../components/UI/Button";

const FilterBar: React.FC<FilterBarProps> = ({ state, onStateChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {Object.entries(FILTER_OPTIONS).map(([key, label]) => (
        <Button
          key={key}
          onClick={() => onStateChange(key as keyof typeof FILTER_OPTIONS)}
          className={
            state === key
              ? "text-black"
              : "bg-gray-300 text-gray-800 hover:bg-gray-300"
          }
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;
