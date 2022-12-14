import React, { useEffect, useState } from "react";
import Image from "next/image";

import useObserver from "../../hooks/useObserver";
import gateImg from "./images/gate2.png";

const Durin = () => {
  const [gateHeight, setGateHeight] = useState(280);
  const [containerRef] = useObserver();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const durin = window.document.querySelector("#durin");
      const height = durin.getBoundingClientRect().top - 112 + 280;
      setGateHeight(height < 170 ? 170 : height);
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center min-h-[645px] mt-28">
      <Image
        ref={containerRef}
        id="durin"
        width="auto"
        src={gateImg}
        priority={true}
        style={{
          height: gateHeight,
          width: "auto",
        }}
        alt=""
        className={`animate-fadeIn`}
      />
      <div className="border-l border-black h-[400px] m-x-auto border-translate-y animate-showLine"></div>
    </div>
  );
};

export default Durin;
