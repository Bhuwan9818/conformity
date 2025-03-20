document.addEventListener("DOMContentLoaded", function () {
    // const sidebar = document.querySelector(".sidebar");
    // const toggleBtn = document.querySelector(".sidebar-toggle");
    // const darkModeBtn = document.querySelector(".dark-mode-toggle");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // // Toggle Sidebar Visibility
    // toggleBtn.addEventListener("click", function () {
    //     sidebar.classList.toggle("active");
    //     toggleBtn.innerHTML = sidebar.classList.contains("active") ? "✖ Close Sidebar" : "☰ Open Sidebar";
    // });

    // Dark Mode Toggle
    // darkModeBtn.addEventListener("click", function () {
    //     document.body.classList.toggle("dark-mode");
    //     darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
    // });

    // Dropdown Toggle
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                gsap.to(dropdownContent, { height: 0, duration: 0.3 });
                setTimeout(() => dropdownContent.style.display = "none", 300);
            } else {
                dropdownContent.style.display = "block";
                gsap.fromTo(dropdownContent, { height: 0 }, { height: "auto", duration: 0.3 });
            }
        });
    });
});