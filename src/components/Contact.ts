export const Contact = `
  <section id="contact" class="py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 opacity-50"></div>
    <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5"></div>
    
    <div class="container mx-auto px-4 relative">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">רוצה לתאם תור או לשאול שאלה?</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">מלאי את הפרטים כאן ואני אחזור אלייך בהקדם</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-soft h-full" data-aos="fade-right">
            <form class="space-y-6 h-full flex flex-col">
              <div class="relative flex-grow">
                <input type="text" placeholder="שם" 
                  class="w-full pr-12 pl-4 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-primary-600 transition-colors text-right placeholder-gray-400"
                  data-aos="fade-up" data-aos-delay="100"
                />
                <div class="absolute right-4 top-7 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                  <i class="fas fa-user text-primary-400"></i>
                </div>
              </div>
              
              <div class="relative flex-grow">
                <input type="tel" placeholder="טלפון" 
                  class="w-full pr-12 pl-4 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-primary-600 transition-colors text-right placeholder-gray-400"
                  data-aos="fade-up" data-aos-delay="300"
                />
                <div class="absolute right-4 top-7 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                  <i class="fas fa-phone text-primary-400"></i>
                </div>
              </div>
              
              <div class="relative flex-grow">
                <input type="text" placeholder="אזור מגורים" 
                  class="w-full pr-12 pl-4 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-primary-600 transition-colors text-right placeholder-gray-400"
                  data-aos="fade-up" data-aos-delay="100"
                />
                <div class="absolute right-4 top-7 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                  <i class="fas fa-city text-primary-400"></i>
                </div>
              </div>

              <div class="flex flex-col gap-2" data-aos="fade-up" data-aos-delay="350">
                <label class="font-medium text-gray-700 mb-1 text-right">איזה שירות מעניין אותך? (אפשר לסמן כמה)</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-right">
                  <label class="flex items-center gap-2">
                    <input type="checkbox" name="services" value="תספורת" class="accent-primary-500 w-5 h-5" />
                    <span>תספורת</span>
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" name="services" value="צבע / גוונים" class="accent-primary-500 w-5 h-5" />
                    <span>צבע / גוונים</span>
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" name="services" value="החלקה אורגנית" class="accent-primary-500 w-5 h-5" />
                    <span>החלקה אורגנית</span>
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" name="services" value="פתיחת תלתלים" class="accent-primary-500 w-5 h-5" />
                    <span>פתיחת תלתלים</span>
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" name="services" value="טיפול שיקום" class="accent-primary-500 w-5 h-5" />
                    <span>טיפול שיקום</span>
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" name="services" value="תסרוקת" class="accent-primary-500 w-5 h-5" />
                    <span>תסרוקת</span>
                  </label>
                  <label class="flex items-center gap-2">
                    <input type="checkbox" name="services" value="ייעוץ והתאמה" class="accent-primary-500 w-5 h-5" />
                    <span>ייעוץ והתאמה</span>
                  </label>
                </div>
              </div>

              <div class="relative flex-grow">
                <textarea placeholder="הערות או שאלה חופשית" rows="4" 
                  class="w-full pr-12 pl-4 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-primary-600 transition-colors text-right placeholder-gray-400 resize-none"
                  data-aos="fade-up" data-aos-delay="400"
                ></textarea>
                <div class="absolute right-4 top-4 w-6 h-6 flex items-center justify-center">
                  <i class="fas fa-comment text-primary-400"></i>
                </div>
              </div>

              <button type="submit" 
                class="w-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 text-white py-4 px-8 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                data-aos="fade-up" data-aos-delay="500"
              >
                <span>שליחה</span>
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

          <div class="grid grid-rows-3 gap-4 h-full" data-aos="fade-left">
            <div class="p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto md:mr-0 mb-4">
                <i class="fas fa-house text-xl text-primary-500"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-center md:text-right">נוחות מקסימלית</h3>
              <p class="text-gray-600 text-center md:text-right">לא צריך לצאת מהבית</p>
            </div>

            <div class="p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto md:mr-0 mb-4">
                <i class="fas fa-map-marker-alt text-xl text-primary-500"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-center md:text-right">אזור עבודה</h3>
              <p class="text-gray-600 text-center md:text-right">פעילות באיזור עמק חפר השרון והמרכז</p>
            </div>

            <div class="p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto md:mr-0 mb-4">
                <i class="fas fa-phone-alt text-xl text-primary-500"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-center md:text-right">טלפון</h3>
              <p class="text-gray-600 text-center md:text-right">
                <a href="tel:+052-2427530" class="hover:text-primary-500 transition-colors">052-2427530</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;