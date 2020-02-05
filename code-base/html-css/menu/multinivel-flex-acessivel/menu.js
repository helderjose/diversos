document.querySelectorAll("li.has-submenu").forEach(element => {

  // element.addEventListener('mouseover', function(event) {

  //   if(!this.className.match(/open/g)) {
  //     this.className = this.className + ' open';
  //     this.querySelector('a').setAttribute('aria-expanded', "true");

  //     if(this.querySelector('button')) {
  //       this.querySelector('button').setAttribute('aria-expanded', "true");
  //     }
  //   }
  // });

  // element.addEventListener('mouseout', function(event) {

  //   if(this.className.match(/open/g)) {
  //     this.className = 'has-submenu';
  //     this.querySelector('a').setAttribute('aria-expanded', "false");

  //     if(this.querySelector('button')) {
  //       this.querySelector('button').setAttribute('aria-expanded', "false");
  //     }
  //   }
  // });

  if(element.querySelector('button')) {
    element.querySelector('button').addEventListener('click', function(event) {
      if(this.parentNode.className.match(/open/g)) {
        this.parentNode.className = 'has-submenu';
        this.previousElementSibling.setAttribute('aria-expanded', "false");
        this.setAttribute('aria-expanded', "false");
      } else {
        this.parentNode.className = this.parentNode.className + ' open';
        this.previousElementSibling.setAttribute('aria-expanded', "true");
        this.setAttribute('aria-expanded', "true");
      }
    });
  } else {
    element.addEventListener('click', function(event) {
      // console.log('this         ', this)
      // console.clear();
      console.log('event.target ', event.target)
      console.log('--------------\n')
      // if(this.className.match(/open/g)) {
      //   this.className = 'has-submenu';
      //   this.querySelector('a').setAttribute('aria-expanded', "false");
      // } else {
        this.className = this.className + ' open';
        this.querySelector('a').setAttribute('aria-expanded', "true");
      // }
    })
  }

});

// function closeMenu() {
//   if(document.querySelector(".has-submenu.open")) {
//     document.querySelector(".has-submenu.open > a").setAttribute('aria-expanded', "false");

//     if(document.querySelector('.has-submenu.open > button')) {
//       document.querySelector('.has-submenu.open > button').setAttribute('aria-expanded', "false");
//     }

//     document.querySelector(".has-submenu.open").className = "has-submenu";
//   }
// }



// let timerCloseMenu = null;

// function toggleMenuItem(event) {
//   console.log('event ', event)
//   if(event.target.parentNode.className.match(/open/g)) {
//     closeMenu(event)
//   }else{
//     openMenu(event)
//   }
// }

// function openMenu(event) {
//   let menuItem = event.target;
  

//   clearTimeout(timerCloseMenu);
//   console.log('openMenu menuItem ', menuItem)
//   // console.log('openMenu menuItem.parentNode ', menuItem.parentNode)
//   // // console.log('openMenu event.toElement ', event.toElement)
//   // console.log('openMenu event.relatedTarget ', event.relatedTarget)
//   // console.log('this ', this)

//   if(!menuItem.parentNode.className.match(/has-submenu/g)) {
//     return false;
//   }
//   // console.log('openMenu menuItem ', menuItem)

//   menuItem.parentNode.className = "has-submenu open";

//   if(menuItem.previousElementSibling) {
//     menuItem.previousElementSibling.setAttribute('aria-expanded', "true")
//   }

//   if(menuItem.nextElementSibling && menuItem.nextElementSibling.nodeName === 'BUTTON') {
//     menuItem.nextElementSibling.setAttribute('aria-expanded', "true")
//   }

//   menuItem.setAttribute('aria-expanded', "true")

// }

// function closeMenu() {
//   if(!document.querySelector('li.has-submenu.open')) {
//     return false;
//   }

//   document.querySelector('li.has-submenu.open > a').setAttribute('aria-expanded', "false");
//   document.querySelector('li.has-submenu.open > button').setAttribute('aria-expanded', "false");
//   document.querySelector('li.has-submenu.open').className = "has-submenu";
// }

// function closeMenuTimer() {
//   timerCloseMenu = setTimeout(function() {
//     closeMenu()
//   }, 1000)
// }