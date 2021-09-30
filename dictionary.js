

show1 = function(i) {

document.getElementById('word_text').innerHTML = dictionary[i].word;
document.getElementById('definition').innerHTML = "<br>" + dictionary[i].def;

//var list="";

//for (var j=0; j < dictionary[i].rel.length; j++) {

//	list += "<li>" + dictionary[i].rel[j] + "</li>";
//	document.getElementById('related').innerHTML = list;
	
//	}


}

function getrandomdrink()
{
	
	var item = Math.floor(Math.random() * dictionary.length);
	show1(item);
}

setTimeout(getrandomdrink, 1000);

search = function() {
	query = document.getElementById('search').value;
	
	found = -1; // initialize
	
	for (var i = 0 ; i < dictionary.length; i++) {
		if (query == dictionary[i].word) {
			found = i;
			break;
		}
	}
	
	
	

	if (found >= 0) { 
	
		show1(found);
	
	}
	
	
	
}



