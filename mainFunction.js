
function my_theme(theme) {
	var fg_color = '';
	var bg_color = '';
if (theme == null){
		theme = 'light';
		}
	if (theme == 'light') {
		fg_color = 'black';
		bg_color = 'white';
	}
	else if (theme == 'dark') {
		fg_color = 'white';
		bg_color = 'black';
}
	document.body.style.color = fg_color;
	document.body.style.backgroundColor = bg_color;
	localStorage.setItem('theme', theme);

}
var saved_theme = localStorage.getItem('theme');
my_theme(saved_theme);
