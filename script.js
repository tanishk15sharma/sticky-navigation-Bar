const nav = document.querySelector("#main")



function fixNav() {
    const topOfNav = nav.offsetTop;         //distance of top from nav
    const distNav = window.scrollY          // Distance of scrolled screen
     console.log(topOfNav ,distNav );      
}

// console.log(nav);

window.addEventListener("scroll",fixNav  )