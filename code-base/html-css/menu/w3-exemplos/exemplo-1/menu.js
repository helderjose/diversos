let menuItems = document.querySelectorAll("li.has-submenu");
let timer = null;

function closeMenu() {
  if(document.querySelector(".has-submenu.open")) {
    document.querySelector(".has-submenu.open").className = "has-submenu";
  }
}

menuItems.forEach(function(menuItem, i) {
  menuItem.addEventListener("mouseover", function(event) {
    closeMenu();
    this.className = this.className + ' open';
    clearTimeout(timer);
  });

  menuItem.addEventListener("mouseout", function(event) {
    timer = setTimeout(function(event) {
      closeMenu();
    }, 1000);
  });
})


// código original
// var menuItems = document.querySelectorAll("li.has-submenu");

// Array.prototype.forEach.call(menuItems, function(el, i) {
//   el.addEventListener("mouseover", function(event) {
//     console.log("no mouseover")
//     this.className = "has-submenu open";
//     clearTimeout(timer);
//   });

//   el.addEventListener("mouseout", function(event) {
//     console.log("no mouseout")
//     timer = setTimeout(function(event) {
//       document.querySelector(".has-submenu.open").className = "has-submenu";
//     }, 1000);
//   });
// });
