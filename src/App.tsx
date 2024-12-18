import React, { useEffect, useState } from "react";
import TileList from "./components/TileList";
import FilterBar from "./components/FilterBar";
import mockData from "../src/data/mockData.json";
import "./index.css";
import { FILTER_OPTIONS } from "./types/filterConfig.ts";
import Loader from "./components/UI/Loader.tsx";

type FilterKey = keyof typeof FILTER_OPTIONS;

const App: React.FC = () => {
  const [filterState, setFilterState] = useState<FilterKey>("all");
  const [isLoading, setIsLoading] = useState(true);

  const filteredData = mockData.filter((item) => {
    if (filterState === "all") return true; // "Все" показывает всё
    return item.state === FILTER_OPTIONS[filterState];
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-4">
      <FilterBar state={filterState} onStateChange={setFilterState} />
      <TileList tiles={filteredData} />
    </div>
  );
};

export default App;
