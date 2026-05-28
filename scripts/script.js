// Main image wheel
let index = 0;
const bannerImages = document.getElementsByClassName("hero-image");
const titleBanner = document.getElementById("title-banner");
const imageHeight = bannerImages[0].offsetHeight;

window.addEventListener('load', () => {
    setTimeout(() => changeImage(1), 4000);
});

function changeImage(nextIndex) {
    const stickyStart = imageHeight - window.innerHeight;

    if (window.scrollY >= stickyStart) {
        setTimeout(() => changeImage(index), 7000);
        return;
    }
    
    bannerImages[index].classList.remove("showing");
    index = nextIndex;

    bannerImages[index].classList.add("showing");

    setTimeout(() => changeImage((index + 1) % 5), 7000);
}


// Scroll transition
const firstSectionContent = document.getElementById("first-section-content");
const mainTitle = document.getElementById('main-title');
const secondTitle = document.getElementById("second-title");
const header = document.getElementById("main-header");

function easeInOutQuart(x) {
return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

document.addEventListener("scroll", () => {
    const stickyStart = imageHeight - window.innerHeight;
    const stickyEnd = stickyStart + 9 * window.outerHeight / 10;

    if (window.scrollY >= stickyStart && window.scrollY <= stickyEnd) {
        mainTitle.classList.add("vanish");
        secondTitle.classList.add("vanish");
        header.classList.add("opaque");

        const scrollPercentage = (scrollY - stickyStart) / (stickyEnd - stickyStart);
        firstSectionContent.style.flex = 2 * easeInOutQuart(scrollPercentage);
        
    } else if (window.scrollY >= stickyEnd) {
        firstSectionContent.style.flex = 2;
        secondTitle.classList.remove("vanish");
    } else {
        firstSectionContent.style.flex = 0;
        mainTitle.classList.remove('vanish');
        header.classList.remove("opaque");
    }
});