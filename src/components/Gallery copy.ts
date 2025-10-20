export const Gallery = `
  <section id="gallery" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">גלריה</h2>
      <p class="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">תוצאות מרהיבות מלקוחות מרוצות</p>

      <!-- Tabs -->
      <div class="flex justify-center mb-10 space-x-4 rtl:space-x-reverse">
        <button class="gallery-tab active-tab" data-tab="all">הכל</button>
        <button class="gallery-tab" data-tab="haircuts">תספורות</button>
        <button class="gallery-tab" data-tab="straightening">החלקות</button>
        <button class="gallery-tab" data-tab="curls">תלתלים</button>
        <button class="gallery-tab" data-tab="color">צבע</button>
        <button class="gallery-tab" data-tab="shades">גוונים</button>
        <button class="gallery-tab" data-tab="treatments">טיפולי שיקום</button>
        <button class="gallery-tab" data-tab="events">תסרוקות</button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="gallery-item haircuts"> 
          <img src="/images/gallery/תמונה רגילה 1.jpeg" alt="תמונה רגילה 1" class="w-full aspect-[9/10] object-cover gallery-image">
        </div>
        <div class="gallery-item straightening">
          <img src="/images/gallery/תמונה רגילה 3.jpeg" alt="תמונה רגילה 3" class="w-full aspect-[9/10] object-cover gallery-image">
          <img src="/images/gallery/תמונה רגילה 4.jpeg" alt="תמונה רגילה 4" class="w-full aspect-[9/10] object-cover gallery-image">
        </div>
        <div class="gallery-item curls">
          <img src="/images/gallery/תמונה רגילה 2.jpeg" alt="תמונה רגילה 2" class="w-full aspect-[9/10] object-cover gallery-image">
        </div>
        <div class="gallery-item color">
          <video src="/images/gallery/סרטון 1.mp4" alt="סרטון 1" class="w-full aspect-[3/4] object-cover gallery-video" autoplay loop muted playsinline>
          </video>
          <video src="/images/gallery/סרטון 2.mp4" alt="סרטון 2" class="w-full aspect-[3/4] object-cover gallery-video" autoplay loop muted playsinline>
          </video>
        </div>
        <div class="gallery-item treatments">
          <img src="/images/gallery/תמונה לפני 3.jpeg" alt="תמונה לפני 3" class="w-full h-64 object-cover gallery-image">
          <img src="/images/gallery/תמונה אחרי 3.jpeg" alt="תמונה אחרי 3" class="w-full h-64 object-cover gallery-image">
        </div>
        <div class="gallery-item shades">
          <img src="/images/gallery/תמונה לפני 3.jpeg" alt="תמונה לפני 3" class="w-full h-64 object-cover gallery-image">
        </div>
        <div class="gallery-item events">
          <img src="/images/gallery/תמונה לפני 1.jpeg" alt="תמונה לפני 1" class="w-full h-64 object-cover gallery-image">
          <img src="/images/gallery/תמונה אחרי 1.jpeg" alt="תמונה אחרי 1" class="w-full h-64 object-cover gallery-image">
        </div>
        <!-- You’ll place your before/after pairs, normal images, and videos inside these divs, each tagged with the right category -->
      </div>
    </div>
  </section>
`;
