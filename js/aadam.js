document.getElementById('username').innerHTML = '\xa0' + 'Aadam' + '\xa0';
document.getElementById('anime_name').innerHTML = '\xa0' + 'Megalo Box' + '\xa0';

// let root = document.documentElement;
// root.style.setProperty('--colour_main','#3b2b7d');
// root.style.setProperty('--colour_dark','#1d1c2c');
// root.style.setProperty('--colour_light','#d7ceff');
// root.style.setProperty('--colour_highlight','#8d73ff');
// root.style.setProperty('--colour_text','#d7ceff');

var start_date = new Date('02/02/2021').getTime(); // Edit this
var init_start_date = new Date('Jan 01 2021').getTime();

var now = new Date().getTime();
var time_since = now - start_date;

var eps_watched = 7; // Edit this
document.getElementById('eps_watched_text').innerHTML = '\xa0' + eps_watched + '\xa0';

var eps_total = 13;
/*
fetch('file://./ep.txt')
  .then(response => response.text())
  .then(text => console.log(text))
 // outputs the content of the text file
*/

var eps_rem = eps_total - eps_watched;

var x = setInterval(function() {
	var now = new Date().getTime();
	var time_since = now - start_date;
	

	var init_time_since = now - init_start_date;
	var time_finish = ((init_time_since / eps_watched) * eps_rem);


	var days = Math.floor(time_since / (1000 * 60 * 60 * 24));
	var hours = Math.floor((time_since % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((time_since % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((time_since % (1000 * 60)) / 1000);
	
	var years_fin = Math.floor(time_finish / (1000 * 60 * 60 * 24 * 365));
	var days_fin = Math.floor((time_finish % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
	var hours_fin = Math.floor((time_finish % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes_fin = Math.floor((time_finish % (1000 * 60 * 60)) / (1000 * 60));
	var seconds_fin = Math.floor((time_finish % (1000 * 60)) / 1000);

	var years_tss = Math.floor(init_time_since / (1000 * 60 * 60 * 24 * 365));
	var days_tss = Math.floor((init_time_since % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
	var hours_tss = Math.floor((init_time_since % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes_tss = Math.floor((init_time_since % (1000 * 60 * 60)) / (1000 * 60));
	var seconds_tss = Math.floor((init_time_since % (1000 * 60)) / 1000);

	document.getElementById('days_text').innerHTML = days + 'd';
	document.getElementById('hours_text').innerHTML = hours;
	document.getElementById('mins_text').innerHTML = minutes;
	document.getElementById('secs_text').innerHTML = seconds;

	document.getElementById('finish_time').innerHTML = years_fin + 'y ' + days_fin + 'd ' + hours_fin + ':' + minutes_fin + ':' + seconds_fin;

	var finish_date = now + time_finish;
	var finish_date_obj = new Date(finish_date)
	document.getElementById('finish_date_str').innerHTML = finish_date_obj.toGMTString();

	document.getElementById('tss').innerHTML = years_tss + 'y ' + days_tss + 'd ' + hours_tss + ':' + minutes_tss + ':' + seconds_tss;

}, 1000);