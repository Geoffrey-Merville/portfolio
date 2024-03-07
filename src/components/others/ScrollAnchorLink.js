import React from "react";

const ScrollAnchorLink = ({ href, offset, children }) => {
  const handleAnchorClick = (event) => {
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();
      const isPC = window.innerWidth >= 850;

      if (isPC) {
        const targetOffset =
          targetElement
            .getBoundingClientRect()
            .top + window.scrollY - offset;

        window.scroll({
          top: targetOffset,
          behavior: "smooth",
        });

      } else {
        const targetOffset = 
            targetElement
                .getBoundingClientRect()
                .top + window.scrollY - 10

        window.scroll({
            top: targetOffset,
            behavior: "smooth" 
        });
      }
    }
  };

  return (
    <a className="linked-experience" href={href} onClick={handleAnchorClick}>
      {children}
    </a>
  );
};

export default ScrollAnchorLink;
