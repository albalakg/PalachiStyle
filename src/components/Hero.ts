export const Hero = `
  <section id="home" class="min-h-screen relative overflow-hidden flex items-center">
    <video 
      autoplay 
      loop 
      muted 
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
      poster="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    >
      <source src="https://videos.pexels.com/video-files/3998440/3998440-uhd_2732_1440_25fps.mp4" type="video/mp4">
    </video>
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
    <div class="container mx-auto px-4 py-20 relative">
      <div class="text-white max-w-4xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">ספרית עד הבית</h1>
          <h2 class="text-2xl md:text-4xl font-bold mb-6 leading-tight">שיער זה לא רק מראה – זו תחושת ביטחון</h2>
          <p class="text-xl mb-8 text-gray-200">
            נעים להכיר, אני שחר, מעצבת שיער עם ניסיון של מעל 10 שנים בתחום, והיום אני מביאה את הסלון עד אלייך הביתה.

            בין אם את רוצה להתפנק או להתחדש, לשקם את השיער או להתכונן לאירוע – אני כאן בשבילך עם כל הלב וכל הכלים המקצועיים.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
            <a href="#contact" class="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-white px-20 py-4 text-2xl rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">קבעי תור</a>
            <a href="#services" class="bg-white/10 text-white px-20 py-4 text-2xl rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm text-center">גלי עוד</a>
        </div>
      </div>
    </div>
  </section>
`;