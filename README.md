# Prajapati Yash Arunbhai — Premium 3D Full Stack Developer Portfolio

A modern, high-end 3D developer portfolio website built for **Prajapati Yash Arunbhai**, Full Stack Developer based in Himmatnagar, Gujarat, India.

Designed with a **Dark Futuristic Luxury** aesthetic, interactive **Three.js 3D developer environment**, dynamic project showcases, client-side validation, sound synthesis, and mobile-first responsiveness.

---

## 🚀 Live Demo & Highlights

- **Candidate**: Prajapati Yash Arunbhai
- **Professional Title**: Full Stack Developer
- **Experience**: Fresher (Open to Full Stack Developer Opportunities)
- **Education**: BCA — Bachelor of Computer Applications (Semester 5)
- **Location**: Himmatnagar, Gujarat, India
- **Email**: [pyash7571@gmail.com](mailto:pyash7571@gmail.com)
- **Phone**: [+91 9023433407](tel:+919023433407)
- **WhatsApp**: [+91 9023433407](https://wa.me/919023433407)

### Verified Production Projects
1. **JOB PORTAL / CareerHub**
   - **Live Production URL**: [https://careerhub-yash.onrender.com](https://careerhub-yash.onrender.com)
   - **Stack**: Python, Django, JavaScript, PostgreSQL, Render
   - **Features**: Role-based candidate & recruiter workflows, dynamic job filtering, relational schema design, live cloud hosting.

2. **E-SHOPPING / E-Commerce**
   - **Live Production URL**: [https://yash-eshopping.onrender.com](https://yash-eshopping.onrender.com)
   - **Stack**: Python, Django, JavaScript, MySQL, Render
   - **Features**: Structured product catalog, category navigation, shopping cart state management, user authentication.

---

## 🎨 Key Features & Architecture

- **Interactive 3D Hero Workspace (Three.js)**:
  - 3D futuristic holographic laptop displaying live Python/Django code syntax.
  - Floating holographic terminal and PostgreSQL database query panels.
  - Orbiting wireframe polyhedra, database cylinder symbol, and neon torus.
  - Interactive mouse-follow parallax with smooth lerp physics.
  - 350+ glowing cyber particles drifting in 3D space.
  - **Graceful Fallback**: Displays an isometric 2D/3D card if WebGL is unavailable.

- **Initial Terminal Boot Loader**:
  - Futuristic terminal-style boot sequence showing system diagnostics.
  - Quick "Skip Boot" button and auto-completion in ~1.2s.
  - Session-persisted (runs once per browser session).

- **Command Palette (`Ctrl + K` / `Cmd + K`)**:
  - Recruiter-focused quick action center.
  - Instant search for projects, live demos, skills, contact, theme toggle, and resume download.

- **3D Tilt Interactive Cards**:
  - Dynamic cursor-following 3D perspective tilt on project cards and skill cards.
  - Modern glassmorphism with subtle gradient borders and soft shadows.

- **Dual Theme Support (Dark Futuristic & Luxury Light)**:
  - Default: Dark Futuristic Obsidian with Electric Cyan & Purple neon accents.
  - Light Mode: Clean slate with high contrast typography.
  - Persisted across visits via `localStorage`.

- **Web Audio API Sound Synthesizer**:
  - Optional futuristic audio feedback generated in real time with zero external audio assets.
  - Full mute/unmute control saved in `localStorage`.

- **Comprehensive SEO & Accessibility**:
  - Open Graph & Twitter Card metadata with preview graphics.
  - Google Structured Data JSON-LD (`Person` schema).
  - WCAG 2.1 AA contrast compliance, keyboard navigation, and semantic HTML5.
  - `robots.txt` and `sitemap.xml` included.

---

## 📁 Project Directory Structure

```
d:\Portfolio/
├── index.html                   # Main semantic HTML5 document
├── robots.txt                   # Search engine crawl directives
├── sitemap.xml                  # XML sitemap for SEO indexing
├── README.md                    # Project documentation & guide
│
├── css/
│   ├── style.css                # Design system, glassmorphism, responsive grid
│   └── animations.css           # Keyframes, hover glows, and accessibility overrides
│
├── js/
│   ├── config.js                # Centralized portfolio data (easy customization)
│   ├── three-scene.js           # Three.js 3D interactive developer workspace
│   ├── audio.js                 # Web Audio API sound synthesizer
│   └── main.js                  # UI interactions, modals, tilt, command palette, validation
│
└── assets/
    ├── icons/
    │   ├── favicon.svg          # Modern tech monogram favicon
    │   └── tech/                # 15 crisp SVG technology icons
    │       ├── python.svg, django.svg, javascript.svg, html5.svg, css3.svg,
    │       ├── jquery.svg, mysql.svg, postgresql.svg, mongodb.svg,
    │       └── git.svg, github.svg, vscode.svg, restapi.svg, cloudinary.svg, render.svg
    ├── images/
    │   ├── og-preview.svg       # Social media sharing preview card
    │   ├── careerhub-mockup.svg # High-res dark UI mockup for CareerHub
    │   └── eshopping-mockup.svg # High-res dark UI mockup for E-Shopping
    └── docs/
        ├── resume.pdf           # Resume PDF file
        └── README_RESUME.txt    # Instructions on updating resume.pdf
```

---

## 💻 How to Run Locally

You can run this project locally using any static web server or simply double-click `index.html`:

### Option A: Using Python (Recommended)
```bash
# In the portfolio directory (d:\Portfolio):
python -m http.server 3000
```
Open your browser at: `http://localhost:3000`

### Option B: Using Node.js (npx serve)
```bash
npx serve .
```

### Option C: Using VS Code Live Server
Right-click on `index.html` and select **"Open with Live Server"**.

---

## ⚙️ How to Customize

All primary information is configured in `js/config.js` and `index.html`:

1. **Adding Your Real GitHub / LinkedIn URLs**:
   Open `js/config.js` and update:
   ```javascript
   links: {
     github: "https://github.com/your-real-username",
     linkedin: "https://linkedin.com/in/your-real-username"
   }
   ```

2. **Updating Your College / University Name**:
   In `js/config.js` or `index.html`, locate the Education section and replace `"BCA Institution / University"` with your actual institution name.

3. **Updating Your Resume PDF**:
   Simply place your new resume PDF file at:
   `assets/docs/resume.pdf`
   The website will automatically serve it when visitors click **"Download Resume"**.

4. **Connecting the Contact Form to Email**:
   - Currently, the form validates all fields and opens the visitor's email client directly with the message pre-filled to `pyash7571@gmail.com`.
   - To send via [Formspree](https://formspree.io):
     Add `action="https://formspree.io/f/YOUR_FORM_ID"` and `method="POST"` to `<form id="contact-form">` in `index.html`.

---

## 🌐 Deployment Instructions

### Deploy to Render (Static Site)
1. Push this folder to a GitHub repository.
2. In [Render Dashboard](https://dashboard.render.com), click **New +** > **Static Site**.
3. Connect your repository, set the publish directory to `./` (root), and click **Deploy**.

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
Drag and drop the `d:\Portfolio` folder directly onto [Netlify Drop](https://app.netlify.com/drop).

---

## 🛡️ License & Copyright

© 2026 Prajapati Yash Arunbhai. All Rights Reserved.
Built for professional software engineering employment applications.
