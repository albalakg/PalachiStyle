export const Services = `
  <section id="services" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4 text-gray-800" data-aos="fade-up">
        הפתרונות שאני מציעה לשיער שלך
      </h2>
      <p class="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        טיפולי שיער באיכות הגבוהה ביותר, מותאמים אישית לכל לקוח
      </p>
      
      <div id="services-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Services will be injected here -->
      </div>
    </div>
  </section>
`;

function bindServiceItems() {
  const serviceItems = document.querySelectorAll(".service-item");
  const tabs = document.querySelectorAll(".gallery-tab");

  serviceItems.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.getAttribute("data-category");
      const gallerySection = document.getElementById("gallery");
      if (!gallerySection || !category) return;

      // Scroll to gallery
      gallerySection.scrollIntoView({ behavior: "smooth" });

      // Wait a bit so scrolling looks smooth, then switch tab
      setTimeout(() => {
        const targetTab = Array.from(
          document.querySelectorAll(".gallery-tab")
        ).find((tab: any) => tab.dataset.tab === category);

        if (targetTab) targetTab.click();
      }, 500); // small delay so scroll finishes
    });
  });
}


window.addEventListener("categories-loaded", (e: Event) => {
  const categories = (window as any).categories;
  const grid = document.getElementById("services-grid");
  if (!categories || !grid) return;

  grid.innerHTML = categories
    .map(
      (cat: any, index: number) => `
        <div data-category="${cat.short_name}"
             class="service-item cursor-pointer relative h-40 rounded-2xl overflow-hidden shadow-lg"
             data-aos="fade-right" data-aos-delay="${200 + index * 100}">
          <img src="${cat.banner}" alt="${
        cat.name
      }" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <span class="text-white text-3xl font-semibold">${cat.name}</span>
          </div>
        </div>
      `
    )
    .join("");

  // Bind click logic for the new service items
  bindServiceItems();
});
