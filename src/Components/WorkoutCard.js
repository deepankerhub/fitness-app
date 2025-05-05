import React from 'react';
import fireIcon from '../assets/icons/grey icons/fire-1 1.svg';
import loadingIcon from '../assets/icons/grey icons/loading-01.svg';

const WorkoutCard = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center px-2 mb-5">
        <h2 className="text-white text-lg font-medium">Today’s Workout</h2>
        <span className="text-sm text-gray-300">View All</span>
      </div>

      <div className="relative bg-[#0F172B] rounded-[20px] overflow-hidden flex h-auto border border-gray-600">
        <div className="w-1/2 p-5 relative z-10 flex flex-col justify-between">
          <div>
            <div className="bg-[#1D293D] text-lime-400 px-3 py-2 rounded-[32px] text-xs w-fit mb-6 border border-gray-600">● <span className="text-white">Advanced</span></div>
            <h3 className="text-white font-medium text-xl leading-[1.6]">Full Body<br />Workout</h3>
          </div>
          <div className="flex flex-col gap-3">
      
            <div className="w-14 h-14 rounded-full bg-[#1D2539] flex items-center justify-center mt-4 border border-gray-600">
              <span className="text-lime-400">▶</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
              <div className="flex items-center gap-1">
                <span><img src={fireIcon} alt="fireIcon" className="w-4 h-4" /></span>
                <span>950 Kcal</span>
              </div>
              <div className="w-px h-5 bg-gray-600 opacity-30" />
              <div className="flex items-center gap-1">
                <span><img src={loadingIcon} alt="fireIcon" className="w-4 h-4" /></span>
                <span>60 min</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full clip-diagonal overflow-hidden">
          <img
            src="/assets/workoutpic.png"
            alt="Workout"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;