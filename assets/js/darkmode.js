const sun_icon = document.getElementById("darkmode-sun-icon");
const moon_icon = document.getElementById("darkmode-moon-icon");

const html = document.getElementsByTagName('html')[0].classList

function isDark() {
	const DARK_MODE_QUERY = '(prefers-color-scheme: dark)'
	return window.matchMedia && window.matchMedia(DARK_MODE_QUERY).matches
}

var theme;

document.addEventListener("DOMContentLoaded", function () {
	if (isDark()) {
		moon_icon.classList.remove("hidden");
		theme = "dark";
	} else {
		sun_icon.classList.remove("hidden");
		theme = "light";
	};
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
	if (matches) {
		//console.log("change to dark mode!");
		theme = "dark";
		moon_icon.classList.remove("hidden");
		sun_icon.classList.add("hidden");
		document.documentElement.setAttribute("data-theme", "dark");
	} else {
		//console.log("change to light mode!");
		theme = "light";
		moon_icon.classList.add("hidden");
		sun_icon.classList.remove("hidden");
		document.documentElement.setAttribute("data-theme", "light");
	}
})

function modeSwitcher() {
	if (theme === "dark") {
		// pass from darkmode to lightmode
		theme = "light";
		moon_icon.classList.add("hidden");
		sun_icon.classList.remove("hidden");
		document.documentElement.setAttribute("data-theme", "light");
	} else {
		theme = "dark";
		moon_icon.classList.remove("hidden");
		sun_icon.classList.add("hidden");
		document.documentElement.setAttribute("data-theme", "dark");
	};
};

var systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
//let theme = sessionStorage.getItem('theme');

/*
if (systemInitiatedDark.matches) {
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else {
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'dark');		
		  document.getElementById("theme-toggle").innerHTML = "Light Mode";
		  sessionStorage.setItem('theme', '');
  } else {
		document.documentElement.setAttribute('data-theme', 'light');
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}
*/