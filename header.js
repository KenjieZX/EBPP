let prevScrollPos = window.pageYOffset;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    const scrollDiff = prevScrollPos - currentScrollPos;


    if (scrollDiff > 5 && currentScrollPos > 50) {
      header.classList.add("visible");
      header.classList.remove("hidden");
    } else if (scrollDiff < -5) {
      header.classList.remove("visible");
      header.classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
});
    
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});