/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});

(function ($) {
	$.fn.typewriter = function () {
		this.each(function () {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function () {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				console.log($ele.html());
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 50);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> ngày <span class=\"digit\">" + hours + "</span> giờ <span class=\"digit\">" + minutes + "</span> phút <span class=\"digit\">" + seconds + "</span> giây";
	$("#clock").html(result);
}

function lyricsElapse(time) {
	// console.log(time);
	if (time > 14 && time < 49) {
		if (!$("#code-1").is(':visible')) {
			console.log("show code-1")
			$("#code-1").show().typewriter();
		}
	}

	if (time >= 49 && time < 99) {
		if (!$("#code-2").is(':visible')) {
			$("#code-1").hide();
			console.log("show code-2")
			$("#code-2").show().typewriter();
		}
	}

	if (time >= 99 && time < 134) {
		if (!$("#code-3").is(':visible')) {
			$("#code-2").hide();
			console.log("show code-3")
			$("#code-3").show().typewriter();
		}
	}

	if (time >= 134 && time < 183) {
		if (!$("#code-2").is(':visible')) {
			$("#code-3").hide();
			console.log("show code-2")
			$("#code-2").show().typewriter();
		}
	}

	if (time >= 183) {
		if (!$("#code-4").is(':visible')) {
			$("#code-2").hide();
			console.log("show code-4")
			$("#code-4").show().typewriter();
		}
	}

	if (time >= 225) {
		if (!$("#clock-box").is(':visible')) { 
			$("#clock-box").fadeIn(500, function () {
				$("#proposal").fadeIn(10000);
			});
		}
	}
}