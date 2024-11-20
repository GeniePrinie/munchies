import React from "react";
import { DeliveryTimeRange, Filter } from "../../types";

interface DeliveryTimeProps {
  timeRange: DeliveryTimeRange;
  isActive: boolean;
  onToggle: (timeRange: DeliveryTimeRange) => void;
}

const DeliveryTime: React.FC<DeliveryTimeProps> = ({
  timeRange,
  isActive,
  onToggle,
}) => {
  return (
    <button
      onClick={() => onToggle(timeRange)}
      className={`
        w-fit 
        px-3 pb-1 
        rounded-lg 
        transition-all duration-200 ease-in-out
        hover:shadow-md
      ${
        isActive
          ? "bg-blue-50 border border-blue-500 text-blue-700"
          : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50"
      }
    `}
    >
      <span className="text-xs whitespace-nowrap">{timeRange.name}</span>
    </button>
  );
};

export default DeliveryTime;
