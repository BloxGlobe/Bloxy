export function renderRatingPopup() {
  const popup = document.createElement("div");
  popup.className =
    "fixed bottom-6 right-6 bg-gray-800 text-white p-4 rounded-xl shadow-lg animate-slideUp";

  popup.innerHTML = `
    <h3 class="font-bold text-lg mb-2">Rate your experience</h3>

    <div id="rating-stars" class="flex gap-2 text-2xl cursor-pointer">
      ★ ★ ★ ★ ★
    </div>

    <button class="mt-3 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
      Submit
    </button>
  `;

  document.body.appendChild(popup);
}
