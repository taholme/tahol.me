// Navigation
const backButtonEl = document.getElementById("back-button");
backButtonEl.textContent = window.location.pathname.endsWith("index.html")
	? ""
	: "Go Back";
