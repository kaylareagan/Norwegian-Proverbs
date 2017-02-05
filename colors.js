
const colors = ['BlueViolet', 'pink', 'aquamarine', 
'CadetBlue', 'aqua', 'purple', 'CornflowerBlue', 'peach', 
'MediumAquaMarine', 'plum',

 ]

const colors_length = colors.length;

let pickRandomColors = function(){
	let random_num = Math.floor(Math.random() * colors_length);
	return colors[random_num];
}



