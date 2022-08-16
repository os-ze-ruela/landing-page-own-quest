// const toggle = document.querySelector(".toggle");
// const menu = document.querySelector(".menu");

// /* Toggle mobile menu */
// function toggleMenu() {
//     if (menu.classList.contains("active")) {
//         menu.classList.remove("active");

//         // adds the menu (hamburger) icon
//         toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
//     } else {
//         menu.classList.add("active");

//         // adds the close (x) icon
//         toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
//     }
// }

// /* Event Listener */
// toggle.addEventListener("click", toggleMenu, false);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        //  else {
            // reveals[i].classList.remove("active");
        // }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();