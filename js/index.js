const mobile_nav = document.querySelector(".mobile-navigation-btn img");
const nav_header = document.querySelector(".header");
const dropdown = document.querySelector(".dropdown-toggle");
const dropdown_img = document.querySelector(".dropdown-toggle img");

document.addEventListener("click", (event) => {
  if (event.target === mobile_nav) nav_header.classList.toggle("active");
  else if (event.target === dropdown || event.target === dropdown_img)
    return false;
  else nav_header.classList.remove("active");
  if (nav_header.classList.contains("active"))
    document.querySelector("html").style.overflow = "hidden";
  else document.querySelector("html").style.overflow = "unset";
});

var maxHeight = 0;
jQuery(".token-section")
  .find(".token-card")
  .each(function (index) {
    if (jQuery(this).height() > maxHeight) maxHeight = jQuery(this).height();
  });
jQuery(".token-section").find(".token-card").height(maxHeight);

jQuery(".navigation-link").on("mouseenter mouseleave", function () {
  jQuery(this).parent().siblings(".current").toggleClass("active");
});
