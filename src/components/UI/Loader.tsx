import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
    </div>
  );
};

export default Loader;
