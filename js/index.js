const mobile_nav = document.querySelector(".mobile-navigation-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

jQuery(".navigation-link").on("mouseenter mouseleave", function () {
  jQuery(this).parent().siblings(".current").toggleClass("active");
});

var container = document.getElementById("container");
var image = document.getElementById("image");

container.addEventListener("mousemove", moveImage);

function moveImage(event) {
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;

  var mouseX = event.clientX - container.offsetLeft;
  var mouseY = event.clientY - container.offsetTop;

  var imageX = (mouseX / containerWidth) * 20 - 10;
  var imageY = (mouseY / containerHeight) * 20 - 10;

  image.style.transform = "translate(" + imageX + "px, " + imageY + "px)";
}

window.addEventListener("resize", function () {
  image.style.transform = "translate(0, 0)";
});
