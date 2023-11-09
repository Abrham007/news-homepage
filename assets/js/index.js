const mainNavStyle = document.querySelector(".js-main-nav").style;
const navLogo = document.querySelector(".js-nav-icon");

navLogo.addEventListener("click", function () {
  if (mainNavStyle.display === "none") {
    mainNavStyle.display = "flex";
    navLogo.src = "./assets/images/icon-menu-close.svg";
    navLogo.style.width = "30px";
    navLogo.style.height = "30px";
  } else {
    mainNavStyle.display = "none";
    navLogo.src = "./assets/images/icon-menu.svg";
    navLogo.style.width = "40px";
    navLogo.style.height = "17px";
  }
});
