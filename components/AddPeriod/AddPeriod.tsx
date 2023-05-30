import { setPeriodVisibility } from "@/redux/slices";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import AddPeriodButton from "../utils/AddPeriodButton";

interface Base {
  periodVisibility: boolean;
}

interface ReduxState {
  base: Base;
}

const AddPeriod = () => {
  const [active, setActive] = useState<Array<number>>([2, 5]);
  const [activeColor, setActiveColor] = useState<number>(0);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const colors = ["pink", "purple", "yellow", "green"];
  const dispatch = useDispatch();
  const periodVisibility = useSelector(
    (state: ReduxState) => state.base.periodVisibility
  );
  return periodVisibility ? (
    <Modal>
      <div
        className={`md:w-[50%] flex flex-col gap-10 md:gap-0 justify-between rounded-lg xs:px-[10px] px-[30px] md:px-[43px] py-[36px] md:h-[95%] bg-white ${
          periodVisibility ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition-all duration-300`}
      >
        <div className="flex justify-between items-center">
          <p className=" font-nunitoExtraBold text-largest">Add Period</p>
          <button
            onClick={() => {
              dispatch(setPeriodVisibility(false));
            }}
          >
            <Image
              width={15}
              height={15}
              src={"/images/close.png"}
              className=" cursor-pointer"
              alt="Close Modal Icon"
            />
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="periodName">Period Name</label>
            <input
              type="text"
              id="periodName"
              placeholder="Enter Period Name"
              className=" w-full px-[14px] hover:border-black outline-none  border-gray-300 bg-white border py-[19px] rounded-lg"
            />
          </div>
        </div>
        <div className="flex w-full justify-between gap-4">
          <div className="flex flex-col gap-[10px] w-full">
            <label htmlFor="startTime">Start Time</label>

            <MobileTimePicker />
          </div>
          <div className="flex flex-col gap-[10px] w-full">
            <label htmlFor="endTime">End Time</label>

            <MobileTimePicker />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>Repeat on days</p>
          <div className="flex gap-[14px]">
            {days.map((day, i) => (
              <div
                onClick={() => {
                  if (active.includes(i)) {
                    setActive((curr) => active.filter((item) => item !== i));
                  } else {
                    setActive((curr) => [...curr, i]);
                  }
                }}
                key={i}
                className={`${
                  active.includes(i)
                    ? "text-white bg-primary"
                    : "bg-lightGray text-black"
                }  p-[9px] cursor-pointer w-8 h-8 flex items-center justify-center rounded-full`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[10px] w-full">
          <label htmlFor="startTime">From</label>

          {/* <DemoContainer components={["SingleInputDateRangeField"]}>
              <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
            </DemoContainer> */}
          <input
            type="date"
            id="startTime"
            placeholder="St"
            className=" w-full px-[14px] hover:border-black outline-none  border-gray-300 bg-white border py-[19px] rounded-lg"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-[14px]">
            {colors.map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 bg-${color} rounded-full flex items-center justify-center cursor-pointer`}
                onClick={() => {
                  setActiveColor(i);
                }}
              >
                <Image
                  width={10}
                  height={10}
                  src={"/images/check.png"}
                  className={`${
                    activeColor === i ? "opacity-100" : "opacity-0"
                  } translate-all duration-300`}
                  alt="Select Icon"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[20.63px]">
            <Image
              width={15}
              height={15}
              src={"/images/delete.png"}
              className={` active:scale-95 translate-all duration-300 cursor-pointer`}
              alt="Delete Icon"
            />
            <AddPeriodButton
              onClick={() => {
                dispatch(setPeriodVisibility(false));
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  ) : (
    <div></div>
  );
};

export default AddPeriod;
