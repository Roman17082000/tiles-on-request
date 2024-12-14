import React, { useState } from "react";
import Tile from "./Tile";
import { FilterTileList } from "../types/types";

const TileList: React.FC<FilterTileList> = ({ tiles }) => {
  const [expandedTileIds, setExpandedTileIds] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setExpandedTileIds((prev) =>
      prev.includes(id)
        ? prev.filter((tileId) => tileId !== id)
        : [...prev, id],
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {tiles.map((tile: any) => (
        <Tile
          key={tile.id}
          {...tile}
          isExpanded={expandedTileIds.includes(tile.id)}
          onToggle={() => handleToggle(tile.id)}
        />
      ))}
    </div>
  );
};

export default TileList;
