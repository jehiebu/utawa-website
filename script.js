const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

    const menuIsOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

});


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

    });

});