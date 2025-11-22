import { navigate } from "./router";

document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        navigate(btn.dataset.page);
    });
});

navigate("home"); // default page
