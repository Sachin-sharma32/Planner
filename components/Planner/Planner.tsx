import React from "react";
import PlannerHeader from "./PlannerHeader";
import PlannerBody from "./PlannerBody";

const Planner = () => {
  return (
    <div className="bg-white min-h-screen">
      <PlannerHeader />
      <PlannerBody />
    </div>
  );
};

export default Planner;
