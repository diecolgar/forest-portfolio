
// General
const body = document.querySelector("body")
const navigation = document.querySelector("nav")

// Navigation
const clicker_menu = document.querySelector(".clicker-menu")
const icons = document.querySelectorAll(".icon")

// Images
const backgroundimage = document.querySelector(".backgroundimage");
const titleimage = document.querySelector(".titleimage");
const firstseparator = document.querySelector(".firstseparator");
const secondseparator = document.querySelector(".secondseparator");

// Section Items
const section_item = document.querySelectorAll(".section-item");
const section = document.querySelector("section");

// Media query
var mediaqueryList = window.matchMedia("(max-width: 700px)");


// SCROLLING EVENT LISTENER
window.addEventListener('scroll', () => {

        let scroll = window.pageYOffset;
        let screen_height = screen.height;
        let normalized_scroll = scroll/screen_height;

        // Position Modifications
        titleimage.style.transform = `translateY( ${normalized_scroll*10}vh)`;
        firstseparator.style.transform = `translateY( ${normalized_scroll*50}vh)`;
        backgroundimage.style.transform = `translate(0, ${scroll*0.8}px)`;
        section_item.forEach((section_item, index) => {
            section_item.style.transform =  `translateY(${normalized_scroll*10}vh)`;
        })

        // Opacity Modifications
        if(titleimage.getBoundingClientRect().bottom < 100){
            navigation.style.opacity = 1
        } else {
            navigation.style.opacity = 0     
        }

        titleimage.style.opacity =  1 - scroll*0.002;

        section_item.forEach(section_item => {
            if(mediaqueryList.matches) {
                section_item.style.opacity = -0.7 + normalized_scroll*2;
                backgroundimage.style.display = 'none';
                body.classList.add("bodybackground");
              } else {
                section_item.style.opacity =  -1 + normalized_scroll*2;
              }
        })

    });

    // CLICKING EVENT LISTENERS
    clicker_menu.addEventListener('click', () => {
        icons.forEach((icons,id) => {
            icons.classList.toggle("hidden")
            clicker_menu.classList.toggle("open")
            // icons.style.transition = `${1.5-id/2}s`
            icons.style.transition = `${0.2+id/2}s`
        })
    })