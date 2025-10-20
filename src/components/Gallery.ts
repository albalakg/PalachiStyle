export const Gallery = `
  <section id="gallery" class="py-20 bg-white relative">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">גלריה</h2>
      <p class="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        תוצאות מרהיבות מלקוחות מרוצות
      </p>

      <!-- Tabs -->
      <div class="gallery-tabs flex justify-start md:justify-center mb-10 space-x-2 rtl:space-x-reverse overflow-x-auto scrollbar-hide px-2"></div>

      <!-- Gallery Grid -->
      <div class="gallery-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 m-auto md:w-[80%]"></div>
    </div>

    <!-- Lightbox -->
    <div id="lightbox" class="fixed inset-0 bg-black/80 hidden items-center justify-center z-50">
      <span id="lightbox-close" class="absolute top-5 right-8 text-white text-3xl cursor-pointer">&times;</span>
      <button id="lightbox-next" class="absolute left-4 text-white text-4xl px-4 py-2 z-50 hover:text-primary-400">&#10095;</button>
      <button id="lightbox-prev" class="absolute right-4 text-white text-4xl px-4 py-2 z-50 hover:text-primary-400">&#10094;</button>
      <img id="lightbox-img" src="" alt="Preview" class="max-h-[90%] max-w-[90%] rounded-lg shadow-2xl">
    </div>
  </section>
`;

// const API_KEY = "AIzaSyDJlpDGTrSPCBNXMIPZeHL7D-zNswKd9qU";
// const ROOT_FOLDER_ID = "1IyG5jKO1oFnMDQRCQ0SFXnvipY0oXmZF";

const CLOUD_NAME = "dq9gif9ri";
const CLOUD_BASE_URL = `https://res.cloudinary.com/dq9gif9ri/raw/upload/v1757956858/`;

function isVideo(url: string) {
  return url.match(/\.(mp4|webm|ogg)(\?.*)?$/i);
}

async function listAssets() {
  const url = `https://www.googleapis.com/drive/v3/files?q='${ROOT_FOLDER_ID}' in parents and trashed=false&key=${API_KEY}&fields=files(id,name,mimeType)`;
  const res = await fetch(url);
  const data = await res.json();

  return data.files.map((f: any) => ({
    name: f.name,
    url: `https://www.googleapis.com/drive/v3/files/${f.id}?alt=media&key=${API_KEY}`, // stable!
    mimeType: f.mimeType,
  }));
}

async function getCategories() {
  const res = await fetch(CLOUD_BASE_URL + `data.json`);
  const data = await res.json(); // <-- your uploaded data.json
  console.log({ data });
  window.categories = data.categories;
  const myEvent = new CustomEvent("categories-loaded", {
    categories: data.categories,
  });
  window.dispatchEvent(myEvent);

  return data.categories;
}

// --- Render ---
function renderGallery(categories: any[]) {
  const tabsContainer = document.querySelector(".gallery-tabs");
  const gridContainer = document.querySelector(".gallery-grid");

  if (!tabsContainer || !gridContainer) return;

  // Tabs
  tabsContainer.innerHTML = `
    <button class="gallery-tab active-tab" data-tab="all">הכל</button>
    ${categories
      .map(
        (c) =>
          `<button class="gallery-tab" data-tab="${c.short_name}">${c.name}</button>`
      )
      .join("")}
  `;

  // --- Build gallery items ---
  const seen = new Set<string>();
  gridContainer.innerHTML = categories
    .flatMap((cat) =>
      cat.assets.map((a: any) => {
        const isVid = isVideo(a);

        // check if this asset should appear in "all"
        const isInAll = !seen.has(a);
        if (isInAll) seen.add(a);

        // mark it by category + optionally "all"
        const categoriesAttr = [cat.short_name];
        if (isInAll) categoriesAttr.push("all");

        return isVid
          ? `<video class="gallery-thumb gallery-item" data-category="${categoriesAttr.join(
              " "
            )}" src="${a}" alt="${
              cat.name
            }" autoplay loop muted playsinline></video>`
          : `<img class="gallery-thumb gallery-item" data-category="${categoriesAttr.join(
              " "
            )}" src="${a}" alt="${cat.name}">`;
      })
    )
    .join("");

  bindGalleryLogic();
  const allTab = document.querySelector(
    ".gallery-tab[data-tab='all']"
  ) as HTMLElement;
  if (allTab) allTab.click();
}

// --- Lightbox + Tabs ---
function bindGalleryLogic() {
  const thumbs = Array.from(document.querySelectorAll(".gallery-thumb"));
  const videos = document.querySelectorAll("video.gallery-thumb");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById(
    "lightbox-img"
  ) as HTMLImageElement;
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const tabs = document.querySelectorAll(".gallery-tab");

  let currentIndex = -1;
  let visibleThumbs: any[] = thumbs;

  if (!lightbox || !lightboxImg || !closeBtn) return;

  videos.forEach((v: any) => (v.muted = true));

  const updateVisibleThumbs = () => {
    visibleThumbs = thumbs.filter((t: any) => t.style.display !== "none");
  };

  const showAsset = (index: number) => {
    if (visibleThumbs.length === 0) return;
    if (index < 0) index = visibleThumbs.length - 1;
    if (index >= visibleThumbs.length) index = 0;
    currentIndex = index;

    const t = visibleThumbs[currentIndex];
    videos.forEach((v: any) => v.pause());

    if (t.tagName.toLowerCase() === "video") {
      lightboxImg.style.display = "none";
      const video = document.createElement("video");
      video.src = t.getAttribute("src") || "";
      video.autoplay = true;
      video.controls = true;
      video.muted = true;
      video.className = "max-h-[90%] max-w-[90%] rounded-lg shadow-2xl";
      lightbox.querySelectorAll("video").forEach((v) => v.remove());
      lightbox.appendChild(video);
    } else {
      lightbox.querySelectorAll("video").forEach((v) => v.remove());
      lightboxImg.style.display = "block";
      lightboxImg.src = t.getAttribute("src") || "";
    }

    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  };

  tabs.forEach((tab: any) => {
    tab.addEventListener("click", () => {
      const category = tab.getAttribute("data-tab");
      tabs.forEach((t) => t.classList.remove("active-tab"));
      tab.classList.add("active-tab");

      thumbs.forEach((thumb: any) => {
        const thumbCategory = thumb.getAttribute("data-category");
        thumb.style.display =
          category === "all" &&
          thumb.getAttribute("data-category")?.includes("all")
            ? "block"
            : category !== "all" &&
              thumb.getAttribute("data-category")?.includes(category)
            ? "block"
            : "none";
      });

      updateVisibleThumbs();
    });
  });

  thumbs.forEach((t: any) => {
    t.addEventListener("click", () => {
      updateVisibleThumbs();
      const indexInVisible = visibleThumbs.indexOf(t);
      showAsset(indexInVisible);
    });
  });

  prevBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    showAsset(currentIndex - 1);
  });
  nextBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    showAsset(currentIndex + 1);
  });

  const closeLightbox = () => {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    videos.forEach((v: any) => v.play());
  };

  closeBtn?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox?.classList.contains("flex")) {
      if (e.key === "ArrowLeft") showAsset(currentIndex - 1);
      if (e.key === "ArrowRight") showAsset(currentIndex + 1);
      if (e.key === "Escape") closeLightbox();
    }
  });

  updateVisibleThumbs();
}

// --- Init ---
// getCategories();
getCategories().then((cats) => renderGallery(cats));
