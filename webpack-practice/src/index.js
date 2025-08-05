// src/index.js
import "./styles.css";
import { homeSection } from "./home_section.js";
import { menuSection } from "./menu_section.js";

const contentId = "#content";
const navBtnsClass = ".nav-btn";
const btnClickedClass = "active";

const routes = {
  home: homeSection,
  menu: menuSection,
};

const content = document.querySelector(contentId);
const buttons = document.querySelectorAll(navBtnsClass);
const homeBtn = document.querySelector('a[href="#home"]');
// const menuBtn = document.querySelector('a[href="#menu"]');
// const aboutBtn = document.querySelector('a[href="#about"]');

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const route = btn.getAttribute("href").substring(1);
    const section = routes[route];
    if (section) {
      content.innerHTML = "";
      content.appendChild(section);

      buttons.forEach((b) => b.classList.remove(btnClickedClass));
      e.currentTarget.classList.add(btnClickedClass);
    }
  });
});
//load home
homeBtn.click();

window.addEventListener('scroll', function() {
    console.log("Current scrollY:", window.pageYOffset);
  const header = document.querySelector('header');
  if (window.pageYOffset > 50) {
    console.log("50..");
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
