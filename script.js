document.addEventListener("DOMContentLoaded", () => {
    // Select modal components
    const projectModal = document.getElementById("projectModal");
    const openModalBtn = document.querySelector(".open-modal-btn");
    const closeModalBtn = document.querySelector(".close-btn");
    const contactForm = document.getElementById("contactForm");

    // Modal Trigger Logic
    if (openModalBtn && projectModal) {
        openModalBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Default hyper-anchor jumping block
            projectModal.classList.add("open");
            document.body.style.overflow = "hidden"; // Desktop/Mobile body lock
        });
    }

    // Modal Dismiss Icon Logic
    if (closeModalBtn && projectModal) {
        closeModalBtn.addEventListener("click", () => {
            projectModal.classList.remove("open");
            document.body.style.overflow = "auto"; // Unlock scroll UI
        });
    }

    // Overlay Clicking Dismiss Logic
    window.addEventListener("click", (event) => {
        if (event.target === projectModal) {
            projectModal.classList.remove("open");
            document.body.style.overflow = "auto";
        }
    });

    // Native Submission Visual Logic
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you! Your submission has been captured successfully.");
            contactForm.reset();
        });
    }
});
