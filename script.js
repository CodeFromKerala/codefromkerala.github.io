document.addEventListener('DOMContentLoaded', () => {
	// set year
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	const links = document.querySelectorAll('.nav-link');

	// Active link handling: bold indicates active tab
	links.forEach(link => {
		link.addEventListener('click', () => {
			links.forEach(l => l.classList.remove('active'));
			link.classList.add('active');
		});
	});

	// Set active from hash on load
	if (location.hash) {
		const target = document.querySelector('.nav-link[href="' + location.hash + '"]');
		if (target) {
			links.forEach(l => l.classList.remove('active'));
			target.classList.add('active');
		}
	}
});

