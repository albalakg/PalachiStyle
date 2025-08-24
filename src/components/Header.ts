export const Header = `
  <header class="fixed top-0 right-0 left-0 glass-effect z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center lg:justify-center lg:gap-20">
        <div class="text-2xl font-bold text-primary-600">לוגו</div>
        <button id="menuBtn" class="lg:hidden text-primary-600 hover:text-primary-700 transition-colors">
          <i class="fas fa-bars text-xl"></i>
        </button>
        <ul id="menuItems" class="hidden lg:flex items-center gap-5 text-gray-600">
          <li><a href="#home" class="text-white hover:text-primary-500 transition-colors px-6 py-3 text-xl">בית</a></li>
          <li><a href="#services" class="text-white hover:text-primary-500 transition-colors px-6 py-3 text-xl">שירותים</a></li>
          <li><a href="#gallery" class="text-white hover:text-primary-500 transition-colors px-6 py-3 text-xl">גלריה</a></li>
          <li><a href="#pricing" class="text-white hover:text-primary-500 transition-colors px-6 py-3 text-xl">מחירון</a></li>
          <li>
            <a href="#contact" class="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg">
              <span class="text-white">
              צור קשר
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
`;