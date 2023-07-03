const mobile_nav = document.querySelector(".mobile-navigation-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

jQuery(".navigation-link").on("mouseenter mouseleave", function () {
  jQuery(this).parent().siblings(".current").toggleClass("active");
});
