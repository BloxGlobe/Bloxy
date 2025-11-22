import { loadPage } from "./app";
import { renderSidebar } from "./components/sidebar";
import { renderFooter } from "./components/footer";

renderSidebar();
renderFooter();

// Initial load
const initial = location.hash ? location.hash.slice(1) : "home";
loadPage(initial);

// Handle navigation
window.addEventListener("popstate", () => {
  const page = location.hash.slice(1) || "home";
  loadPage(page);
});

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const page = btn.getAttribute("data-page")!;
    loadPage(page);
  });
});
