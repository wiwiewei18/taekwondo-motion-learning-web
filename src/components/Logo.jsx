import React from "react";

import TaekwondoHangeul from "../assets/taekwondo-hangeul.png";

function Logo() {
  return (
    <div className="logo">
      <img src={TaekwondoHangeul} />
      <h1 className="text-black text-boogaloo">Taekwondo Motion Learning</h1>
    </div>
  );
}

export default Logo;
