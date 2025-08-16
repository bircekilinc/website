window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  let viewportHeight = window.innerHeight;
  let scrollY = window.scrollY;
  if (scrollY < viewportHeight) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = "#0c0c0c";
  }
});
