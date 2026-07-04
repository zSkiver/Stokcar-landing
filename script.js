/* ============================================
   STOK CAR CENTRO AUTOMOTIVO — Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- ELEMENTS ----
  const navbar = document.getElementById('navbar');
  const heroContent = document.getElementById('heroContent');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');

  // ============================================
  // 1. HERO PARALLAX ON SCROLL (Sutil)
  // ============================================
  let ticking = false;

  function updateHeroParallax() {
    const scrollY = window.scrollY;
    if (heroContent && scrollY < 600) {
      const translateY = scrollY * 0.15;
      const opacity = 1 - (scrollY / 600);
      heroContent.style.transform = `translateY(${translateY}px)`;
      heroContent.style.opacity = Math.max(opacity, 0);
    }
    ticking = false;
  }

  // ============================================
  // 3. NAVBAR SCROLL BEHAVIOR
  // ============================================
  function updateNavbar() {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateHeroParallax();
        updateNavbar();
      });
      ticking = true;
    }
  }, { passive: true });

  // ============================================
  // 4. MOBILE MENU TOGGLE
  // ============================================
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ============================================
  // 5. SCROLL REVEAL (IntersectionObserver)
  // ============================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ============================================
  // 6. SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ============================================
  // 7. CONTACT FORM — WhatsApp Redirect
  // ============================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const vehicle = document.getElementById('vehicle').value.trim();
      const plate = document.getElementById('plate').value.trim().toUpperCase();
      const message = document.getElementById('message').value.trim();

      // Build WhatsApp message
      let whatsappMsg = `Olá! Gostaria de solicitar um orçamento.\n\n`;
      whatsappMsg += `*Nome:* ${name}\n`;
      whatsappMsg += `*Telefone:* ${phone}\n`;
      whatsappMsg += `*Serviço:* ${service}\n`;
      if (vehicle) whatsappMsg += `*Veículo:* ${vehicle}\n`;
      whatsappMsg += `*Placa:* ${plate}\n`;
      if (message) whatsappMsg += `*Mensagem:* ${message}\n`;

      const encoded = encodeURIComponent(whatsappMsg);
      window.open(`https://wa.me/5564996429684?text=${encoded}`, '_blank');
    });
  }

  const plateInput = document.getElementById('plate');
  if (plateInput) {
    plateInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.toUpperCase();
    });
  }

  // ============================================
  // 8. PHONE MASK
  // ============================================
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }

      e.target.value = value;
    });
  }
});
