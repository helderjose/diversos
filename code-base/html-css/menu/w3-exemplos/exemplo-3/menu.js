let menuItems = document.querySelectorAll("li.has-submenu");
let timer = null;

function closeMenu() {
  if(document.querySelector(".has-submenu.open")) {
    document.querySelector(".has-submenu.open > a").setAttribute('aria-expanded', "false");

    if(document.querySelector('.has-submenu.open > button')) {
      document.querySelector('.has-submenu.open > button').setAttribute('aria-expanded', "false");
    }

    document.querySelector(".has-submenu.open").className = "has-submenu";
  }
}

menuItems.forEach(function(menuItem, index) {
  menuItem.addEventListener("mouseover", function(event) {
    console.log('mouseover ', menuItem)
    console.log('this ', this)  // this é o menuItem
    closeMenu();
    this.className = this.className + ' open';
    this.querySelector('a').setAttribute('aria-expanded', "true");
    if(this.querySelector('button')) {
      this.querySelector('button').setAttribute('aria-expanded', "true");
    }

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

    if(menuItemLink.className !== 'has-link') {
      event.preventDefault();
      return false;
    }

  });

  // coloca o button no menu
  // var activatingA = menuItem.querySelector('a.has-link');
  // var btn = null;

  // if(activatingA) {
  //   btn = '<button><span><span class="visuallyhidden">show submenu for “' + activatingA.text + '”</span></span></button>';
  //   activatingA.insertAdjacentHTML('afterend', btn);

  //   menuItem.querySelector('button').addEventListener("click",  function(event){
  //     if (this.parentNode.className == "has-submenu") {
  //       this.parentNode.className = "has-submenu open";
  //       this.parentNode.querySelector('a').setAttribute('aria-expanded', "true");
  //       this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
  //     } else {
  //       this.parentNode.className = "has-submenu";
  //       this.parentNode.querySelector('a').setAttribute('aria-expanded', "false");
  //       this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
  //     }
  //     event.preventDefault();
  //   });
  // }



  if(menuItem.querySelector('button')) {
  //   btn = '<button><span><span class="visuallyhidden">show submenu for “' + activatingA.text + '”</span></span></button>';
  //   activatingA.insertAdjacentHTML('afterend', btn);

    menuItem.querySelector('button').addEventListener("click",  function(event){
      if (this.parentNode.className == "has-submenu") {
        this.parentNode.className = "has-submenu open";
        this.parentNode.querySelector('a').setAttribute('aria-expanded', "true");
        this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
      } else {
        this.parentNode.className = "has-submenu";
        this.parentNode.querySelector('a').setAttribute('aria-expanded', "false");
        this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
      }
      event.preventDefault();
    });
  }




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
