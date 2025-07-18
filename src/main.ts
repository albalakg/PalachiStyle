import 'aos/dist/aos.css';
import './styles/index.css';
import AOS from 'aos';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Render components
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    ${Header}
    <main class="mt-15">
      ${Hero}
      ${Services}
      ${Gallery}
      ${Pricing}
      ${Contact}
    </main>
    ${Footer}
  `;
}

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');

if (menuBtn && menuItems) {
  menuBtn.addEventListener('click', () => {
    if (menuItems.classList.contains('hidden')) {
      menuItems.classList.remove('hidden');
      menuItems.classList.add('absolute', 'top-16', 'right-0', 'left-0', 'bg-white', 'py-4', 'menu-open');
    } else {
      menuItems.classList.add('hidden');
      menuItems.classList.remove('menu-open');
    }
  });

  // Close menu when clicking a link
  const menuLinks = document.querySelectorAll('#menuItems a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        menuItems.classList.add('hidden');
        menuItems.classList.remove('menu-open');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#menuBtn') && !target.closest('#menuItems')) {
      menuItems.classList.add('hidden');
      menuItems.classList.remove('menu-open');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

document.querySelectorAll<HTMLVideoElement>('.gallery-video').forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.pause();
  });

  video.addEventListener('mouseleave', () => {
    video.play();
  });
});
