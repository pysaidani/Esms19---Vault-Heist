// Set event date 
let target = new Date(2026, 10, 23, 10, 0).getTime(); 

function pad(n) {
    return String(n).padStart(2, "0");
}

function update() {
    const diff = target - Date.now();

    if (diff <= 0) {
        clearInterval(timer);
        document.querySelector(".countdown").textContent = "The vault is open!";
        return;
    }

    document.getElementById("days").textContent = pad(Math.floor(diff / 86400000));
    document.getElementById("hours").textContent = pad(Math.floor(diff / 3600000) % 24);
    document.getElementById("minutes").textContent = pad(Math.floor(diff / 60000) % 60);
    document.getElementById("seconds").textContent = pad(Math.floor(diff / 1000) % 60);
}

const timer = setInterval(update, 1000);
update(); 




const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navLinks a");
const menuLinks = document.querySelectorAll(".menuLinks a");

function setActive() {
    const probe = window.scrollY + window.innerHeight * 0.4;

    let currentId = sections[0].id;
    sections.forEach((section) => {
        if (section.offsetTop <= probe) {
            currentId = section.id;
        }
    });

    [...navLinks, ...menuLinks].forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });
}

window.addEventListener("scroll", setActive, { passive: true });
window.addEventListener("resize", setActive);
setActive();




const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");

function openMenu() {
    menu.classList.remove("close");
    menu.classList.add("open");
}

function closeMenu() {
    if (!menu.classList.contains("open") || menu.classList.contains("close")) return;
    menu.classList.add("close");
    menu.addEventListener("animationend", () => {
        menu.classList.remove("open", "close");
    }, { once: true });
}

menuIcon.addEventListener("click", () => {
    if (menu.classList.contains("open") && !menu.classList.contains("close")) {
        closeMenu();
    } else {
        openMenu();
    }
});

menuLinks.forEach((link) => link.addEventListener("click", closeMenu));