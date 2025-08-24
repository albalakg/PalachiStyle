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


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const messageBox = document.getElementById('formMessage')!;
    const showMessage = (msg: string, type: 'success' | 'error') => {
      const colorClasses =
        type === 'success'
          ? 'bg-green-100 text-green-800 border border-green-300'
          : 'bg-red-500 text-white border border-red-700';

      messageBox.textContent = msg;
      messageBox.className = `text-center text-sm mt-4 px-4 py-2 rounded-xl ${colorClasses} opacity-100`;

      setTimeout(() => {
        messageBox.classList.add('opacity-0');
      }, 9000);

      setTimeout(() => {
        messageBox.textContent = '';
        messageBox.className = 'text-center text-sm mt-4 px-4 py-2 rounded-xl opacity-0';
      }, 10000);
    };



    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || '';
    const phone = formData.get('phone')?.toString().trim() || '';
    const region = formData.get('region')?.toString().trim() || '';
    const notes = formData.get('notes')?.toString().trim() || '';
    const services = formData.getAll('services');

    // Validation
    if (!name || !phone.match(/^05\d([-]?\d){7}$/)) {
      showMessage('אנא הזיני שם ומספר טלפון תקין', 'error');
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const submitText = submitButton.querySelector('span');
    const submitIcon = submitButton.querySelector('i');

    // Show loading
    submitButton.disabled = true;
    submitButton.classList.add('opacity-70', 'cursor-not-allowed');
    if (submitText) submitText.textContent = 'שולח...';
    if (submitIcon) submitIcon.className = 'fas fa-spinner fa-spin';

    // Build row data for the sheet
    const requestBody = {
      name,
      phone,
      region,
      תספורת: services.includes('תספורת') ? "כן" : "לא",
      "החלקה אורגנית": services.includes('החלקה אורגנית') ? "כן" : "לא",
      "טיפול שיקום": services.includes('טיפול שיקום') ? "כן" : "לא",
      "ייעוץ והתאמה": services.includes('ייעוץ והתאמה') ? "כן" : "לא",
      "צבע / גוונים": services.includes('צבע / גוונים') ? "כן" : "לא",
      "פתיחת תלתלים": services.includes('פתיחת תלתלים') ? "כן" : "לא",
      "תסרוקת": services.includes('תסרוקת') ? "כן" : "לא",
      notes,
      date: new Date().toLocaleString('he-IL'),
      status: 'חדש'
    };

    try {
      const body = new URLSearchParams();
      Object.entries(requestBody).forEach(([key, val]) => {
        body.append(key, val.toString());
      });

      await fetch("https://script.google.com/macros/s/AKfycbwBP-HLx-zq3Pa9QoNulbxGbiyLpXPctx-WzJkT4hk-wTURLsifvbabse9zVyOVs9JTVw/exec", {
        method: 'POST',
        mode: 'no-cors', // ⛔ won't give a visible response
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      });
      
      submitButton.disabled = false;
      submitButton.classList.remove('opacity-70', 'cursor-not-allowed');
      if (submitText) submitText.textContent = 'שליחה';
      if (submitIcon) submitIcon.className = 'fas fa-paper-plane';

      showMessage('הטופס נשלח בהצלחה!', 'success');
    } catch (err) {
      console.error(err);
      showMessage('שגיאה בחיבור לשרת', 'error');
    }
  });

});
