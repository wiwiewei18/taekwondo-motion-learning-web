import React from "react";

import TaekwondoHangeul from "../assets/taekwondo-hangeul.png";

function Logo() {
  return (
    <div className="logo">
      <img src={TaekwondoHangeul} alt="taekwondo hangeul" />
      <h1 className="text-white text-boogaloo">Taekwondo Motion Learning</h1>
    </div>
  );
}

export default Logo;
