
// Hover Animation with GSAP
document.querySelectorAll(".sidebar ul li").forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item, { scale: 1.07, duration: 0.5 });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(item, { scale: 1, duration: 0.2 });
    });
});