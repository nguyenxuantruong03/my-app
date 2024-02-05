import React from 'react';

interface SortButtonType{
    onClick: () => void
    active: boolean
    label: string
    icon: React.ReactNode;
}

export const SortButton:React.FC<SortButtonType> = ({ onClick, active, label, icon }) => (
  <button
    onClick={onClick}
    className={`flex item-center bg-gray-400 bg-opacity-20 hover:bg-gray-400 hover:bg-opacity-50 text-black p-2 rounded-md w-44 ${active ? "active" : ""}`}
  >
    {icon && <span className="w-5 h-5 mr-1">{icon}</span>}
    {label}
  </button>
);