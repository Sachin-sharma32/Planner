import Image from "next/image";
import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const AddPeriodButton = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className=" active:scale-95 transition-all duration-200 bg-primary px-[10px] py-[8px] md:px-[33px] md:py-[8px] flex text-white gap-[7.12px] items-center rounded-full"
    >
      <Image width={20} height={20} src={"/images/add.png"} alt="add icon" />
      <p className=" text-small md:text-large">Add Period</p>
    </button>
  );
};

export default AddPeriodButton;
