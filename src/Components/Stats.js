import React from 'react';
import fireIcon from '../assets/icons/fire-1 1.svg';
import runIcon from '../assets/icons/workout-run 1.svg';
import likeIcon from '../assets/icons/favourite 1.svg';
import woukoutIcon from '../assets/icons/dumbbell-02 1.svg';

const stats = [
  {
    title: 'Calories',
    value: '1200',
    unit: 'Kcal',
    icon: <img src={fireIcon} alt="fireIcon" className="w-6 h-6" />,
    gradient: 'from-[#1D1F25] to-[#2E3320]',
  },
  {
    title: 'Running',
    value: '5',
    unit: 'km',
    icon: <img src={runIcon} alt="runIcon" className="w-6 h-6" />,
    gradient: 'from-[#1D1F25] to-[#242A3C]',
  },
  {
    title: 'Heart Rate Avg',
    value: '73',
    unit: 'bpm',
    icon: <img src={likeIcon} alt="likeIcon" className="w-6 h-6" />,
    gradient: 'from-[#1D1F25] to-[#3B2B36]',
  },
  {
    title: 'Workout',
    value: '14',
    unit: '/20',
    icon: <img src={woukoutIcon} alt="dumbellIcon" className="w-6 h-6" />,
    gradient: 'from-[#1D1F25] to-[#1E3324]',
  },
];

const Stats = () => {
  return (
    <div className="mt-12">
      <h3 className="text-white text-lg font-medium mb-4">Statistics</h3>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`rounded-[20px] p-5 flex justify-between items-left bg-gradient-to-br ${stat.gradient}`}
          >
            <div>
              <p className="text-gray-300 text-sm mb-4">{stat.title}</p>
              <p className="text-white font-medium text-xl">
                {stat.value} <span className="text-sm font-normal">{stat.unit}</span>
              </p>
            </div>
            <div>{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;