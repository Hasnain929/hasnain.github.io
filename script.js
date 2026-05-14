document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully!");

    // 1. Smooth Scroll for links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Contact Form Alert
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! I will get back to you soon.");
            form.reset();
        });
    }

    // 3. NEW: Modal (Pop-up) Logic for Cloud Infrastructure
    const modal = document.getElementById("projectModal");
    // Doosre card (Cloud Infrastructure) ka link select karein
    const cloudBtn = document.querySelector(".project-grid .glass-card:nth-child(2) .project-link");
    const closeBtn = document.querySelector(".close-btn");

    if (cloudBtn && modal) {
        cloudBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "block";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    // Modal ke bahar click karne se band ho jaye
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // 4. Simple Animation on Scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});