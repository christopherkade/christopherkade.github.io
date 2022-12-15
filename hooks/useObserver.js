import { useEffect } from "react";

// TODO: Fix the lack of trigger over Projects
const useObserver = (customOptions = null) => {
  const setCurrent = (section) => {
    document
      .querySelectorAll(".current")
      .forEach((el) => el.classList.remove("current"));

    // section.classList.add("current");

    let id = section.id;
    if (id === "hero") {
      id = "";
    } else {
      id = "#" + id;
    }

    const currentLink = document.querySelector(`.list__link[href="/${id}"]`);
    currentLink.classList.add("current");
  };

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        console.log("865 --- CURRENT", entry.target.id);
        setCurrent(entry.target);
      }
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    // console.log("865 --- SECTIONS", sections);
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    options = customOptions ? customOptions : options;

    const observer = new IntersectionObserver(callbackFunction, options);

    // if (containerRef.current) {
    //   observer.observe(containerRef.current);
    // }
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};

export default useObserver;
