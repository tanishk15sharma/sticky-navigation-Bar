const nav = document.querySelector("#main")
const topOfNav = nav.offsetTop;         //distance of top from nav



function fixNav() {
    //  window.scrollY        ===  Distance of scrolled screen
     console.log(topOfNav ,window.scrollY );      

    if(  window.scrollY  >= topOfNav ){
        // console.log("match");
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
    }else{
        document.body.classList.remove("fixed-nav");
    }
}

// console.log(nav);

window.addEventListener("scroll",fixNav  )