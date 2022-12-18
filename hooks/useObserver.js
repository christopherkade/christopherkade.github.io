import { useEffect, useMemo } from "react";

// TODO: Fix the lack of trigger over Projects
const useObserver = (customOptions = null) => {
  const setCurrent = (section) => {
    document
      .querySelectorAll(".current-section")
      .forEach((el) =>
        el.classList.remove("current-section", "strike-through-yellow")
      );

    // section.classList.add("current");

    let id = section.id;
    if (id === "hero") {
      id = "";
    } else {
      id = "#" + id;
    }

    const currentLink = document.querySelector(`.list__link[href="/${id}"]`);
    console.log("865 --- currentLink", currentLink);
    currentLink.classList.add("current-section", "strike-through-yellow");
  };

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      // console.log("865 --- entry.intersectionRatio", entry.intersectionRatio);
      if (entry.isIntersecting) {
        // console.log("865 --- CURRENT", entry.target.id);
        setCurrent(entry.target);
      }
    });
  };

  // const items = useMemo(() => {
  //   const TABS = {
  //     TAB_ABOUT: 'about',
  //     TAB_ARTICLES: 'articles',
  //     TAB_PROJECTS: 'projects',
  //     TAB_CONTACT: 'contact',
  //   };

  //   return [
  //     {
  //       title: 'About',
  //       route: `${pathname}#${TAB_OVERVIEW}`,
  //       id: TAB_OVERVIEW,
  //     },
  //     {
  //       title: translate('course.toc.tab'),
  //       route: `${pathname}#${TAB_TOC}`,
  //       id: TAB_TOC,
  //     },
  //     {
  //       title: translate('course.teachers.tab'),
  //       route: `${pathname}#${TAB_CREDITS}`,
  //       id: TAB_CREDITS,
  //     },
  //   ];
  // }, [pathname]);

  // useEffect(() => {
  //   const observerCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const currentlyVisibleSectionIndex = items.findIndex(
  //           (item) => item.id === entry.target.getAttribute('id')
  //         );
  //         setCurrentlyVisibleSection(currentlyVisibleSectionIndex);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(observerCallback, {
  //     rootMargin: '-30% 0px -70% 0px',
  //     threshold: 0,
  //   });

  //   items.forEach((item) => {
  //     const domElement = document.getElementById(item.id);

  //     if (domElement) {
  //       observer.observe(domElement);
  //     }
  //   });
  // })

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    // console.log("865 --- SECTIONS", sections);
    let options = {
      rootMargin: "-30% 0px -70% 0px",
      threshold: 0,
    };

    options = customOptions ? customOptions : options;

    const observer = new IntersectionObserver(callbackFunction, options);

    // if (containerRef.current) {
    //   observer.observe(containerRef.current);
    // }
    sections.forEach((section) => observer.observe(section));

    // return () => {
    //   sections.forEach((section) => {
    //     observer.unobserve(section);
    //   });
    // };
  }, []);
};

export default useObserver;
