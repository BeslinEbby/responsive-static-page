const navBar = document.getElementById("nav-bar");
window.onscroll = function () {
   if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
      navBar.classList.add("nav-colored");
   } else {
      navBar.classList.remove("nav-colored");
   }
};

let navMenu = document.querySelector(".menu");
const navOpen = () => {
   navMenu.classList.toggle("nav-menu-active");
};
const navClose = () => {
   navMenu.classList.remove("nav-menu-active");
};
