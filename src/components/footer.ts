export function renderFooter() {
  const footer = document.getElementById("footer")!;
  footer.innerHTML = `
    <footer class="bg-gray-800 py-4 text-center text-sm text-gray-400">
      Bloxy © 2025 — All rights reserved.
    </footer>
  `;
}
