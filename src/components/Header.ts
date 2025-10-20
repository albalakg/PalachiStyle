export const Header = `
  <header id="mainHeader" class="fixed top-0 right-0 left-0 z-50 transition-colors duration-500">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center lg:justify-center lg:gap-20">
        <div class="text-2xl font-bold text-primary-600">
          <img src="/images/gallery/logo_white.png" alt="Palachi Style Logo" class="h-12 w-auto" title="לוגו">
        </div>
        <button id="menuBtn" class="lg:hidden text-white hover:text-primary-200 transition-colors">
          <i class="fas fa-bars text-xl"></i>
        </button>
        <ul id="menuItems" class="hidden lg:flex items-center gap-5 text-white">
          <li><a href="#home" title="בית" class="hover:text-primary-500 transition-colors px-6 py-3 text-xl">בית</a></li>
          <li><a href="#services" title="שירותים" class="hover:text-primary-500 transition-colors px-6 py-3 text-xl">שירותים</a></li>
          <li><a href="#gallery" title="גלריה" class="hover:text-primary-500 transition-colors px-6 py-3 text-xl">גלריה</a></li>
          <li><a href="#pricing" title="מחירון" class="hover:text-primary-500 transition-colors px-6 py-3 text-xl">מחירון</a></li>
          <li>
            <a href="#contact" title="צור קשר" class="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg">
              צור קשר
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
`;

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("mainHeader");
  const hero = document.getElementById("home");

  if (!header || !hero) return;

  const setHeaderStyle = () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    if (window.scrollY < heroBottom - 100) {
      // inside hero
      header.classList.remove("hero-active");
      header.classList.add("hero-inactive");
    } else {
      // passed hero
      header.classList.add("hero-active");
      header.classList.remove("hero-inactive");
    }
  };

  setHeaderStyle();
  window.addEventListener("scroll", setHeaderStyle);
});
