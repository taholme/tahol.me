// Navigation
const backButtonEl = document.getElementById("back-button");
backButtonEl.textContent = window.location.pathname.endsWith("index.html") || window.location.pathname === "/"
	? ""
	: "Go Back";
