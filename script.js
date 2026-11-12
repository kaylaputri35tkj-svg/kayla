// ===================================================
// Interactive JavaScript Engine - Kayla Mahira Putri
// Single Page Application (SPA) Navigation & Features
// ===================================================

// Global function to switch pages dynamically via JavaScript
function navigateTo(pageId) {
  // 1. Hide all page sections
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => sec.classList.remove('active'));

  // 2. Activate target section
  const targetSection = document.getElementById(`section-${pageId}`);
  if (targetSection) {
    targetSection.classList.add('active');
  } else {
    const defaultSection = document.getElementById('section-beranda');
    if (defaultSection) defaultSection.classList.add('active');
    pageId = 'beranda';
  }

  // 3. Update active nav button
  const navButtons = document.querySelectorAll('[data-page-target]');
  navButtons.forEach(btn => {
    if (btn.getAttribute('data-page-target') === pageId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 4. Update browser history hash without reloading
  if (window.location.hash !== `#${pageId}`) {
    history.pushState(null, null, `#${pageId}`);
  }

  // 5. Smooth scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 6. Close mobile menu if open
  const navLinks = document.querySelector('.nav-links');
  if (navLinks && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
  }
}

// Copy Instagram handle to clipboard
function copyInstagramHandle(event) {
  if (event) event.preventDefault();
  const handle = '@straarr_';
  navigator.clipboard.writeText(handle).then(() => {
    showToast('Username Instagram @straarr_ berhasil disalin! 🐾');
    playGentleChime();
  }).catch(() => {
    showToast('Instagram: @straarr_');
  });
}

// Show Toast Notification
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Playful Web Audio API Chime (100% pure JS, zero external files)
function playGentleChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    // Gentle melodic frequency
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.12); // E5

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch (e) {
    // Audio context not allowed or unsupported - ignore silently
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // A. Setup Navigation Buttons
  const navButtons = document.querySelectorAll('[data-page-target]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const page = btn.getAttribute('data-page-target');
      navigateTo(page);
    });
  });

  // B. Handle Browser Hash Navigation (#beranda, #profil, #kontak)
  function handleHash() {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash === 'profil' || hash === 'kontak' || hash === 'beranda') {
      navigateTo(hash);
    } else {
      navigateTo('beranda');
    }
  }

  window.addEventListener('hashchange', handleHash);
  handleHash(); // Run on initial load

  // C. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });
  }

  // D. Interactive Cat Corner Mascot
  const catBuddyBtn = document.querySelector('.buddy-cat-btn');
  const buddyBubble = document.querySelector('.buddy-bubble');

  const catQuotes = [
    "Meow! Selamat datang di website Kayla~ 🐱",
    "Semangat belajar Teknik Komputer & Jaringan! 💻",
    "Salam hangat dari SMK Telkom Malang! ✨",
    "Purrr~ Cek hobi menggambar & musikku ya! 🎨",
    "Robotik itu asyik dan penuh logika cerdas! 🤖",
    "Instagram Kayla: @straarr_ 🐾"
  ];

  let quoteIndex = 0;

  if (catBuddyBtn && buddyBubble) {
    catBuddyBtn.addEventListener('click', () => {
      quoteIndex = (quoteIndex + 1) % catQuotes.length;
      buddyBubble.textContent = catQuotes[quoteIndex];
      
      const parent = catBuddyBtn.parentElement;
      parent.classList.add('active');

      // Audio effect
      playGentleChime();

      // Bouncy rotation
      catBuddyBtn.style.transform = 'scale(1.25) rotate(18deg)';
      setTimeout(() => {
        catBuddyBtn.style.transform = '';
      }, 280);

      // Floating paw animation
      createFloatingPaw(catBuddyBtn);
    });
  }

  // E. Floating Paw Animation
  function createFloatingPaw(element) {
    const rect = element.getBoundingClientRect();
    const paw = document.createElement('div');
    paw.innerHTML = '🐾';
    paw.style.position = 'fixed';
    paw.style.left = `${rect.left + rect.width / 2 - 12}px`;
    paw.style.top = `${rect.top}px`;
    paw.style.fontSize = '22px';
    paw.style.pointerEvents = 'none';
    paw.style.zIndex = '9999';
    paw.style.transition = 'all 0.8s ease-out';
    paw.style.opacity = '1';
    paw.style.transform = 'translateY(0) scale(1)';

    document.body.appendChild(paw);

    setTimeout(() => {
      paw.style.transform = 'translateY(-45px) scale(1.4)';
      paw.style.opacity = '0';
    }, 20);

    setTimeout(() => {
      paw.remove();
    }, 850);
  }
});
