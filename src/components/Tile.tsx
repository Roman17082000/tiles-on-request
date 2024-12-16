import React, { useRef } from "react";
import { formatNumber, formatDateTime } from "../utils/formatters";
import { stateColors } from "../constants/colors";
import { TileData } from "../types/types";
import ToggleButton from "./UI/ToggleButton";

interface TileProps extends Omit<TileData, "id"> {
  isExpanded: boolean;
  onToggle: () => void;
}

const Tile: React.FC<TileProps> = ({
  number,
  createdAt,
  controlDate,
  completedAt,
  system,
  type,
  object,
  text,
  state,
  isExpanded,
  onToggle,
}) => {
  const contentRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="border rounded-lg shadow-md bg-white p-4 max-w-md mx-auto min-h-[250px]">
      <div className="flex items-center mb-4">
        <span className={`mr-3 px-2 py-1 rounded ${stateColors[state]}`}>
          {formatNumber(number)}
        </span>
        <strong>{state}</strong>
      </div>
      <div className="text-sm text-[#444444] grid grid-cols-[120px_1fr] gap-y-2">
        <p>Создана:</p>
        <strong>{formatDateTime(createdAt)}</strong>
        <p>Контроль:</p>
        <strong>{formatDateTime(controlDate)}</strong>
        {completedAt && (
          <>
            <p>Выполнена:</p>
            <strong>{formatDateTime(completedAt)}</strong>
          </>
        )}
        <p>Система:</p>
        <strong>
          {system} | {type}
        </strong>
        <p>Объект:</p>
        <strong>
          {object.name}, {object.city}, {object.street}
        </strong>
      </div>
      <hr className="my-4 border-t-2 border-gray-300" />
      <div className="mt-4 relative">
        <div className="relative overflow-hidden transition-all duration-300 ease-in-out">
          <p
            ref={contentRef}
            style={{
              maxHeight: isExpanded
                ? `${contentRef.current?.scrollHeight}px`
                : "4.5em",
              lineHeight: "1.5em",
            }}
            className="text-[#444444] leading-[1.5] text-base"
          >
            {text}
          </p>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>
        <ToggleButton expanded={isExpanded} onClick={onToggle} />
      </div>
    </div>
  );
};

export default Tile;
