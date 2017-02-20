var open_feedback_link = document.querySelector(".open-feedback");
var popup = document.querySelector(".popup-overlay");
var close = popup.querySelector(".popup-close");
var focus_field = popup.querySelector("[name=user-name]");

		
open_feedback_link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	focus_field.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});