var sass = require('sass')
var fs = require('fs')

var base_src = "./scss/"
var base_out = "./public/stylesheets/"

let sheets = [
	"style",
	"keyboard-controls"
]

// keyboard controls;


make_sheet = function (src) {
	var infile = base_src + src + ".scss";
	var outfile = base_out + src + ".css";
	sass.render({
		file: infile,
		outFile: outfile,
	}, function (err, result) {
		// console.log(err);
		// console.log(result);
		// node-style callback from v3.0.0 onwards
		if (!err) {
			// No errors during the compilation, write this result on the disk
			fs.writeFile(outfile, result.css, function (err2) {
				if (!err2) {
					console.log(err2)
				}
			});
		}
	});
}
sheets.forEach(s => make_sheet(s))


// // main
// var main_src = './scss/keyboard-controls.scss'
// sass.render({
// 	file: '.keyboard-controls.scss',
// 	outFile: '.keyboard-controls.css'
// }, function (err, result) {
// 	console.log(err);
// 	console.log(result);
// });