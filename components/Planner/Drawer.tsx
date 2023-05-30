import Image from "next/image";
import React from "react";

interface DrawerProps {
  drawerShown: boolean;
  links: { title: string; image: string }[];
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
}

const Drawer = ({ drawerShown, links, active, setActive }: DrawerProps) => {
  return (
    <div
      className={`${
        drawerShown ? "translate-x-0" : " -translate-x-full"
      }  h-screen shadow-xl w-[200px] transition-all duration-300 fixed top-[60px] left-0 p-10 bg-white z-50`}
    >
      <div className="gap-[84px] flex flex-col">
        {links.map((link, i) => (
          <div
            className="flex items-center gap-[7px] cursor-pointer active:scale-95 transition-all duration-200"
            key={i}
            onClick={() => {
              setActive(i);
            }}
          >
            <Image width={14} height={14} src={link.image} alt="Link Image" />
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
    </div>
  );
};

export default Drawer;
