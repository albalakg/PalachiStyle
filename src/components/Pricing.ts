export const Pricing = `
<section id="pricing" class="py-20 bg-gray-50 min-h-screen flex items-center">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">תפריט מחירים</h2>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
      שירותי שיער בהתאמה אישית, עד אלייך – עם ניסיון של 9 שנים, חומרים איכותיים ויחס חם
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

      <!-- תספורת ועיצוב -->
      <div class="pricing-card bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-cut text-2xl text-white"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-gray-800">תספורת ועיצוב</h3>
        </div>
        <ul class="space-y-4 text-gray-600 mb-8 text-right">
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>תספורת נשים</span>
            <span class="font-bold">150 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>תספורת + פן</span>
            <span class="font-bold">200 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>פן בלבד</span>
            <span class="font-bold">120 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>בייביליס / תסרוקת קלילה</span>
            <span class="font-bold">200–300 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>תסרוקת ערב / אירוע</span>
            <span class="font-bold">350–500 ₪</span>
          </li>
        </ul>
      </div>

      <!-- צבע וגוונים -->
      <div class="pricing-card bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-paint-brush text-2xl text-white"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-gray-800">צביעה וגוונים</h3>
        </div>
        <ul class="space-y-4 text-gray-600 mb-8 text-right">
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>צבע שיער ללא אמוניה</span>
            <span class="font-bold">150 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>צבע + פן</span>
            <span class="font-bold">200 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>גוונים / בליאז' / אומברה</span>
            <span class="font-bold">400–700 ₪</span>
          </li>
        </ul>
      </div>

      <!-- החלקות וטיפולים -->
      <div class="pricing-card bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-spa text-2xl text-white"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-gray-800">החלקות וטיפולים</h3>
        </div>
        <ul class="space-y-4 text-gray-600 mb-8 text-right">
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>החלקה אורגנית</span>
            <span class="font-bold">800–1000 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>החלקת מסגרת</span>
            <span class="font-bold">200–450 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>טיפול משקם לשיער</span>
            <span class="font-bold">300–500 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>פתיחת תלתלים</span>
            <span class="font-bold">300–600 ₪</span>
          </li>
          <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
            <span>תוספת חפיפה</span>
            <span class="font-bold">20 ₪</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-lg mx-auto">
      <a href="#contact" class="block text-center mt-8 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-white py-4 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-1">הזמיני תור</a>
    </div>
  </div>
</section>
`;
