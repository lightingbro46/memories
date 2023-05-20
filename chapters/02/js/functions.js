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
	$.fn.typewriter = function (options) {
		var settings = $.extend({
			timeline: []
		}, options);
		this.each(function () {
			var $ele = $(this), str = $ele.html(), position = 0;
			var line_no = 0, break_line = 0, pre_space = false, process = 0;
			var player = $("#player")[0];
			$ele.html('');
			var timer = setInterval(function () {
				var cur_t = player.currentTime;
				process++;
				if (cur_t < settings.timeline[line_no]) {
					var substr = str.substring(0, position);
					$ele.html(substr + ((process & 1) && (position < str.length) ? '_' : ''));
				} else {
					var current = str.substr(position, 1);
					while (current == ' ') {
						if (!pre_space) {
							pre_space = true;
							break;
						}
						position++;
						current = str.substr(position, 1);
					}
					if (current != ' ') {
						pre_space = false;
					}
					if (current == '<') {
						position = str.indexOf('>', position) + 1;
					} else {
						position++;
					}
					var substr = str.substring(0, position);
					if (substr.endsWith('<br>')) {
						break_line++;
						if (break_line == 2) {
							line_no++;
							break_line = 0;
						}
					}
					$ele.html(substr + ((process & 1) && (position < str.length) ? '_' : ''));
				}
				if (position >= str.length) {
					clearInterval(timer);
				}
			}, 60);
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
	if (time > 15 && time < 49) {
		if (!$("#code-1").is(':visible')) {
			$("#code-2").hide();
			$("#code-3").hide();
			$("#code-4").hide();
			$("#code-1").show().typewriter({
				timeline: [16, 21, 25, 29, 33, 37, 42, 46]
			});
		}
	}

	if (time >= 49 && time < 99) {
		if (!$("#code-2").is(':visible')) {
			$("#code-1").hide();
			$("#code-3").hide();
			$("#code-4").hide();
			$("#code-2").show().typewriter({
				timeline: [50, 55, 59, 63, 67, 71, 76, 80]
			});
		}
	}

	if (time >= 99 && time < 134) {
		if (!$("#code-3").is(':visible')) {
			$("#code-1").hide();
			$("#code-2").hide();
			$("#code-4").hide();
			$("#code-3").show().typewriter({
				timeline: [101, 105, 109, 113, 118, 122, 126, 130]
			});
		}
	}

	if (time >= 134 && time < 183) {
		if (!$("#code-2").is(':visible')) {
			$("#code-1").hide();
			$("#code-3").hide();
			$("#code-4").hide();
			$("#code-2").show().typewriter({
				timeline: [134, 139, 143, 147, 151, 156, 160, 164]
			});
		}
	}

	if (time >= 183) {
		if (!$("#code-4").is(':visible')) {
			$("#code-1").hide();
			$("#code-2").hide();
			$("#code-3").hide();
			$("#code-4").show().typewriter({
				timeline: [185, 189, 194, 198, 202, 206, 210, 216, 220]
			});
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