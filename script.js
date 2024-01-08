const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", () => {
    preloader.classList.add("remove");
})





// // addevent on multiple Elements

const addEventOnElements = function(elements, callback){
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener("click", callback)
    }
}



const navbar=document.querySelector("[data-navbar]");
const navTogglers=document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelector("[data-overlay]");

const togglenav= function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}



addEventOnElements(navTogglers, togglenav);



// header 

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 100 ? "add": "remove" ]("active");

})

// click
