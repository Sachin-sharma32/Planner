import { setPeriodVisibility } from "@/redux/slices";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddPeriodButton from "../utils/AddPeriodButton";

const PlannerFilter = () => {
  const [active, setActive] = useState(1);
  const data = ["Project Planning", "Weekly Planning", "Planning Insights"];
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="py-[20px] md:px-[10px] text-textLightShade border-b border-textLightShade flex items-center justify-between">
        <div className="flex gap-[10px] md:gap-[67px] items-center xs:w-full sm:w-fit justify-between">
          {data.map((item, i) => (
            <p
              className={` px-[4px] md:px-[12px] text-small md:text-large active:scale-95 transition-all duration-200  cursor-pointer py-[10px] rounded-[5px] ${
                active === i ? "bg-purple text-black" : ""
              }`}
              key={i}
              onClick={() => {
                setActive(i);
              }}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="border  hidden md:flex focus-within:scale-125 transition-all duration-300 h-fit py-[8px] px-[13px] items-center gap-[15px] rounded-full">
          <Image
            width={14}
            height={14}
            src={"/images/searchLight.png"}
            className=" grayscale cursor-pointer active:scale-90 transition-all duration-200"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search for projects"
            className="bg-white placeholder:text-small text-small outline-none
            "
          />
        </div>
      </div>
      <div className=" py-[20px] px-[10px] flex items-center justify-between">
        <div className="flex gap-[13.81px]">
          <p className=" font-nunitoExtraBold md:text-largest">April 10-17</p>
          <div className="flex gap-[12.81px] items-center">
            <Image
              width={8}
              height={8}
              src={"/images/arrow.png"}
              className=" rotate-180 cursor-pointer "
              alt="arrow right icon"
            />
            <p className=" text-small md:text-medium">Today</p>
            <Image
              width={8}
              height={8}
              src={"/images/arrow.png"}
              className=" cursor-pointer"
              alt="arrow left icon"
            />
          </div>
        </div>
        <div>
          <AddPeriodButton
            onClick={() => {
              dispatch(setPeriodVisibility(true));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlannerFilter;
