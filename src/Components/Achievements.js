import React from 'react';
import zapIcon from '../assets/icons/zap.svg';
import clockIcon from '../assets/icons/clock-01.svg';
import runIcon from '../assets/icons/runningman.svg';

const Achievements = () => {
  return (
    <div className="mt-10">
      <h2 className="text-white text-lg font-regular mb-3">Achievements & Goals</h2>

      <div className="bg-gradient-to-b from-[#1D293D] to-[#0F172B] rounded-[20px] px-6 py-8 flex flex-col items-center text-center mt-6 border border-gray-600">
        
        <div className="size-[120px] rounded-full bg-[#FFF1540D] flex items-center justify-center mb-10 border border-gray-600">
        <img src={runIcon} alt="runIcon" className="w-[47.5px] h-[39.56px]" />
        </div>

        <h3 className="text-white text-[22px] font-semibold mb-2">Fastest 5km Run!</h3>

        <p className="text-gray-300 text-base mb-10 mx-6">
          Speed like never before! Keep pushing your limits!
        </p>

        <div className="flex justify-between w-full px-2">
          
          <button className="flex items-center gap-2 text-lime-400 border border-lime-400 bg-[#9AE6001A] px-4 py-3 rounded-full text-base">
            <span><img src={zapIcon} alt="zapIcon" className="w-[24px] h-[24px]" /></span>
            <span className="text-white">New Record!</span>
          </button>

          <div className="flex items-center gap-2 bg-[#1C2534] text-gray-300 px-4 py-2 rounded-full text-base border border-gray-600">
            <span><img src={clockIcon} alt="clockIcon" className="w-[24px] h-[24px]" /></span>
            <span className="text-white">24:30 min</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 gap-1">
        <span className="w-2 h-2 rounded-full bg-gray-600"></span>
        <span className="w-8 h-2 rounded-full bg-white"></span>
        <span className="w-2 h-2 rounded-full bg-gray-600"></span>
      </div>
    </div>
  );
};

export default Achievements;
