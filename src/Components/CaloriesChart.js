import React from 'react';
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', kcal: 700 },
  { day: 'Tue', kcal: 900 },
  { day: 'Wed', kcal: 850 },
  { day: 'Thu', kcal: 1560 },
  { day: 'Fri', kcal: 1000 },
  { day: 'Sat', kcal: 1200 },
  { day: 'Sun', kcal: 1250 }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative -translate-y-6 -translate-x-2 z-20">
        <div className="bg-[#45556C] shadow-lg rounded-[36px] px-4 py-2 text-white text-xs border border-[#62748E]-600">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-lime-400 rounded-[36px]" />
            <span>{label}</span>
          </div>
          <p className="font-medium text-lg">
            {payload[0].value.toLocaleString()} <span className="text-xs font-normal">Kcal</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const CaloriesChart = () => {
  return (
    <div className="relative z-10 rounded-[20px] bg-[#0F172B] p-4 mt-6 border border-gray-600">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-lg font-medium">Calories Burned</h3>
        <div className="bg-[#1D293D] text-white text-sm rounded-[32px] px-4 py-2 border border-gray-600">
          Weekly ▾
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart 
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
        >

          <defs>
            <linearGradient 
            id="colorKcal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A4F94F" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#A4F94F" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            tick={{ fill: '#ccc', fontSize: 12 }}
            axisLine={{ stroke: "#FFFFFF", strokeWidth: 1 }}
            tickLine={false}
            padding={{ top: 0, right: 0, left: 20, bottom: 0 }}
          />
          <YAxis
            domain={[0, 1800]}
            ticks={[400, 800, 1200, 1600]}
            tick={{ fill: '#ccc', fontSize: 12 }}
            axisLine={{ stroke: "#FFFFFF", strokeWidth: 1 }}
            tickLine={false}
            padding={{ top: 0, right: 0, left: 0, bottom: 10 }}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: '#A4F94F', strokeDasharray: '3 3' }}
          />

          <Area
            type="monotone"
            dataKey="kcal"
            stroke="none"
            fill="url(#colorKcal)"/>

          <Line
            type="monotone"
            dataKey="kcal"
            stroke="#A4F94F"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8, fill: '#A4F94F', stroke: '#0F172B', strokeWidth: 2 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CaloriesChart;
