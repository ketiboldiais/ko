let links = document.querySelectorAll("nav a");
for (let link of links) {
	link.addEventListener("click", function () {
		let sections = document.getElementsByTagName("article");
		for (let section of sections) {
			if ("#" + section.id === link.getAttribute("href")) {
                links.forEach(e => { 
                    if (e.classList.contains('current')) { 
                        e.classList.remove('current')
                    }
                })
                link.classList.toggle('current')
				setTimeout(function () {
					section.style.display = "block";
				}, 110);
				setTimeout(function () {
					section.style.opacity = "100%";
				}, 300);
			} else {
				setTimeout(function () {
					section.style.display = "none";
				}, 100);
				setTimeout(function () {
					section.style.opacity = "0%";
				}, 800);
			}
		}
	});
}
