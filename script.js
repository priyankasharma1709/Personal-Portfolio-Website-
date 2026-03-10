// ========================================
// DOM Elements
// ========================================
const navbar = document.querySelector('.navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const viewDetailsBtns = document.querySelectorAll('.btn-view-details');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

// ========================================
// Theme Toggle Functionality
// ========================================
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    themeToggle.innerHTML = newTheme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// ========================================
// Mobile Navigation Toggle
// ========================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Smooth Scrolling & Active Navigation
// ========================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation link on scroll
const sections = document.querySelectorAll('section');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ========================================
// Navbar Scroll Effect
// ========================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Typing Animation
// ========================================
const typingText = document.querySelector('.typing-text');
const texts = ['Prarthna Sharma', 'Full Stack Developer', 'AI Enthusiast', 'Multimedia Specialist', 'BCA Student'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
}

// Start typing animation
setTimeout(type, 1000);

// ========================================
// Skills Animation
// ========================================
const skillsSection = document.querySelector('.about-section');
let skillsAnimated = false;

function animateSkills() {
    const skillsProgress = document.querySelectorAll('.skill-progress');
    
    skillsProgress.forEach(skill => {
        const progress = skill.getAttribute('data-progress');
        skill.style.width = progress + '%';
    });
}

function checkSkillsScroll() {
    if (skillsAnimated) return;
    
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.clientHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (scrollPosition > skillsSectionTop + skillsSectionHeight / 3) {
        animateSkills();
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', checkSkillsScroll);

// ========================================
// Projects Filter
// ========================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                // Trigger animation
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s ease';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ========================================
// Project Modal
// ========================================
const projectData = {
    1: {
        title: '24/7 Message Hut',
        tags: ['Node.js', 'Express.js', 'MySQL', 'WebSocket', 'WebRTC', 'JWT'],
        description: 'A comprehensive real-time communication platform designed to facilitate seamless interaction across multiple devices and communication modalities. The system integrates text messaging, multimedia sharing, video calling, and social connectivity features within a responsive, security-focused architecture. Built on a Node.js/Express.js backend with MySQL database integration, the platform leverages WebSocket technology for real-time message delivery, WebRTC for peer-to-peer video communication, and Cloudinary services for optimized media management.',
        features: [
            'Real-time text messaging with WebSocket technology',
            'Video calling using WebRTC peer-to-peer communication',
            'Multimedia sharing with Cloudinary integration',
            'JWT-based authentication and authorization',
            'MySQL database for data persistence',
            'Responsive design for all devices',
            'Security-focused architecture with data validation',
            'Modular design for maintainability and scalability'
        ],
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com'
    },
    2: {
        title: 'Astra AI Model',
        tags: ['Python', 'Artificial Intelligence', 'Machine Learning', 'API', 'Automation'],
        description: 'An advanced AI model capable of video editing, coding assistance, and instant internet search capabilities. This innovative project combines multiple AI technologies to create an intelligent assistant that can automate complex tasks. The model uses machine learning algorithms for video processing, natural language processing for coding assistance, and web scraping technologies for real-time internet data retrieval.',
        features: [
            'Automated video editing with AI algorithms',
            'Intelligent coding assistance and code generation',
            'Real-time internet search and data retrieval',
            'Natural language processing capabilities',
            'Machine learning for intelligent automation',
            'API integration for extended functionality',
            'Content generation and optimization',
            'Multi-tasking processing capabilities'
        ],
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com'
    },
    3: {
        title: 'Fitness Tracker',
        tags: ['React Native', 'Redux', 'Node.js', 'API'],
        description: 'A cross-platform mobile application for tracking fitness activities, nutrition, and health metrics. Built with React Native for iOS and Android, featuring integration with health APIs, personalized workout recommendations, and social features to connect with friends and share achievements.',
        features: [
            'Workout tracking with exercise library',
            'Nutrition logging and calorie counter',
            'Progress charts and statistics',
            'Personalized workout plans',
            'Integration with device health APIs',
            'Social features and challenges',
            'Achievement badges and milestones',
            'Offline mode support'
        ],
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com'
    },
    4: {
        title: 'Personal Blog Platform',
        tags: ['Next.js', 'Markdown', 'Tailwind CSS', 'SEO'],
        description: 'A modern, SEO-optimized blog platform built with Next.js and Tailwind CSS. Features server-side rendering for optimal performance, markdown support for easy content creation, syntax highlighting for code snippets, and comprehensive SEO features. The blog includes a content management system and supports multiple authors.',
        features: [
            'Server-side rendering with Next.js',
            'Markdown support for content creation',
            'Syntax highlighting for code blocks',
            'SEO optimization and meta tags',
            'Responsive design with Tailwind CSS',
            'Dark/Light theme support',
            'Category and tag organization',
            'Search functionality'
        ],
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com'
    },
    5: {
        title: 'Design System',
        tags: ['UI/UX', 'Figma', 'Components', 'Guidelines'],
        description: 'A comprehensive design system created in Figma for consistent UI/UX across multiple projects. Includes a complete component library, color schemes, typography guidelines, spacing rules, and interactive prototypes. The system promotes design consistency and speeds up development with reusable components.',
        features: [
            'Comprehensive component library',
            'Color palette and theming system',
            'Typography scale and guidelines',
            'Spacing and layout principles',
            'Icon library and illustrations',
            'Interactive prototypes',
            'Documentation and usage guidelines',
            'Accessibility standards'
        ],
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com'
    },
    6: {
        title: 'Data Visualization Dashboard',
        tags: ['D3.js', 'Python', 'Flask', 'PostgreSQL'],
        description: 'An interactive data visualization dashboard for analyzing and presenting complex datasets. Built with D3.js for rich visualizations and Flask for the backend API. Features real-time data updates, multiple chart types, customizable filters, and the ability to export visualizations and reports.',
        features: [
            'Interactive charts with D3.js',
            'Real-time data updates',
            'Multiple visualization types',
            'Customizable filters and parameters',
            'Data export functionality',
            'Responsive and mobile-friendly',
            'User preferences and saved views',
            'RESTful API for data access'
        ],
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com'
    }
};

viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            // Update modal content
            document.querySelector('.modal-title').textContent = project.title;
            document.querySelector('.modal-description').textContent = project.description;
            
            // Update tags
            const tagsContainer = document.querySelector('.modal-tags');
            tagsContainer.innerHTML = project.tags.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
            
            // Update features
            const featuresList = document.querySelector('.modal-features ul');
            featuresList.innerHTML = project.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');
            
            // Update links
            const modalButtons = document.querySelectorAll('.modal-buttons a');
            modalButtons[0].href = project.demoUrl;
            modalButtons[1].href = project.codeUrl;
            
            // Show modal
            projectModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});

modalClose.addEventListener('click', () => {
    projectModal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('show')) {
        projectModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// ========================================
// EmailJS Configuration
// ========================================
// Initialize EmailJS with your public key
// Get your keys from https://www.emailjs.com/
(function() {
    emailjs.init({
        publicKey: "_1J7G7ugRNwV3kh-m", // Replace with your EmailJS public key
    });
})();

// ========================================
// Form Validation & Submission
// ========================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Reset error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
    
    // Validation
    let isValid = true;
    
    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Subject validation
    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required';
        isValid = false;
    } else if (subject.length < 3) {
        document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters';
        isValid = false;
    }
    
    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    // If form is valid, send email
    if (isValid) {
        // Disable submit button and show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.querySelector('.btn-text').textContent;
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').textContent = 'Sending...';
        
        // Send email using EmailJS
        emailjs.send(
            'service_jtgqpjo',  // Replace with your EmailJS service ID
            'template_g65dnze', // Replace with your EmailJS template ID
            {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_name: 'Prarthna Sharma', // Your name
            }
        )
        .then(() => {
            console.log('Email sent successfully!');
            
            // Show success message
            formSuccess.classList.add('show');
            contactForm.style.display = 'none';
            
            // Reset form after 5 seconds
            setTimeout(() => {
                formSuccess.classList.remove('show');
                contactForm.style.display = 'block';
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').textContent = originalBtnText;
            }, 5000);
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            
            // Show error message
            alert('Failed to send message. Please try again or contact me directly at your.email@example.com');
            
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-text').textContent = originalBtnText;
        });
    }
});

