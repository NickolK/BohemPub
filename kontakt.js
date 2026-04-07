// kontakt.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const el = document.getElementById("form-status");
    if (!el) return;

    if (status === "ok") {
        el.textContent = "Správa bola úspešne odoslaná. Ďakujeme.";
        el.style.color = "#9FE7C7";
    } else if (status === "error") {
        el.textContent = "Pri odosielaní správy nastala chyba. Skúste to prosím znova.";
        el.style.color = "#ff6666";
    }
});