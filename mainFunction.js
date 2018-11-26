
function my_theme(theme) {
	var fg_color = '';
	var bg_color = '';
if (theme == null){
		theme = 'light';
		}
	if (theme == 'light') {
		fg_color = 'black';
		bg_color = 'white';
		link_color = 'black';
	}
	else if (theme == 'dark') {
		fg_color = 'white';
		bg_color = 'black';
		link_color = 'white';
	}
	else if (theme == 'blue') {
		fg_color = 'white';
		bg_color = 'blue';
		link_color = 'blue';
	}
	else if (theme == 'red') {
		fg_color = 'white';
		bg_color = 'red';
		link_color = 'red';
	}	
	document.body.style.color = fg_color;
	document.body.style.backgroundColor = bg_color;
	document.getElementById("link").style.color = link_color;
	document.getElementById("link2").style.color = link_color;
	document.getElementById("link3").style.color = link_color;
	document.getElementById("link4").style.color = link_color;
	localStorage.setItem('theme', theme);

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

var saved_theme = localStorage.getItem('theme');
my_theme(saved_theme);
