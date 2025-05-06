import React from 'react';
import bellIcon from '../assets/icons/notification-03.svg';
import gridIcon from '../assets/icons/dashboard-square-01.svg';

const Header = () => {
  return (
    <div className="pt-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-14 h-14 rounded-xl object-cover border border-gray-600"
          />
          <div>
            <p className="text-sm text-gray-400">Good Morning</p>
            <h2 className="font-medium text-lg">John Doe</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-14 h-14 bg-[#1A1E2E] rounded-xl flex items-center justify-center relative border border-gray-600">
            <img src={bellIcon} alt="Notifications" className="w-6 h-6" />
            <span className="absolute top-3 right-3.5 w-2.5 h-2.5 rounded-full bg-lime-400"></span>
          </button>
          <button className="w-14 h-14 bg-[#1A1E2E] rounded-xl flex items-center justify-center border border-gray-600">
            <img src={gridIcon} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="bg-[#0F172B] rounded-[56px] p-3 mt-8 flex items-center justify-between space-x-2">

        <div className="w-16 h-16 bg-[#1D293D] rounded-full flex flex-col items-center justify-center shrink-0 border border-gray-600">
          <div className="flex items-center gap-1 text-sm text-white font-regular">
            <span>🔥12</span>
          </div>
          <div className="text-gray-400 text-xs mt-1">Strikes</div>
        </div>

        <div className="w-px h-10 bg-gray-600 opacity-30" />

        <div className="flex items-center bg-[#1D293D] rounded-[56px] px-1 py-1 flex-grow max-w-[60%] border border-gray-600">
          <div className="w-14 h-14 bg-lime-400 text-black font-regular rounded-full flex items-center justify-center text-sm mr-3">
            Mon
          </div>
          <div className="text-white text-sm whitespace-nowrap">Time to workout</div>
        </div>

        <div className="flex flex-col items-center text-xsml text-white">
          <div className="font-medium text-sm">18</div>
          <div className="text-gray-400 text-xs">Tue</div>
        </div>
        <div className="flex flex-col items-center text-xs text-white">
          <div className="font-medium text-sm">19</div>
          <div className="text-gray-400 text-xs">Wed</div>
        </div>
      </div>

    </div>
  );
};

export default Header;