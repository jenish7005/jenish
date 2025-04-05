
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");

    function checkScroll() {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load in case already in view
}); 