// Table of Content
// navigation button




// ============= NAVIGATION BUTTON ===============
const navButton = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navOverlay = document.querySelector(".nav-overlay");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;
navButton.addEventListener("click", openMenu);
navOverlay.addEventListener("click", openMenu);
navItem.forEach(item => {
    item.addEventListener("click", openMenu)
})

function openMenu () {
    if(!showMenu) {
        navButton.classList.add("close");
        navList.classList.add("show");
        navOverlay.classList.add("show");
        navItem.forEach(item => {
            item.classList.add("show");
        });
        // document.body.classList.add("no-scroll");
        showMenu = true;
    }else {
        navButton.classList.remove("close");
        navList.classList.remove("show");
        navButton.classList.remove("show");
        navOverlay.classList.remove("show");
        navItem.forEach(item => {
            item.classList.remove("show");
        });
        // document.body.classList.remove("no-scroll");
        showMenu = false;
    }
}




// ========================= Frequently Asked Questions =======================
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var parent = this.parentElement;
    var panel = this.nextElementSibling;
    var mainPanel = document.querySelector(".main-panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // panel.style.border = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      parent.style.maxHeight =
        parseInt(parent.style.maxHeight) + panel.scrollHeight + "px";
    }
  });
}