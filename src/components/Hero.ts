export const Hero = `
  <section id="home" class="min-h-screen relative overflow-hidden flex items-center">
    <video 
      autoplay 
      loop 
      muted 
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
      poster="/images/gallery/תמונות מספרה.jpeg"
    >
      <!-- Mobile source -->
      <source src="/images/gallery/סרטון 3 סרטונים.mp4" type="video/mp4" media="(max-width: 768px)">
      <!-- Desktop source -->
      <source src="/images/gallery/Hero-Desktop.mp4" type="video/mp4" media="(min-width: 769px)">
    </video>
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
    <div class="container mx-auto px-4 py-20 relative">
      <div class="text-white max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">ספרית נשים</h1>
        <h2 class="text-2xl md:text-4xl font-bold mb-6 leading-tight">שיער זה לא רק מראה – זו תחושת ביטחון</h2>
        <p class="text-xl mb-8 text-gray-100">
          נעים להכיר, אני שחר, מעצבת שיער עם ניסיון של מעל 10 שנים בתחום.

          <br>מוזמנת להגיע אליי למושב בארותיים בין אם את רוצה להתפנק או להתחדש, החלקה, גוונים, לשקם את השיער או להתכונן לאירוע – אני כאן בשבילך עם כל הלב וכל הכלים המקצועיים.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
          <a href="#contact" class="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-white px-20 py-4 text-2xl rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">קבעי תור</a>
          <a href="#services" class="bg-white/10 text-white px-20 py-4 text-2xl rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm text-center">גלי עוד</a>
        </div>
      </div>
    </div>
  </section>
`;