// Light/ Dark Mode
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

const updateTheme = () => {
	toggleButton.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
};

toggleButton.addEventListener("click", () => {
	body.classList.toggle("dark-mode");
	const isDark = body.classList.contains("dark-mode");
	localStorage.setItem("theme", isDark ? "dark" : "light");
	updateTheme();
});

if (localStorage.getItem("theme") === "dark") {
	body.classList.add("dark-mode");
}
updateTheme();
