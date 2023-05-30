import Image from "next/image";
import React, { useState } from "react";
import Drawer from "./Drawer";

const PlannerHeader = () => {
  const [active, setActive] = useState(0);
  const [drawerShown, setDrawerShown] = useState(false);
  const links = [
    { title: "Planning", image: "/images/planning.png" },
    { title: "Documentation", image: "/images/documentation.png" },
    { title: "Housekeeping", image: "/images/houseKeeping.png" },
  ];
  return (
    <div className=" px-10 md:px-[50px] h-[60px] items-center py-[20px] shadow-md flex justify-between fixed top-0 w-full z-50 bg-white">
      <Drawer
        drawerShown={drawerShown}
        links={links}
        active={active}
        setActive={setActive}
      />

      <div
        onClick={() => {
          setDrawerShown((curr) => !curr);
        }}
        className=" md:hidden h-10 w-10 rounded-full bg-gray-200 relative bg-pink-500 cursor-pointer"
      >
        <div
          className={`${
            drawerShown ? "  rotate-45 -translate-y-1/2" : " translate-y-[2px]"
          } w-[20px] h-[1px] bg-black absolute top-1/2 left-1/2 transition-all -translate-x-1/2 duration-300`}
        ></div>
        <div
          className={`${
            drawerShown
              ? "   -rotate-45 -translate-y-1/2"
              : " -translate-y-[2px]"
          } w-[20px] h-[1px] bg-black absolute top-1/2 left-1/2 transition-all -translate-x-1/2 duration-300`}
        ></div>
      </div>
      <div className=" hidden md:flex items-center gap-[9px] relative cursor-pointer group">
        <p>Educator</p>
        <Image
          width={6}
          height={6}
          src={"/images/down.png"}
          className=" group-hover:rotate-180 transition-all duration-300"
          alt="arrow down icon"
        />
        <p className=" text-small text-textLightShade absolute -bottom-3">
          Arthshala
        </p>
      </div>
      <div className="gap-[84px] hidden md:flex">
        {links.map((link, i) => (
          <div
            className="flex items-center gap-[7px] cursor-pointer active:scale-95 transition-all duration-200"
            key={i}
            onClick={() => {
              setActive(i);
            }}
          >
            <Image width={14} height={14} src={link.image} alt=" link icon" />
            <div className="relative">
              <p>{link.title}</p>
              <div
                className={`h-[1.5px] w-full transition-all duration-300 bg-primary absolute -bottom-[5px] ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-[24.74px] items-center">
        <Image
          width={14}
          height={14}
          src={"/images/search.png"}
          className=" cursor-pointer active:scale-90 transition-all duration-200"
          alt="search icon"
        />
        <Image
          width={14}
          height={14}
          src={"/images/bell.png"}
          className=" cursor-pointer active:scale-90 transition-all duration-200"
          alt="notification icon"
        />
        <div className="flex items-center gap-[5px] group">
          <Image
            width={30}
            height={30}
            src={"/images/person.png"}
            className=" cursor-pointer"
            alt="user icon"
          />
          <Image
            width={6}
            height={6}
            src={"/images/down.png"}
            className=" cursor-pointer group-hover:rotate-180 transition-all duration-300"
            alt="arrow down icon"
          />
        </div>
      </div>
    </div>
  );
};

export default PlannerHeader;
