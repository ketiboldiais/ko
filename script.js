function nextSection() {
	let links = document.querySelectorAll("nav a");
	for (let link of links) {
		link.addEventListener("click", function () {
			let sections = document.getElementsByTagName("article");
			for (let section of sections) {
				if ("#" + section.id === link.getAttribute("href")) {
					links.forEach((e) => {
						if (e.classList.contains("current")) {
							e.classList.remove("current");
						}
					});
					link.classList.toggle("current");
					setTimeout(function () {
						section.style.display = "block";
					}, 2);
					setTimeout(function () {
						section.style.opacity = "100%";
					}, 100);
				} else {
					setTimeout(function () {
						section.style.opacity = "0%";
					}, 100);
					setTimeout(function () {
						section.style.display = "none";
					}, 1);
				}
			}
		});
	}
}
nextSection();

function greet() {
	const date = new Date();
	const hours = date.getHours();
	let greet;

	if (hours < 12) greet = "Good morning.";
	else if (hours >= 12 && hours <= 17) greet = "Good afternoon.";
	else if (hours >= 17 && hours <= 24) greet = "Good evening.";
	else greet = "Hello.";

	document.getElementById("greet").innerHTML = greet;
}
greet();
