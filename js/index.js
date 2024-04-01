//---------------- navBar slideup & down (S) ------------------
let didScroll;
let lastScrollTop = 0;
const delta = 1100;
const navBar = document.querySelector("header");
const navbarHeight = navBar.offsetHeight;

window.addEventListener("scroll", function () {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);

function hasScrolled() {
  const st = window.scrollY || document.documentElement.scrollTop;

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    navBar.classList.add("nav_up");
  } else {
    // Scroll Up
    if (st + window.innerHeight < document.documentElement.scrollHeight) {
      navBar.classList.remove("nav_up");
    }
  }
  lastScrollTop = st;
}

// //---------------- navBar slideup & down (E) ------------------
// //-----------------footer dropdown menu (S) ------------------

const ftDropdownBtn = document.querySelector(".footer_dropdown_menu button");
const ftDropdown = document.querySelector(".footer_dropdown_menu .depth2");
const ftArrow = document.querySelector(".footer_arrow");

ftDropdownBtn.addEventListener("click", function () {
  if (ftDropdown.classList.contains("active")) {
    ftDropdown.classList.remove("active");
    ftArrow.classList.remove("active");
  } else {
    ftDropdown.classList.add("active");
    ftArrow.classList.add("active");
  }
});

ftDropdownBtn.addEventListener("blur", function () {
  ftDropdown.classList.remove("active");
  ftArrow.classList.remove("active");
});
// //---------------- footer dropdown menu (E) ------------------
// //---------------- 반응형 드롭다운 메뉴 (S) ------------------
const body = document.querySelector("body");
const hambergerBtn = document.querySelector(".hamberger_btn");
const nav = document.querySelector("nav");
const navRightBtn = document.querySelector(".right_btn");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

hambergerBtn.addEventListener("click", function () {
  if (navBar.classList.contains("active")) {
    navBar.classList.remove("active");
    nav.classList.remove("active");
    navRightBtn.classList.remove("active");
    line1.classList.remove("active1");
    line2.classList.remove("active2");
    line3.classList.remove("active3");
    body.classList.remove("scrollLock");
  } else {
    navBar.classList.add("active");
    nav.classList.add("active");
    navRightBtn.classList.add("active");
    line1.classList.add("active1");
    line2.classList.add("active2");
    line3.classList.add("active3");
    body.classList.add("scrollLock");
  }
});

function initializeMenu() {
  let windowWidth = window.innerWidth;
  let headerMenus = document.querySelectorAll("header .depth1 > li");

  if (windowWidth <= 1025) {
    headerMenus.forEach((headerMenu) => {
      let navArr = headerMenu.querySelector(".arrow");
      if (navArr) {
        navArr.addEventListener("click", function () {
          let parentElement = this.parentElement;
          let depth2 = parentElement.querySelector(".depth2");
          let isActive = depth2.classList.contains("active");
          if (isActive) {
            depth2.classList.remove("active");
            this.classList.add("arrow");
            this.classList.remove("change");
          } else {
            depth2.classList.add("active");
            this.classList.remove("arrow");
            this.classList.add("change");
          }
        });
      }
    });
  }
}

window.onload = initializeMenu;
window.onresize = initializeMenu;

// //---------------- 반응형 드롭다운 메뉴 (E) ------------------
