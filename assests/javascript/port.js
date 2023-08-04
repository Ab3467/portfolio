const header = document.querySelector("header");

function stickyNavbar() {
    header.classList.toggle("scrolled", window.scrollY > 0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar);


let sr = ScrollReveal({
    duration: 2500,

    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 })
sr.reveal(".showcase-image", { origin: "top", delay: 700 })












const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills circle");
let skillsInView = false; // To keep track of whether skills section is in view

window.addEventListener("scroll", () => {
    if (!skillsInView && hasReached(first_skill)) {
        skillsInView = true;
        skillsCounter();
    } else if (skillsInView && !hasReached(first_skill)) {
        skillsInView = false; // Reset the skillsInView when user scrolls away from the skills section
    }
});

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;
    if (window.innerHeight >= topPosition + el.offsetHeight / 2) return true;
    return false;
}

function updateCount(num, maxNum, currentNum) {
    if (currentNum <= maxNum) {
        num.innerText = currentNum;
        setTimeout(() => {
            updateCount(num, maxNum, currentNum + 1);
        }, 12);
    }
}

function skillsCounter() {
    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokevalue = 427 - 427 * (target / 100);
        progress_bars[i].style.setProperty("--target", strokevalue);

        updateCount(counter, target, 0); // Start the counting animation from 0
    });

    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
}




const toggle_btn = document.querySelectorAll(".toggle-btn");
let firstTheme = localStorage.getItem("dark");
changeTheme(+firstTheme);

function changeTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark");

        toggle_btn.forEach(btn => {
            btn.classList.replace("uil-moon", "uil-sun");
        });

        localStorage.setItem("dark", 1);
    } else {
        document.body.classList.remove("dark");

        toggle_btn.forEach(btn => {
            btn.classList.replace("uil-sun", "uil-moon");
        });

        localStorage.setItem("dark", 0);
    }
}

toggle_btn.forEach(btn => {
    btn.addEventListener("click", () => {
        changeTheme(!document.body.classList.contains("dark"));
    });
});




const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("open");
        document.body.classList.remove("stopScrolling");
    });
});