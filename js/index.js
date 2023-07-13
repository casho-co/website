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

// var container = document.getElementById("container");
// var image = document.getElementById("image");

// container.addEventListener("mousemove", moveImage);

// function moveImage(event) {
//   var containerWidth = container.offsetWidth;
//   var containerHeight = container.offsetHeight;

//   var mouseX = event.clientX - container.offsetLeft;
//   var mouseY = event.clientY - container.offsetTop;

//   var imageX = (mouseX / containerWidth) * 20 - 10;
//   var imageY = (mouseY / containerHeight) * 20 - 10;

//   image.style.transform = "translate(" + imageX + "px, " + imageY + "px)";
// }

// window.addEventListener("resize", function () {
//   image.style.transform = "translate(0, 0)";
// });

// const textLines = [
//   { text: "The Casho protocol", color: "#000000" },
//   { text: "utilises the Casho (", color: "#000000" },
//   { text: "$casho", color: "#6a38fd" },
//   { text: ") Utility Token", color: "#000000" },
// ];

// const typingSpeed = 100;
// const textContainer = document.getElementById("text-container");
// let typewriterStarted = false;

// function startTypewriter() {
//   if (typewriterStarted) {
//     return;
//   }

//   typewriterStarted = true;

//   function typeText(index) {
//     if (index >= textLines.length) {
//       return;
//     }

//     const line = textLines[index];
//     const { text, color } = line;
//     const lineElement = document.createElement("span");
//     lineElement.style.color = color;
//     textContainer.appendChild(lineElement);
//     var br = document.createElement("br");
//     if (index == 0) textContainer.appendChild(br);
//     let charIndex = 0;
//     const typeInterval = setInterval(() => {
//       if (charIndex < text.length) {
//         lineElement.textContent += text.charAt(charIndex);
//         charIndex++;
//       } else {
//         clearInterval(typeInterval);
//         typeText(index + 1);
//       }
//     }, typingSpeed);
//   }

//   typeText(0);
// }

// function checkSectionVisibility() {
//   const sectionRect = textContainer.getBoundingClientRect();
//   const isSectionVisible =
//     sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

//   if (isSectionVisible) {
//     startTypewriter();
//     window.removeEventListener("scroll", checkSectionVisibility);
//   }
// }

// window.addEventListener("scroll", checkSectionVisibility);
