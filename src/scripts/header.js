"use strict";
const dropDown_menu = document.querySelector(".dropdown-menu__open-icon");
const menuList = document.querySelector(".menu-list");
const closeMenu = document.querySelector(".dropdown-menu__close-icon");
const menuItem = document.querySelectorAll(".menu-item");
const menuLink = document.querySelectorAll(".menu-item__link");

const openFunc = () => {
  dropDown_menu.addEventListener("click", () => {
    menuList.classList.add("active");
    dropDown_menu.classList.add("active");
    closeMenu.classList.add("active");
    menuItem.forEach((item) => item.classList.add("active"));
    menuLink.forEach((link) => link.classList.add("active"));
  });
};

const closeFunc = () => {
  closeMenu.addEventListener("click", () => {
    menuList.classList.remove("active");
    closeMenu.classList.remove("active");
    dropDown_menu.classList.remove("active");
    menuItem.forEach((item) => item.classList.remove("active"));
    menuLink.forEach((link) => link.classList.remove("active"));
  });
};

openFunc();
closeFunc();

window.addEventListener("click", (evnt) => {
  if (
    evnt.target.classList.contains("dropdown-menu__open-icon") ||
    evnt.target.classList.contains("menu-list") ||
    evnt.target.classList.contains("menu-item__link")
  ) {
    return;
  } else {
    menuList.classList.remove("active");
    closeMenu.classList.remove("active");
    dropDown_menu.classList.remove("active");
    menuItem.forEach((item) => item.classList.remove("active"));
    menuLink.forEach((link) => link.classList.remove("active"));
  }
});
