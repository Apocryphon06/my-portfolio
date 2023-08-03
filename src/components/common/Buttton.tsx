import React from "react";

const Buttton = (props: any) => {
  return <button onClick={props.onClick} className="bg-[#181818] h-14 p-9 text-[#808080] hover:text-white text-base">{props.children}</button>;
};

export default Buttton;
