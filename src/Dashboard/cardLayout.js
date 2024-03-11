import React from 'react';

const Card = ({ title, total, percentage }) => {
  return (
    <div className="flex-grow bg-white shadow-md rounded-md p-2 m-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-auto">
        <div className="flex items-center mt-2">
          <div className="text-4xl font-bold mr-2">{total}</div>
          {/* <div className="text-sm text-gray-500">{percentage}%</div> */}
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full">
          <div className={`h-full bg-blue-500 rounded-full w-${percentage}`} />
        </div>
      </div>
    </div>
  );
};

export default Card;
