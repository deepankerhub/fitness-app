import React, { useState, useEffect } from 'react';
import runIcon from '../assets/icons/Frame 68.svg';
import dumbellIcon from '../assets/icons/Frame 69.svg';
import fireIcon from '../assets/icons/Frame 70.svg';

const WeeklyGoals = () => {
  const [animatedWidths, setAnimatedWidths] = useState([]);

  const goals = [
    {
      icon: <img src={runIcon} alt="runIcon" className="w-8 h-8" />,
      title: 'Run 20km this week',
      progress: 12,
      total: 20,
      unit: 'km',
      color: 'bg-yellow-400',
    },
    {
      icon: <img src={dumbellIcon} alt="dumbellIcon" className="w-8 h-8" />,
      title: 'Strength Goal: 3 Gym Sessions',
      progress: 2,
      total: 3,
      unit: 'Workouts',
      color: 'bg-lime-500',
    },
    {
      icon: <img src={fireIcon} alt="fireIcon" className="w-8 h-8" />,
      title: 'Calories Burn Goal: 3,500 kcal',
      progress: 1200,
      total: 3500,
      unit: 'kcal',
      color: 'bg-orange-400',
    },
  ];

  useEffect(() => {
    const timeouts = goals.map((goal, i) =>
      setTimeout(() => {
        const percent = (goal.progress / goal.total) * 100;
        setAnimatedWidths((prev) => {
          const copy = [...prev];
          copy[i] = percent;
          return copy;
        });
      }, 100)
    );

    return () => timeouts.forEach(clearTimeout);
  });

  return (
    <div className="mt-10 mb-5">
      <h2 className="text-white text-lg font-medium mb-5">Weekly Goals</h2>

      <div className="bg-[#0F172B] rounded-[20px] p-[20px] border border-gray-600">
        {goals.map((goal, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center gap-2 text-base text-white font-regular mb-4">
              <span>{goal.icon}</span>
              <span>{goal.title}</span>
            </div>

            <div className="w-full h-4 bg-gray-600 rounded-full mb-2 relative overflow-hidden">
              <div
                className={`${goal.color} h-4 rounded-full absolute top-0 left-0 transition-all duration-700 ease-in-out`}
                style={{ width: `${animatedWidths[index] || 0}%` }}
              ></div>
            </div>

            <div className="text-sm text-gray-300 text-right">
              {goal.progress.toLocaleString()}/{goal.total.toLocaleString()} {goal.unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyGoals;
