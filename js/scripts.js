window.onload = () => {
  // Constants Declarations
  const currentTab = window.location.pathname
    .split("/")
    .slice(-1)
    .join("")
    .replace(".html", "");
  const menu = document.querySelector("header > nav > ul");
  const carouselSize = document.querySelectorAll(".carousel-sections");
  const emptyLink = document.querySelectorAll(".empty-link");

  if (currentTab === "") {
    window.location.assign("../portfolio/html/parcours.html");
  }
  menu.childNodes[1].remove();

  menu.childNodes.forEach((element) => {
    if (element.textContent.toLowerCase() === "accueil") {
      element.classList.add("active-menu");
    } else if (element.textContent.toLowerCase().match(currentTab)) {
      element.parentNode.childNodes[1] =
        element.parentNode.childNodes[1].textContent.toLowerCase() === "accueil"
          ? element.parentNode.childNodes[1].classList.remove("active-menu")
          : 0;
      let contact = element.querySelector("li > a");
      element.classList.add("active-menu");
      if (contact.hasAttribute("id")) {
        element.classList.remove("active-menu");
        contact.style.backgroundColor = "#FFA34E";
      }
    }
  });

  /**
   * Initialize a carousel
   *
   * @param {number} containerId id of the container to instanciate.
   */
  function initializeCarousel(containerId) {
    const container = document.getElementById(containerId);
    const carouselItems = container.querySelectorAll(".project");
    let buttonList = container.querySelectorAll(".carousel-buttons > button");
    let carouselMenu = container.querySelector(".carousel-buttons");
    let currentIndex = 0;

    if (buttonList.length < carouselItems.length) {
      for (let i = 0; i < carouselItems.length; i++) {
        const newButton = document.createElement("button");
        carouselMenu.appendChild(newButton);
      }
      carouselMenu.firstChild.classList.add("active");
    }
    // central alignment of carousel chips
    carouselMenu.style.left = `calc(50% - ${carouselMenu.offsetWidth / 2}px)`;

    /**
     * Display a specific slide depending on the passed index.
     *
     * @param {number} index current index of the carousel slide
     */
    function showSlide(index) {
      carouselItems.forEach((item) => {
        item.style.display = "none";
      });

      carouselItems[index].style.display = "block";
    }

    /**
     * Toggles the active attribute of the carousel chips according to the current slide's index.
     *
     * @param {number} chipIndex index of the current chip
     */
    function chipsToggle(chipIndex) {
      buttonList = container.querySelectorAll(".carousel-buttons > button");
      buttonList.forEach((ev, _, buttons) => {
        buttons.forEach((button) => {
          button.classList.toggle("active", button === buttonList[chipIndex]);
        });
      });
    }

    /**
     * Swipe to the next slide of the carousel
     */
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      chipsToggle(currentIndex);
      showSlide(currentIndex);
    }

    /**
     * Swipe to the previous slide of the carousel
     */
    function previousSlide() {
      currentIndex =
        (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      chipsToggle(currentIndex);
      showSlide(currentIndex);
    }

    showSlide(currentIndex);

    container
      .querySelector(".right-arrow")
      .addEventListener("click", nextSlide);
    container
      .querySelector(".left-arrow")
      .addEventListener("click", previousSlide);
  }

  for (let i = 1; i < carouselSize.length + 1; i++) {
    initializeCarousel("carousel" + i);
  }

  emptyLink.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Le lien n'est disponible pour le moment !");
    });
  });

  /**
     * Toggles the active attribute of the carousel chips according to the current slide's index.
     *
     * @param {element} element id of the element to dynamically adjust
     * @param {stickyPosition} stickyPosition offsetX where the sticky position starts
     * @param {nonStickyPosition} nonStickyPosition offsetX where the sticky position ends
     * @param {className} className target class to dynamically append to the element
     */
  function autoSticky(element, offsetXStart, offsetXEnd, className) {
    const targetElement = document.getElementById(element);
    const positionSticky = offsetXStart;
    const positionNonSticky = offsetXEnd;

    window.addEventListener("scroll", () => {
      let positionScroll = window.scrollY || window.pageYOffset;

      if (positionScroll >= positionSticky) {
        targetElement.classList.add(className);
      } else {
        targetElement.classList.remove(className);
      }

      if (positionScroll >= positionNonSticky) {
        targetElement.classList.remove(className);
      }
    });
  }

  autoSticky("certificates", 2035, 2850, "certificatesSticky");
};
