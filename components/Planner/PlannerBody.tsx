import React from "react";
import PlannerFilter from "./PlannerFilter";
import PlannerCalender from "./PlannerCalender";

const PlannerBody = () => {
  return (
    <div className="md:px-[46px] px-[20px] mt-[60px]">
      <PlannerFilter />
      <PlannerCalender />
    </div>
  );
};

export default PlannerBody;
