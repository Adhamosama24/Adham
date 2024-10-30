var typed = new Typed("#text", {  // تأكد أن المعرف صحيح هنا
    strings: ["Data Analysis", "Programming", "Business Intelligence"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
