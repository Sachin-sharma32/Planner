import AddPeriod from "@/components/AddPeriod/AddPeriod";
import Planner from "@/components/Planner/Planner";
import React from "react";

const Home = () => {
  
  return (
    <div className=" font-nunitoNormal overflow-x-hidden">
      <Planner />
      <AddPeriod />
    </div>
  );
};

export default Home;
