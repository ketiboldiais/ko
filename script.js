/*
 * nextSection() toggles section visibility.
 * By default, all sections are invisible.
 * Input: User clicks on one of the navigation headers
 * Output: Matching section is visible.
 */
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

/* 
	greet() changes the About section's greeting depending on time of day.
	greet() is called every minute to update the 'hours' variable.
*/

function greet() {
	let date = new Date();
	let hours = date.getHours();
	let greeting;

	if (hours < 12) {
		greeting = "Good morning.";
	} else if (hours >= 12 && hours < 17) {
		greeting = "Good afternoon.";
	} else if (hours >= 17 && hours <= 24) {
		greeting = "Good evening.";
	} else {
		greeting = "Hello.";
	}
	document.getElementById("greet").textContent = greeting;
	setTimeout(greet, 60_000);
}
greet();

/*
	noteCount() appends note numbers to SUP tags.
	Input: List of SUP tags
	Output: SUP tags have inner HTML
*/
function noteCount() {
	const SUPtags = document.querySelectorAll("li > sup");
	for (let i = 0; i < SUPtags.length; i++) {
		SUPtags[i].textContent += i + 1;
	}
}
noteCount();

/* 
	revealFootnote() toggles the visibility of footnote text.
	By default: All footnote text is invisible.
	input: Cursor over SUP element.
	output: toggle visibility of matching footnote text.
*/
function revealFootnote() {
	const footnoteText = document.querySelectorAll(".fn-text");
	const SUPNoteNumbers = document.querySelectorAll("sup");
	for (let i = 0; i < SUPNoteNumbers.length; i++) {
		const noteNumber = document.createElement('sup')
		noteNumber.textContent = `${i+1} `;
		let currentFootNote = footnoteText[i];
		let currentFootNoteText = currentFootNote.querySelector('span')
		currentFootNote.insertBefore(noteNumber, currentFootNoteText);
		SUPNoteNumbers[i].addEventListener("mouseenter", function () {
			setTimeout(() => {
				currentFootNote.classList.add("fn-text-visible");
			}, 1);
			currentFootNote.style.display = "block";
		});
		SUPNoteNumbers[i].addEventListener("mouseleave", function () {
			currentFootNote.style.display = "none";
			currentFootNote.classList.remove("fn-text-visible");
		});
	}
}
revealFootnote();
