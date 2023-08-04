import React from "react";

const Button = (props: any) => {
  return <button onClick={props.onClick} className="bg-[#181818] hover:bg-[#d9d9d9] hover:text-black h-[60px] px-9 text-[#808080] flex flex-col justify-center items-center rounded-lg text-base">{props.children}</button>;
};

export default Button;
