// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('#mobileNav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
        });
    });
}

// FAQ Toggle Functionality
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const faqContent = faqItem.querySelector('.faq-content');
        const icon = this.querySelector('i');

        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-content').classList.remove('show');
            }
        });

        // Toggle current FAQ
        faqItem.classList.toggle('active');
        faqContent.classList.toggle('show');
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all required fields', 'error');
            return;
        }

        // Simulate form submission
        showFormMessage('✓ Message sent successfully! We will get back to you soon.', 'success');

        // Clear form
        contactForm.reset();

        // In a real application, you would send this data to a backend server
        console.log({
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        });
    });
}

// Show Form Message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.classList.remove('hidden');
    
    if (type === 'success') {
        formMessage.className = 'p-4 rounded-lg bg-green-900 border border-green-500 text-green-300';
    } else {
        formMessage.className = 'p-4 rounded-lg bg-red-900 border border-red-500 text-red-300';
    }

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
}

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTop';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add Scroll Animation to Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, service cards, and pricing cards
document.querySelectorAll('.feature-card, .service-card, .pricing-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Auto-close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileNav.classList.add('hidden');
    }
});

// Prevent body scroll when mobile menu is open
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            document.body.style.overflow = mobileNav.classList.contains('hidden') ? 'auto' : 'hidden';
        });
    }
});

// Console message
console.log('%c Welcome to Mobile Healthcare! ', 'background: linear-gradient(to right, #ec4899, #a855f7, #06b6d4); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px;');