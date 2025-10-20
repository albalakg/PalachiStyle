export const Services = `
  <section id="services" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4 text-gray-800" data-aos="fade-up">
        הפתרונות שאני מציעה לשיער שלך
      </h2>
      <p class="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        טיפולי שיער באיכות הגבוהה ביותר, מותאמים אישית לכל לקוח
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Each service is clickable and will scroll to gallery with tab activated -->
        <div data-category="haircuts" class="service-item cursor-pointer relative h-40 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right" data-aos-delay="200">
          <img src="/images/services/תספורות נשים.webp" alt="תספורות נשים" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span class="text-white text-3xl font-semibold">תספורות לנשים</span>
          </div>
        </div>
        <div data-category="straightening" class="service-item cursor-pointer relative h-40 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right" data-aos-delay="300">
          <img src="/images/services/החלקה אורגנית יוקרתית.webp" alt="החלקה אורגנית יוקרתית" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span class="text-white text-3xl font-semibold">החלקה אורגנית יוקרתית</span>
          </div>
        </div>
        <div data-category="curls" class="service-item cursor-pointer relative h-40 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right" data-aos-delay="400">
          <img src="/images/services/פתיחת תלתלים.webp" alt="פתיחת תלתלים" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span class="text-white text-3xl font-semibold">פתיחת תלתלים</span>
          </div>
        </div>
        <div data-category="color" class="service-item cursor-pointer relative h-40 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right" data-aos-delay="500">
          <img src="/images/services/צבע.webp" alt="צבע ללא אמוניה" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span class="text-white text-3xl font-semibold">צבע ללא אמוניה</span>
          </div>
        </div>
        <div data-category="shades" class="service-item cursor-pointer relative h-40 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right" data-aos-delay="500">
          <img src="/images/services/צבע.webp" alt="גוונים" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span class="text-white text-3xl font-semibold">גוונים</span>
          </div>
        </div>
        <div data-category="treatments" class="service-item cursor-pointer relative h-40 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right" data-aos-delay="600">
          <img src="/images/services/טיפולי שיקום.webp" alt="טיפולי שיקום" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span class="text-white text-3xl font-semibold">טיפולי שיקום איכותיים</span>
          </div>
        </div>
        <div data-category="events" class="service-item cursor-pointer relative h-40 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right" data-aos-delay="700">
          <img src="/images/services/תסרוקות לאירועים ולימי צילום.webp" alt="תסרוקות" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span class="text-white text-3xl font-semibold">תסרוקות לאירועים ולימי צילום</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".service-item");
  const tabs = document.querySelectorAll(".gallery-tab");
  const galleryItems = document.querySelectorAll(".gallery-item");

  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      const category = item.getAttribute("data-category");
      const gallerySection = document.getElementById("gallery");

      if(!gallerySection || !category) return;

      // Scroll to gallery
      gallerySection.scrollIntoView({ behavior: "smooth" });

      // Activate tab
      tabs.forEach((tab: any) => {
        tab.classList.remove("active-tab");
        if (tab.dataset.tab === category) tab.classList.add("active-tab");
      });

      // Filter gallery
      galleryItems.forEach((g: any) => {
        if (category === "all" || g.classList.contains(category)) {
          g.style.display = "block";
        } else {
          g.style.display = "none";
        }
      });
    });
  });

  // Handle tab clicks
  tabs.forEach((tab: any) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove("active-tab"));
      tab.classList.add("active-tab");

      galleryItems.forEach((g: any) => {
        if (category === "all" || g.classList.contains(category)) {
          g.style.display = "block";
        } else {
          g.style.display = "none";
        }
      });
    });
  });
});



window.addEventListener("categories-loaded", (e: Event) => {
  console.log('in event', e);
});