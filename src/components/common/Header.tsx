import React from "react";
import { menuItems, socials } from "../../utils/helpers";

const Header = () => {
  return (
    <div className="relative flex flex-row justify-around items-center p-4 backdrop">
      <img
        src="/images/gradient.svg"
        alt="gradient_shadow"
        className="absolute z-10 top-0"
      />

      <div className="z-20 flex flex-row items-center gap-10">
        {menuItems.map((item: any) => (
          <h1
            key={item.id}
            className="text-base cursor-pointer capitalize text-[#d9d9d9]"
          >
            {item.name}
          </h1>
        ))}
      </div>

      <div className="flex flex-row items-center gap-10 z-20">
        {socials.map((item: any) => (
          <a href={item.url} target="__blank">
            <img
              key={item?.id}
              src={item?.image}
              alt={item?.name}
              className="cursor-pointer w-5 h-5"
            />
          </a>
        ))}

        <img
          src="/images/sun.svg"
          alt="sun_logo"
          className="cursor-pointer w-5 h-5"
        />
      </div>
    </div>
  );
};

export default Header;
