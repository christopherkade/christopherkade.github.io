import starPng from "../../images/star.png";

import Image from "next/image";

const MainDescription = () => {
  return (
    <div className="mx-auto">
      <Image
        src={starPng}
        className="mx-auto mb-10 w-10 h-10 cursor-pointer hover:rotate-star"
      />
      <p className="text-3xl text-theme-text text-center">
        I build robust web applications using the latest practices in the
        front-end industry.
      </p>
    </div>
  );
};

export default MainDescription;
