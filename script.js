let links = document.querySelectorAll("nav a");
for (let link of links) {
    link.addEventListener('click', function() {
        let sections = document.getElementsByTagName("section");
        for (let section of sections) {
            if ("#" + section.id === link.getAttribute("href")) {
							setTimeout(function () { section.style.opacity = "100%" }, 500)
                // section.style.display = "block";
            } else {
							setTimeout(function () { section.style.opacity = "0%" }, 500)
                // section.style.display = "none";
            }
        }
    });
}


