import React, { useRef, useEffect, useState } from "react";
import { formatNumber, formatDateTime } from "../utils/formatters";
import { stateColors } from "../constants/colors";
import { TileData } from "../types/types";
import ToggleButton from "./UI/ToggleButton"; // Импортируем новый компонент ToggleButton

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
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isExpanded]);

  return (
    <div className="border rounded-lg shadow-md bg-white p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <span className={`px-2 py-1 rounded ${stateColors[state]}`}>
          {formatNumber(number)} {state}
        </span>
      </div>
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <strong>Создана:</strong> {formatDateTime(createdAt)}
        </p>
        <p>
          <strong>Контроль:</strong> {formatDateTime(controlDate)}
        </p>
        {completedAt && (
          <p>
            <strong>Выполнена:</strong> {formatDateTime(completedAt)}
          </p>
        )}
        <p>
          <strong>Система:</strong> {system} | {type}
        </p>
        <p>
          <strong>Объект:</strong> {object.name}, {object.city}, {object.street}
        </p>
      </div>
      <hr className="my-4 border-t-2 border-gray-300" />
      <div className="mt-4 relative">
        <p
          ref={contentRef}
          style={{ maxHeight }}
          className="text-[#444444] overflow-hidden transition-max-height duration-300 ease-in-out"
        >
          {text}
        </p>
        <ToggleButton expanded={isExpanded} onClick={onToggle} />
      </div>
    </div>
  );
};

export default Tile;
