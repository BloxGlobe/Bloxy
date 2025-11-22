export async function loadPage(page: string) {
  const app = document.getElementById("app")!;

  try {
    const res = await fetch(`src/pages/${page}.html`);
    if (!res.ok) throw new Error("Page missing");

    app.innerHTML = await res.text();
    history.replaceState({}, "", `#${page}`);

    document
      .querySelectorAll(".nav-btn")
      .forEach((b) => b.classList.remove("bg-gray-700"));

    const active = document.querySelector(`.nav-btn[data-page="${page}"]`);
    active?.classList.add("bg-gray-700");

  } catch {
    const res = await fetch("src/pages/404.html");
    app.innerHTML = await res.text();
  }
}
