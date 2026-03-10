# 🌟 Personal Portfolio Website

A modern, responsive, and fully interactive personal portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases your skills, projects, and professional experience in an elegant and user-friendly interface.

![Portfolio Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Modern Design
- **Clean & Professional Layout** - Minimalist design that puts your content first
- **Smooth Animations** - Eye-catching transitions and hover effects
- **Dark/Light Theme Toggle** - User preference with persistent storage
- **Responsive Design** - Perfectly adapted for desktop, tablet, and mobile devices

### 🏠 Home Section
- Dynamic typing animation with multiple text rotations
- Animated profile image with floating effect
- Call-to-action buttons for easy navigation
- Social media links with hover effects
- Smooth scroll indicator

### 👤 About Section
- Detailed professional biography
- Interactive skill progress bars with animations
- Education timeline with comprehensive details
- Work experience cards with achievements
- Hobbies and interests showcase
- Downloadable resume (PDF format)

### 💼 Projects Section
- **6 Featured Projects** with detailed information
- Category filtering (All, Web Apps, Mobile, Design)
- Project cards with hover overlay effects
- Modal popup with detailed project information
- Technologies and tags display
- Links to live demos and source code

### 📧 Contact Section
- **Fully Validated Contact Form** with real-time feedback
- Required field validation
- Email format validation
- Character limit validation
- Success message animation
- Contact information display
- Social media links

### 🚀 Interactive Features
- Smooth scrolling navigation
- Active section highlighting in navbar
- Mobile-responsive hamburger menu
- Intersection Observer for scroll animations
- Project modal with detailed views
- Form validation with error messages
- Theme persistence across sessions

## 📁 Project Structure

```
Personal Portfolio Website/
│
├── index.html              # Main HTML file with all sections
├── styles.css              # Complete CSS with animations and responsive design
├── script.js               # JavaScript for all interactive features
├── assets/
│   └── Prarthna Sharma resume.pdf         # Sample resume (replace with yours)
│
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with:
  - CSS Variables for theming
  - Flexbox and Grid for layouts
  - Animations and transitions
  - Media queries for responsiveness
- **JavaScript (ES6+)** - Interactive features including:
  - DOM manipulation
  - Event handling
  - Form validation
  - Local storage
  - Intersection Observer API
- **Font Awesome** - Icons library
- **Google Fonts** - Poppins font family

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, Atom, etc.)
- Basic understanding of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Download or Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open the Project**
   - Simply open `index.html` in your web browser
   - Or use a local development server like Live Server in VS Code

3. **Customize Your Content**
   - Replace placeholder text with your information
   - Add your profile picture
   - Update project details
   - Replace the resume PDF with your own

## 🎨 Customization Guide

### 1. Personal Information

**In `index.html`:**

```html
<!-- Update your name in the hero section -->
<h1 class="hero-name">Your Name</h1>
<p class="hero-subtitle">Your Title/Position</p>

<!-- Update your bio -->
<p class="hero-description">Your personal description...</p>

<!-- Update social links -->
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
```

**In `script.js`:**

```javascript
// Update typing animation texts (line 145)
const texts = ['Your Name', 'Your Title', 'Your Specialty', 'Your Role'];
```

### 2. Theme Colors

**In `styles.css` (lines 7-19):**

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --secondary-color: #10b981;    /* Accent color */
    --accent-color: #f59e0b;       /* Highlight color */
}
```

### 3. Profile Picture

Replace the placeholder icon with your image:

```html
<!-- In index.html, find this section and replace: -->
<div class="profile-image-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- With: -->
<div class="profile-image-placeholder">
    <img src="your-photo.jpg" alt="Your Name">
</div>
```

Then add this CSS to make it display properly:

```css
.profile-image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

### 4. Projects

Update project information in `script.js` (lines 203-301):

```javascript
const projectData = {
    1: {
        title: 'Your Project Name',
        tags: ['Technology1', 'Technology2'],
        description: 'Detailed description...',
        features: [
            'Feature 1',
            'Feature 2',
            // Add more features
        ],
        demoUrl: 'https://your-demo-url.com',
        codeUrl: 'https://github.com/your-repo'
    }
    // Add more projects...
};
```

### 5. Skills

Update your skills in `index.html` (About section):

```html
<div class="skill-item">
    <div class="skill-header">
        <i class="fab fa-html5"></i>
        <span>HTML5</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="95"></div>
    </div>
</div>
```

Change `data-progress` value (0-100) to reflect your skill level.

### 6. Resume

Replace `assets/Prarthna Sharma resume.pdf` with your actual resume PDF file.

### 7. Contact Information

Update your contact details in `index.html`:

```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-envelope"></i>
    </div>
    <div class="contact-text">
        <h4>Email</h4>
        <p>your.email@example.com</p>
    </div>
</div>
```

## 📱 Responsive Breakpoints

The website is fully responsive with the following breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not recommended)

## 🎯 Key Features Explained

### Form Validation

The contact form includes comprehensive validation:
- **Required fields** - All fields must be filled
- **Email validation** - Must be a valid email format
- **Minimum length** - Name (2 chars), Subject (3 chars), Message (10 chars)
- **Real-time feedback** - Errors display as you type
- **Success message** - Confirmation after successful submission

### Theme Toggle

The dark/light theme toggle:
- Persists across browser sessions using localStorage
- Smooth transitions between themes
- Applies to all elements consistently
- Icon changes based on current theme

### Smooth Scrolling

Navigation links scroll smoothly to sections:
- Animated scrolling with `scroll-behavior`
- Active section highlighting
- Mobile menu closes after clicking
- Offset for fixed navbar

### Project Modal

Clicking "View Details" on any project:
- Opens a modal with detailed information
- Displays technologies, features, and links
- Can be closed by clicking X, outside, or pressing Escape
- Prevents body scroll when open

## 🚢 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Select branch (main) and folder (root)
5. Save and wait for deployment
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Sign up at [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings (none needed for static site)
5. Deploy site

### Vercel

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Configure project settings
4. Deploy

## 📝 Customization Tips

1. **Keep it Simple** - Don't overcomplicate the design
2. **Use Quality Images** - Professional photos make a difference
3. **Be Authentic** - Write in your own voice
4. **Update Regularly** - Keep projects and skills current
5. **Test Everything** - Check all links and features work
6. **Mobile First** - Always test on mobile devices
7. **Fast Loading** - Optimize images and assets
8. **SEO Friendly** - Add meta tags and descriptions

## 🐛 Troubleshooting

### Issue: Theme toggle not working
**Solution**: Clear browser cache and localStorage

### Issue: Form not validating
**Solution**: Check that all input IDs match the JavaScript

### Issue: Smooth scroll not working
**Solution**: Ensure section IDs match navigation href values

### Issue: Modal not closing
**Solution**: Check that event listeners are properly attached

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Web development documentation
- [CSS Tricks](https://css-tricks.com/) - CSS tips and tricks
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Free web fonts

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you have suggestions for improvements:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Font Awesome for the amazing icons
- Google Fonts for the beautiful typography
- The web development community for inspiration

## 📞 Support

If you have any questions or need help with customization, feel free to:
- Open an issue on GitHub
- Send an email to your.email@example.com
- Connect on LinkedIn

---

**⭐ Star this repository if you find it helpful!**

Made with ❤️ and ☕ by [Your Name]

Last Updated: January 2026
