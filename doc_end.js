function mehClick(clicked) {
	console.log(clicked);
}

var meh = ' · <a onClick="console.log(\'hello\');" class="like_link stat_elem as_link" title="Meh this item" type="submit" name="meh"><span class="default_message">Meh</span><span class="saving_message">Unmeh</span></button>';

console.log("is this the real life");

function mehify(likeButton) {
	var d = document.createElement('span');
	d.isMehSpan = true;
	d.innerHTML = meh;

	// Don't remehify like buttons already mehified
	if (!likeButton.nextSibling || (likeButton.nextSibling && !likeButton.nextSibling.isMehSpan)) {	
		likeButton.parentNode.insertBefore(d, likeButton.nextSibling);
	}
}

function processLikeButtons() {
	var buttons = document.getElementsByTagName("BUTTON");
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].name === "like") {
			mehify(buttons[i]);
		}
	}
}

processLikeButtons();

// FB dynamically adds more buttons, lazy way to keep up with it.
setInterval(processLikeButtons, 500);