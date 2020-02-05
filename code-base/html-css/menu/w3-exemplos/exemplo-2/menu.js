let menuItems = document.querySelectorAll("li.has-submenu");
let timer = null;

function closeMenu() {
  if(document.querySelector(".has-submenu.open")) {
    document.querySelector(".has-submenu.open > a").setAttribute('aria-expanded', "false");
    document.querySelector(".has-submenu.open").className = "has-submenu";
  }
}

menuItems.forEach(function(menuItem, index) {
  menuItem.addEventListener("mouseover", function(event) {
    closeMenu();
    this.className = this.className + ' open';
    this.querySelector('a').setAttribute('aria-expanded', "true");
    clearTimeout(timer);
  });

  menuItem.addEventListener("mouseout", function(event) {
    timer = setTimeout(function(event) {
      closeMenu();
    }, 1000);
  });

  menuItem.querySelector('a').addEventListener("click",  function(event) {
    let menuItemLink = this;

    menuItems.forEach(function(menuItemAux, index) {
      if(menuItemAux != menuItemLink.parentNode) {
        menuItemAux.className = menuItemAux.className.replace(' open', '');
        menuItemAux.querySelector('a').setAttribute('aria-expanded', "false");
      }
    })

    if (menuItemLink.parentNode.className == "has-submenu") {
      menuItemLink.parentNode.className = menuItemLink.parentNode.className + ' open';
      menuItemLink.setAttribute('aria-expanded', "true");
    } else {
      menuItemLink.parentNode.className = "has-submenu";
      menuItemLink.setAttribute('aria-expanded', "false");
    }

    event.preventDefault();
    return false;
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
