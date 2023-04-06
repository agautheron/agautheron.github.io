document.addEventListener("DOMContentLoaded", function () {
  var socialLink = document.getElementById("list-social-links");
  var menuLink = document.getElementById("menu-list");

  document.getElementById("button-follow").addEventListener("click", function () {
    if ((socialLink.style.display === "none") || (window.getComputedStyle(socialLink, null).display === "none")) {
      socialLink.style.display = "block";
    } else {
      socialLink.style.display = "none";
    }
  });

  document.getElementById("button-menu").addEventListener("click", function() {
    if ((menuLink.style.display === "none") || (window.getComputedStyle(menuLink, null).display === "none")) {
      menuLink.style.display = "block";
    } else {
      menuLink.style.display = "none";
    }
  });

  menuLink.addEventListener("click", function() {
    if (menuLink.style.display === "block") {
      menuLink.style.display = "none";
    }
  })

  window.addEventListener("resize", function () {
    socialLink.style = "";
    menuLink.style   = "";
  });

});