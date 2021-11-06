const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links-list");
  const navLinks = document.querySelectorAll(".links-list li");
  burger.addEventListener("click", () => {
    //Toggle Navbar
    nav.classList.toggle("links-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("rotate");
  });
};

navSlide();
