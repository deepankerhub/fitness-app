import React from 'react';
import homeIcon from '../assets/icons/home-01.svg';
import anaIcon from '../assets/icons/analytics-01.svg';
import flagIcon from '../assets/icons/flag-01 1.svg';
import uploadIcon from '../assets/icons/upload-square-02.svg';

const BottomNav = ({ active = "home" }) => {
  const navItems = [
    { key: "home", label: "Home", icon: <img src={homeIcon} alt="homeIcon" className="w-sm h-sm" /> },
    { key: "stats", icon: <img src={anaIcon} alt="analIcon" className="w-sm h-sm" /> },
    { key: "play", icon: <img src={flagIcon} alt="flagIcon" className="w-sm h-sm" /> },
    { key: "upload", icon: <img src={uploadIcon} alt="uploadIcon" className="w-sm h-sm" /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[100%] max-w-[400px]">
      <div className="flex items-center justify-between gap-2 bg-[rgba(31,41,55,0.6)] backdrop-blur-md px-2 py-2 rounded-[48px] shadow-lg w-full border border-gray-600">
        {navItems.map((item) => {
          const isActive = item.key === active;

          return (
            <button
              key={item.key}
              className={`flex items-center justify-center text-sm font-regular transition-all duration-200 ${isActive
                  ? "bg-lime-400 text-black px-4 py-4 rounded-[32px] w-[130px] h-[64px]"
                  : "bg-[#0F172B] w-[64px] h-[64px] text-white rounded-[32px] border border-gray-600"
                }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isActive && <span className="ml-2">{item.label}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;