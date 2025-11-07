export const Pricing = `
<section id="pricing" class="py-20 bg-gray-50 min-h-screen flex items-center">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">תפריט מחירים</h2>
    <p class="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
      שירותי שיער בהתאמה אישית, עד אלייך – עם ניסיון של 9 שנים, חומרים איכותיים ויחס חם
    </p>

    <div id="pricing-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-8xl mx-auto"></div>
  </div>
</section>
`;

type PricingItem = { type: string; price: string };
type PricingGroup = { service: string; items: PricingItem[] };

const iconFor = (service: string) => {
  const s = service.trim();
  if (/(תספורת|עיצוב)/.test(s)) return "fa-cut";
  if (/(צביעה|גוונים)/.test(s)) return "fa-paint-brush";
  if (/(החלקות|טיפולים|טיפול|מסגרת)/.test(s)) return "fa-spa";
  return "fa-scissors"; // ברירת מחדל
};

const fmtPrice = (p: string) => {
  const clean = String(p).trim();
  // אם אין כבר ₪ בסטרינג – נוסיף בסוף, ואם זה טווח נשאיר כמות שהוא
  return /₪/.test(clean) ? clean : `${clean} ₪`;
};

const cardTemplate = (group: PricingGroup) => `
  <div class="pricing-card bg-white p-2 md:p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300">
    <div class="text-center mb-8">
      <div class="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas ${iconFor(group.service)} text-3xl text-white"></i>
      </div>
      <h3 class="text-3xl font-semibold mb-2 text-gray-800">${
        group.service
      }</h3>
    </div>
    <ul class="space-y-4 text-gray-600 mb-8 text-right">
      ${group.items
        .map(
          (it) => `
        <li class="bg-primary-50 p-3 rounded-lg flex justify-between transition-all duration-300 hover:bg-primary-100 hover:scale-[1.02] hover:shadow-md">
          <span class="text-sm md:text-lg mt-[2px] sm:mt-[0px]">${
            it.type
          }</span>
          <span class="font-bold">${fmtPrice(it.price)}</span>
        </li>`
        )
        .join("")}
    </ul>
  </div>
`;

function renderPricing(pricing: any) {
  const el = document.getElementById("pricing-grid");
  if (!el) return;
  if (!pricing?.length) {
    el.innerHTML = `<div class="text-center text-gray-600">לא נמצאו מחירים להצגה</div>`;
    return;
  }
  el.innerHTML = pricing.map(cardTemplate).join("");
}

window.addEventListener("data-loaded", () => {
  renderPricing((window as any).pricing);
});
