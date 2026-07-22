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

    // EmailJS Contact Form Logic
    if (contactForm) {
        emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
                .then(() => {
                    alert("Thank you! Your message has been sent successfully.");
                    contactForm.reset();
                }, (error) => {
                    console.error('EmailJS error:', error);
                    alert("Something went wrong while sending the message. Please try again later.");
                });
        });
    }
});
