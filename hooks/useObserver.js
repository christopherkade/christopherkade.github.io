import { useEffect, useMemo } from "react";

const useObserver = (customOptions = null) => {
  const setCurrent = (section) => {
    document
      .querySelectorAll(".current-section")
      .forEach((el) =>
        el.classList.remove("current-section", "strike-through-yellow")
      );

    let id = section.id;
    if (id === "hero") {
      id = "";
    } else {
      id = "#" + id;
    }

    const currentLink = document.querySelector(`.list__link[href="/${id}"]`);
    currentLink.classList.add("current-section", "strike-through-yellow");
  };

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrent(entry.target);
      }
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    let options = {
      rootMargin: "-30% 0px -70% 0px",
      threshold: 0,
    };

    options = customOptions ? customOptions : options;

    const observer = new IntersectionObserver(callbackFunction, options);

    sections.forEach((section) => observer.observe(section));
  }, []);
};

export default useObserver;