// Real-time validation
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(input) {
    const errorElement = document.getElementById(`${input.id}Error`);
    const value = input.value.trim();
    
    errorElement.textContent = '';
    input.classList.remove('error');
    
    switch(input.id) {
        case 'name':
            if (value === '') {
                errorElement.textContent = 'Name is required';
                input.classList.add('error');
            } else if (value.length < 2) {
                errorElement.textContent = 'Name must be at least 2 characters';
                input.classList.add('error');
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value === '') {
                errorElement.textContent = 'Email is required';
                input.classList.add('error');
            } else if (!emailRegex.test(value)) {
                errorElement.textContent = 'Please enter a valid email address';
                input.classList.add('error');
            }
            break;
            
        case 'subject':
            if (value === '') {
                errorElement.textContent = 'Subject is required';
                input.classList.add('error');
            } else if (value.length < 3) {
                errorElement.textContent = 'Subject must be at least 3 characters';
                input.classList.add('error');
            }
            break;
            
        case 'message':
            if (value === '') {
                errorElement.textContent = 'Message is required';
                input.classList.add('error');
            } else if (value.length < 10) {
                errorElement.textContent = 'Message must be at least 10 characters';
                input.classList.add('error');
            }
            break;
    }
}

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ========================================
// Add Smooth Hover Effects
// ========================================
document.querySelectorAll('.project-card, .detail-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// Performance Optimization: Lazy Loading
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// Initialize on Page Load
// ========================================
window.addEventListener('load', () => {
    // Trigger initial checks
    updateActiveNav();
    checkSkillsScroll();
    
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
});

// ========================================
// Particle Effect for Hero Section
// ========================================
function createParticles() {
    const hero = document.querySelector('.hero-section');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    hero.insertBefore(particlesContainer, hero.firstChild);
}

// Add particle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10%, 90% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// ========================================
// Add Parallax Effect to Hero Image
// ========================================
window.addEventListener('mousemove', (e) => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        heroImage.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// ========================================
// Text Reveal Animation
// ========================================
const textRevealOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const textRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, textRevealOptions);

document.querySelectorAll('.detail-card, .skill-item, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    textRevealObserver.observe(el);
});

// ========================================
// Console Message
// ========================================
console.log('%c👋 Hello Developer!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the source!', 'color: #10b981; font-size: 14px;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #f59e0b; font-size: 12px;');
