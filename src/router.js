// Simple router for SPA navigation
const pages = {
    home: "/src/routes/home.js",
    experience: "/src/routes/experience.js",
    ugc: "/src/routes/ugc.js",
    feedback: "/src/routes/feedback.js",
    site: "/src/routes/site.js",
    setting: "/src/routes/settings.js",
};

export async function navigate(page) {
    const app = document.getElementById("app");

    try {
        const module = await import(pages[page]);
        app.innerHTML = "";
        app.appendChild(module.default());
    } catch {
        app.innerHTML = "<p class='text-red-400'>Error loading page.</p>";
    }

    // highlight active button
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
        if(btn.dataset.page === page) btn.classList.add("active");
    });
}
