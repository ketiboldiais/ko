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

	if (hours < 10) {
		greeting = "Ungil tutau.";
	} else if (hours >= 10 && hours < 12) {
		greeting = "Ungil chodechosong."
	}
	else if (hours >= 12 && hours < 17) {
		greeting = "Ungil sueleb.";
	} else if (hours >= 17 && hours <= 24) {
		greeting = "Ungil kebesengei.";
	} else {
		greeting = "Alii, ke ua ngarang?";
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
	const BODY = document.querySelector("body");
	const SUPNoteNumbers = document.querySelectorAll("sup");
	for (let i = 0; i < SUPNoteNumbers.length; i++) {
		let count = i;
		const noteNumber = document.createElement("sup");
		noteNumber.textContent = `${i + 1} `;
		let currentFootNote = footnoteText[i];
		let currentFootNoteText = currentFootNote.querySelector("span");
		currentFootNote.insertBefore(noteNumber, currentFootNoteText);
		BODY.addEventListener("click", () => {
			for (let j = 0; j < footnoteText.length; j++) {
				footnoteText[j].classList.remove("fn-text-visible");
			}
		});
		SUPNoteNumbers[i].addEventListener("click", function (evt) {
			for (let j = 0; j < footnoteText.length; j++) {
				footnoteText[j].classList.remove("fn-text-visible");
			}
			currentFootNote.classList.toggle("fn-text-visible");
			evt.stopPropagation();
		});
	}
}
revealFootnote();
