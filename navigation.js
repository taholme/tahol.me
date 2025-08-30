// Navigation
const backButtonEl = document.getElementById("back-button");
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
	backButtonEl.textContent = "";
}
