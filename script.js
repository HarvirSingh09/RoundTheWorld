const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", () => {
    preloader.classList.add("remove");
})





// addevent on multiple Elements

const addeventonelements = function(elements, eventType, callback){
    for(let i=0, len= elements.length; i<len; i++){
        elements[i].addEventListener(eventType, callback)
    }
}

// navbartoggler for mobile

const navbar=document.querySelectorAll("[data-navbar]");
const navTogglers=document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelectorAll("[data-overlay]");

const togglenav= function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addeventonelements(navTogglers, "click", togglenav);



// header 

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 100 ? "add": "remove" ]("active");

})
