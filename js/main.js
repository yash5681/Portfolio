/**
 * ====================================================================
 * MAIN APPLICATION LOGIC & MICRO-INTERACTIONS
 * Prajapati Yash Arunbhai - Full Stack Developer Portfolio
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. THEME SWITCHER (Dark Futuristic / Clean Light) ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
    window.dispatchEvent(new CustomEvent('themechanged', { detail: { theme } }));
  }

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nowTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nowTheme);
      if (window.soundEffects) window.soundEffects.playClick();
      showToast(`Switched to ${nowTheme === 'dark' ? 'Dark Futuristic' : 'Clean Light'} theme`);
    });
  }

  // --- 2. SOUND TOGGLE BUTTON ---
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  function updateSoundIcon(enabled) {
    if (enabled) {
      document.body.classList.remove('sound-off');
      document.body.classList.add('sound-on');
    } else {
      document.body.classList.remove('sound-on');
      document.body.classList.add('sound-off');
    }
  }

  if (window.soundEffects) {
    updateSoundIcon(window.soundEffects.enabled);
  }

  if (soundToggleBtn && window.soundEffects) {
    soundToggleBtn.addEventListener('click', () => {
      const isEnabled = window.soundEffects.toggle();
      updateSoundIcon(isEnabled);
      showToast(isEnabled ? 'Sound effects enabled 🔊' : 'Sound effects muted 🔇');
    });
  }

  // --- 2B. HERO DEVELOPER WORKSPACE TABS & VISUAL MODES ---
  const heroTabBtns = document.querySelectorAll('.hero-tab-btn, .hero-mode-btn');
  const heroTabPanels = document.querySelectorAll('.hero-tab-panel');

  heroTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      if (!targetId) return;

      heroTabBtns.forEach(b => {
        if (b.getAttribute('data-tab') === targetId) {
          b.classList.add('active');
          b.setAttribute('aria-selected', 'true');
        } else {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        }
      });

      heroTabPanels.forEach(p => p.classList.remove('active'));

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      if (targetId === 'panel-3d') {
        if (typeof window.resizeHero3D === 'function') {
          window.resizeHero3D();
        }
        setTimeout(() => {
          if (typeof window.resizeHero3D === 'function') {
            window.resizeHero3D();
          }
          window.dispatchEvent(new Event('resize'));
        }, 60);
      }

      if (window.soundEffects) window.soundEffects.playClick();
    });
  });

  // Code IDE Sub-tabs
  const codeSubBtns = document.querySelectorAll('.code-subtab-btn');
  const codeSubContainers = document.querySelectorAll('.code-sub-container');

  codeSubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const subId = btn.getAttribute('data-subcode');
      codeSubBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      codeSubContainers.forEach(container => {
        if (container.id === subId) {
          container.style.display = 'block';
          container.classList.add('active');
        } else {
          container.style.display = 'none';
          container.classList.remove('active');
        }
      });

      if (window.soundEffects) window.soundEffects.playHover();
    });
  });

  // Subtle 3D Mouse Tilt on Portrait Frame
  const portraitStage = document.querySelector('.hero-portrait-stage');
  const portraitFrame = document.getElementById('hero-portrait-frame');

  if (portraitStage && portraitFrame) {
    portraitStage.addEventListener('mousemove', (e) => {
      const rect = portraitStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotY = (x / (rect.width / 2)) * 5;
      const rotX = -(y / (rect.height / 2)) * 5;
      portraitFrame.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    portraitStage.addEventListener('mouseleave', () => {
      portraitFrame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // --- 3. STICKY NAVBAR & ACTIVE SECTION HIGHLIGHTING ---
  const navbar = document.querySelector('.navbar-wrapper');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    const btt = document.getElementById('back-to-top');
    if (btt) {
      if (window.scrollY > 400) {
        btt.classList.add('visible');
      } else {
        btt.classList.remove('visible');
      }
    }
  }, { passive: true });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(sec => sectionObserver.observe(sec));

  // --- 4. MOBILE MENU ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
      if (window.soundEffects) window.soundEffects.playClick();
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // --- 5. SKILLS CATEGORY FILTERING ---
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');

      if (window.soundEffects) window.soundEffects.playClick();

      skillCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 6. PROJECT DETAIL MODAL ---
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('project-modal-close');
  const detailButtons = document.querySelectorAll('[data-project-id]');

  function openProjectModal(projectId) {
    if (!window.PORTFOLIO_CONFIG) return;
    const project = window.PORTFOLIO_CONFIG.projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-project-title').textContent = project.name;
    document.getElementById('modal-project-category').textContent = project.category;
    document.getElementById('modal-project-desc').textContent = project.description;
    document.getElementById('modal-project-notes').textContent = project.architectureNotes;
    
    const previewImg = document.getElementById('modal-project-img');
    if (previewImg) previewImg.src = project.image;

    const liveBtn = document.getElementById('modal-project-live');
    if (liveBtn) liveBtn.href = project.liveUrl;

    const highlightsList = document.getElementById('modal-project-highlights');
    if (highlightsList) {
      highlightsList.innerHTML = '';
      project.highlights.forEach(h => {
        const li = document.createElement('li');
        li.className = 'edu-focus-item';
        li.textContent = h;
        highlightsList.appendChild(li);
      });
    }

    const stackContainer = document.getElementById('modal-project-stack');
    if (stackContainer) {
      stackContainer.innerHTML = '';
      project.techStack.forEach(t => {
        const span = document.createElement('span');
        span.className = 'project-tag';
        span.innerHTML = `<img src="${t.icon}" alt="${t.name}"> ${t.name}`;
        stackContainer.appendChild(span);
      });
    }

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.soundEffects) window.soundEffects.playChime();
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('open');
      document.body.style.overflow = '';
      if (window.soundEffects) window.soundEffects.playClick();
    }
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-project-id');
      openProjectModal(pId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // --- 7. RESUME MODAL & DOWNLOAD ---
  const resumeModal = document.getElementById('resume-modal');
  const resumeCloseBtn = document.getElementById('resume-modal-close');
  const resumeButtons = document.querySelectorAll('.trigger-resume-btn');

  function openResumeModal() {
    if (resumeModal) {
      const frame = resumeModal.querySelector('.resume-viewer-frame');
      if (frame && (!frame.getAttribute('src') || frame.getAttribute('src') === '')) {
        frame.setAttribute('src', 'assets/docs/resume.pdf#view=FitH');
      }
      resumeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.soundEffects) window.soundEffects.playChime();
    }
  }

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('open');
      document.body.style.overflow = '';
      if (window.soundEffects) window.soundEffects.playClick();
    }
  }

  resumeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  // Attach toast to download buttons inside resume modal
  const resumeDownloadBtns = document.querySelectorAll('a[download*="Resume"]');
  resumeDownloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Downloading official PDF resume...', 'success');
      if (window.soundEffects) window.soundEffects.playChime();
    });
  });

  if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', closeResumeModal);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  // --- 7B. PHOTO LIGHTBOX MODAL ---
  const photoModal = document.getElementById('photo-modal');
  const photoCloseBtn = document.getElementById('photo-modal-close');
  const openPhotoBtn = document.getElementById('open-photo-modal-btn');
  const portraitFrameClick = document.getElementById('hero-portrait-frame');

  function openPhotoModal() {
    if (photoModal) {
      photoModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.soundEffects) window.soundEffects.playChime();
    }
  }

  function closePhotoModal() {
    if (photoModal) {
      photoModal.classList.remove('open');
      document.body.style.overflow = '';
      if (window.soundEffects) window.soundEffects.playClick();
    }
  }

  if (openPhotoBtn) openPhotoBtn.addEventListener('click', openPhotoModal);
  if (portraitFrameClick) portraitFrameClick.addEventListener('click', openPhotoModal);
  if (photoCloseBtn) photoCloseBtn.addEventListener('click', closePhotoModal);
  if (photoModal) {
    photoModal.addEventListener('click', (e) => {
      if (e.target === photoModal) closePhotoModal();
    });
  }

  // --- 8. COMMAND PALETTE (CTRL+K / CMD+K) ---
  const cmdOverlay = document.getElementById('cmd-palette-modal');
  const cmdInput = document.getElementById('cmd-input');
  const cmdCloseBtn = document.getElementById('cmd-close');
  const cmdOpenButtons = document.querySelectorAll('.trigger-cmd-palette');
  const cmdItems = document.querySelectorAll('.cmd-item');
  let selectedCmdIndex = 0;

  function openCmdPalette() {
    if (cmdOverlay) {
      cmdOverlay.classList.add('open');
      if (cmdInput) {
        cmdInput.value = '';
        setTimeout(() => cmdInput.focus(), 80);
      }
      document.body.style.overflow = 'hidden';
      if (window.soundEffects) window.soundEffects.playChime();
      filterCmdItems('');
    }
  }

  function closeCmdPalette() {
    if (cmdOverlay) {
      cmdOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function getVisibleCmdItems() {
    return Array.from(cmdItems).filter(item => item.style.display !== 'none');
  }

  function updateSelectedCmd(visibleItems) {
    visibleItems.forEach((item, index) => {
      if (index === selectedCmdIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function filterCmdItems(query) {
    const q = query.toLowerCase().trim();
    cmdItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(q) ? 'flex' : 'none';
      item.classList.remove('selected');
    });

    selectedCmdIndex = 0;
    const visible = getVisibleCmdItems();
    if (visible.length > 0) {
      visible[0].classList.add('selected');
    }
  }

  cmdOpenButtons.forEach(btn => {
    btn.addEventListener('click', openCmdPalette);
  });

  if (cmdCloseBtn) cmdCloseBtn.addEventListener('click', closeCmdPalette);
  if (cmdOverlay) {
    cmdOverlay.addEventListener('click', (e) => {
      if (e.target === cmdOverlay) closeCmdPalette();
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      filterCmdItems(e.target.value);
    });

    cmdInput.addEventListener('keydown', (e) => {
      const visible = getVisibleCmdItems();
      if (!visible.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedCmdIndex = (selectedCmdIndex + 1) % visible.length;
        updateSelectedCmd(visible);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedCmdIndex = (selectedCmdIndex - 1 + visible.length) % visible.length;
        updateSelectedCmd(visible);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = visible[selectedCmdIndex];
        if (selected) {
          const action = selected.getAttribute('data-action');
          closeCmdPalette();
          executeCmdAction(action);
        }
      }
    });
  }

  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      closeCmdPalette();
      executeCmdAction(action);
    });
  });

  function executeCmdAction(action) {
    if (window.soundEffects) window.soundEffects.playClick();
    switch (action) {
      case 'goto-projects':
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'goto-skills':
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'goto-contact':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'demo-careerhub':
        window.open('https://careerhub-yash.onrender.com', '_blank', 'noopener,noreferrer');
        break;
      case 'demo-eshopping':
        window.open('https://yash-eshopping.onrender.com', '_blank', 'noopener,noreferrer');
        break;
      case 'copy-email':
        navigator.clipboard.writeText('pyash7571@gmail.com');
        showToast('Email address copied to clipboard: pyash7571@gmail.com');
        break;
      case 'call-phone':
        window.location.href = 'tel:+919023433407';
        break;
      case 'open-whatsapp':
        window.open('https://wa.me/919023433407', '_blank');
        break;
      case 'open-github':
        window.open('https://github.com/yash5681', '_blank', 'noopener,noreferrer');
        break;
      case 'open-linkedin':
        window.open('https://www.linkedin.com/in/yash-prajapati-40a936351', '_blank', 'noopener,noreferrer');
        break;
      case 'toggle-theme':
        themeToggleBtn?.click();
        break;
      case 'toggle-sound':
        if (window.soundEffects) {
          const isEnabled = window.soundEffects.toggle();
          updateSoundIcon(isEnabled);
          showToast(isEnabled ? 'Sound effects enabled 🔊' : 'Sound effects muted 🔇');
        }
        break;
      case 'download-resume':
        openResumeModal();
        break;
      default:
        break;
    }
  }

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdOverlay?.classList.contains('open')) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
    } else if (e.key === 'Escape') {
      closeCmdPalette();
      closeProjectModal();
      closeResumeModal();
      closePhotoModal();
    }
  });

  // --- 9. CONTACT FORM VALIDATION & HANDLING ---
  const contactForm = document.getElementById('contact-form');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-count');
  const templateChips = document.querySelectorAll('.template-chip');

  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      charCounter.textContent = `${messageInput.value.length} / 1000`;
    });
  }

  templateChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const subjectInput = document.getElementById('contact-subject');
      const text = chip.getAttribute('data-template');
      if (subjectInput) {
        subjectInput.value = text;
        if (window.soundEffects) window.soundEffects.playHover();
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !subject || !message) {
        showToast('Please complete all required fields.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please provide a valid email address.', 'error');
        return;
      }

      if (window.soundEffects) window.soundEffects.playChime();

      const mailtoUrl = `mailto:pyash7571@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent("Sender: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
      
      showToast('Opening your email client to send message to Yash...', 'success');
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);

      contactForm.reset();
      if (charCounter) charCounter.textContent = '0 / 1000';
    });
  }

  // --- 10. TOAST NOTIFICATION UTILITY ---
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast toast-slide';
    
    const icon = type === 'error' ? '⚠️' : type === 'success' ? '✅' : '⚡';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // --- 11. BACK TO TOP CLICK ---
  const bttBtn = document.getElementById('back-to-top');
  if (bttBtn) {
    bttBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.soundEffects) window.soundEffects.playClick();
    });
  }
});
