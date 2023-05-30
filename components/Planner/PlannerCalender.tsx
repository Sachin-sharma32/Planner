import React, { useState } from "react";

const PlannerCalender = () => {
  const [active, setActive] = useState(1);

  const data = [
    { day: "", date: null },
    { day: "mon", date: 10 },
    { day: "tue", date: 11 },
    { day: "wed", date: 12 },
    { day: "thu", date: 13 },
    { day: "fri", date: 14 },
    { day: "sat", date: 15 },
    { day: "sun", date: 16 },
  ];

  const times = Array.from({ length: 24 }, (_, index) => index);

  return (
    <table className=" mt-[20px]  w-[95%] ml-[15px] mx-auto md:px-[42px] border-collapse">
      <colgroup>
        {data.map((item, i) => (
          <col
            onClick={() => {
              setActive(i);
            }}
            key={i}
            className={`${active === i ? " bg-gray-50" : ""}`}
          />
        ))}
      </colgroup>
      <thead>
        <tr className="">
          {data.map((item, i) => (
            <th
              key={i}
              className={`${
                i === 0 || i === 7 ? " w-10 h-0" : " max-w-[150px] py-4"
              }`}
            >
              {i !== 0 && i !== 7 && (
                <div
                  className="flex flex-col cursor-pointer items-center "
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  <p className="text-small uppercase">{item.day}</p>
                  <p
                    className={`${
                      active === i ? "bg-primary text-white " : ""
                    }  text-largest transition-all duration-200 font-nunitoExtraBold rounded-full p-[5px] w-10 h-10 flex items-center justify-center`}
                  >
                    {item.date}
                  </p>
                </div>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {times.map((time, i) => (
          <tr key={i} className={`${i === 0 ? "h-10" : ""}`}>
            {i !== 0
              ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, j) => (
                  <td
                    key={j}
                    className={`${
                      j === 0 || j === 7 ? "border-t" : "border"
                    } h-[48px] relative `}
                  >
                    {i === 1 && j === 1 && (
                      <div className=" bg-pink text-pinkTextColor w-[120px] rounded-md p-[2px] px-[5px] absolute top-0">
                        <p className=" text-medium font-nunitoBold">Period 1</p>
                        <p className=" text-small">9:00 - 10:00</p>
                      </div>
                    )}
                    {i === 3 && j === 3 && (
                      <div className=" bg-green text-greenTextColor w-[120px] rounded-md p-[2px] px-[5px] absolute top-0">
                        <p className=" text-medium font-nunitoBold">Period 1</p>
                        <p className=" text-small">9:00 - 10:00</p>
                      </div>
                    )}
                    {i === 3 && j === 5 && (
                      <div className=" bg-yellow text-yellowTextColor w-[120px] rounded-md p-[2px] px-[5px] absolute top-0">
                        <p className=" text-medium font-nunitoBold">Period 1</p>
                        <p className=" text-small">9:00 - 10:00</p>
                      </div>
                    )}
                    {j === 0 ? (
                      time < 10 ? (
                        <p className=" absolute top-0 -translate-x-1/2 -left-4 text-small text-textLightShade -translate-y-[8.5px]">
                          0{time}.00
                        </p>
                      ) : (
                        <p className=" absolute top-0 -translate-x-1/2 -left-4 text-small text-textLightShade -translate-y-[8.5px]">
                          {time}.00
                        </p>
                      )
                    ) : (
                      <p></p>
                    )}
                  </td>
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8].map((item, j) => (
                  <td
                    key={j}
                    className={`${
                      j === 0 || j === 7 ? "" : "border-x"
                    } h-[48px] `}
                  >
                    {j === 0 && <p></p>}
                  </td>
                ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlannerCalender;
