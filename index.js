// informacje o obrazku

/*
var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem!'.blue);
	console.log(data);
	fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
		if (err) throw err;
		console.log('Zapisano!'.blue);
		fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
			console.log('Dane po zapisie'.blue);
			console.log(data);
		});
	});
});
*/
//-----------------------------------------------------------//

//odczytanie plików folderu i napisanie ich w nowym pliku

var fs = require('fs');
var colors = require('colors');

fs.readdir('.', 'utf-8', function(err, files) {
	console.log('Pliki katalogu zadanie_13_7:'.green);
	console.log(files);

	fs.writeFile('./info.txt', files, function(err) {
	if (err) throw err;
	console.log('Zapisano w pliku info.txt!'.red);
	});
});





/*
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
	var statMode = new StatMode(stats);
	console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
	console.log(data);
});

fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});
*/