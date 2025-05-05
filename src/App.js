import React from 'react';
import Header from './Components/Header';
import Stats from './Components/Stats';
import CaloriesChart from './Components/CaloriesChart';
import WorkoutCard from './Components/WorkoutCard';
import Achievements from './Components/Achievements';
import WeeklyGoals from './Components/WeeklyGoals';
import BottomNav from './Components/BottomNav';
import './index.css';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020618] to-[#11131E] text-white overflow-x-hidden max-w-md mx-auto">
      <div className="w-full max-w-md h-20 bg-gradient-to-b from-lime-400/20 to-transparent" />
      <div className="px-4 pb-24 pt-0">
        <Header/>
        <Stats/>
        <CaloriesChart/>
        <WorkoutCard/>
        <Achievements/>
        <WeeklyGoals/>
      </div>
      <BottomNav/>
    </div>
  );
}

export default App;
