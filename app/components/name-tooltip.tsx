"use client";

import { useEffect, useRef } from "react";

export function NameTooltip() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = "/images/chris-outline1.png";
    img.alt = "";
    img.width = 130;
    img.height = 148;
    img.className = "chris-tooltip fixed z-50 pointer-events-none select-none";
    img.style.display = "none";
    document.body.appendChild(img);
    imgRef.current = img;

    return () => {
      document.body.removeChild(img);
      imgRef.current = null;
    };
  }, []);

  const updatePosition = (x: number, y: number) => {
    const img = imgRef.current;
    if (!img) return;
    img.style.left = `${x + 10}px`;
    img.style.top = `${y + 10}px`;
  };

  return (
    <span
      className="cursor-default underline decoration-dotted underline-offset-4"
      onMouseEnter={(e) => {
        updatePosition(e.clientX, e.clientY);
        if (imgRef.current) imgRef.current.style.display = "block";
      }}
      onMouseMove={(e) => updatePosition(e.clientX, e.clientY)}
      onMouseLeave={() => {
        if (imgRef.current) imgRef.current.style.display = "none";
      }}
    >
      Christopher
    </span>
  );
}
