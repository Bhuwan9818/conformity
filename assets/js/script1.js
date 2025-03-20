document.addEventListener("DOMContentLoaded", function () {
    let menuItem = document.querySelector(".menu-item");
    let megaMenu = document.querySelector(".mega-menu");
    let megaicon = document.querySelector(".icon-up");

    menuItem.addEventListener("mouseenter", function () {
        megaMenu.style.display = "block";
        megaicon.style.transform = "rotate(360deg)";
    });

    menuItem.addEventListener("mouseleave", function () {
        megaMenu.style.display = "none";
        megaicon.style.transform = "rotate(0deg)";
    });
});
