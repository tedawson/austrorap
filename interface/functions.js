//dissertation interface js

//eventListeners

window.onload = init;

function init(){
	document.getElementById("Schlaffer1").addEventListener("mouseover", function(){biblref(schlaffer)});
	document.getElementById("Schlaffer1").addEventListener("mouseover", function(){clickie("Reclam Page for Volume")});
	document.getElementById("Schlaffer1").addEventListener("mouseout", function(){clearRef()});	
	document.getElementById("PotStew").addEventListener("mouseover", function(){clickie("Wikipedia article on this.")});
	document.getElementById("PotStew").addEventListener("mouseout", function(){clearRef()});	
	document.getElementById("fn1").addEventListener("mouseover", function(){footnote("Hover on footnotes to read them. And if they contain a reference, it shows up in the reference panel. See?")});
	document.getElementById("fn1").addEventListener("mouseover", function(){biblref(fnbook)});
	document.getElementById("fn1").addEventListener("mouseout", function(){unfootnote()});
	document.getElementById("fn1").addEventListener("mouseout", function(){clearRef()});
	//bibliographic for loop
	/*	for (i = 0; i < 3; i++){
		var song = soundArray[i];
		document.getElementById(song.location).addEventListener("click", function(){audioPlay2(song)});
	}*/	
	document.getElementById("aq1").addEventListener("click", function(){audioPlay2(Nazar1)});
	document.getElementById("aq1").addEventListener("mouseover", function(){biblref(Nazar1)});
	document.getElementById("aq1").addEventListener("mouseout", function(){clearRef()});
	//document.getElementById("aq1").addEventListener("dblclick", function(){audioPlay3(Nazar1)});
	document.getElementById("aq2").addEventListener("click", function(){audioPlay2(DynDel1)});
	document.getElementById("aq2").addEventListener("mouseover", function(){biblref(DynDel1)});
	document.getElementById("aq2").addEventListener("mouseout", function(){clearRef()});
	//document.getElementById("aq2").addEventListener("dblclick", function(){audioPlay3(DynDel1)});
	document.getElementById("aq3").addEventListener("click", function(){audioPlay2(Texta1)});
	document.getElementById("aq3").addEventListener("mouseover", function(){biblref(Texta1)});
	document.getElementById("aq3").addEventListener("mouseout", function(){clearRef()});
	//document.getElementById("aq3").addEventListener("dblclick", function(){audioPlay3(Texta1)});
	document.getElementById("media").addEventListener("click", function(){audioSwap()});
}

//sound constructor
function soundEntry(author, title, source, location){
	this.author = author;
	this.title = title;
	this.source = source;
	this.location = location;
}

//sound files
var Nazar1 = new soundEntry("Nazar", "Sch&uumlsse in die Luft", "SoundFiles/1aNazarSchuesse.mp3", "aq1");
var DynDel1 = new soundEntry("Dynamite Deluxe", "Ladies & Gentlemen", "SoundFiles/LadiesAndGentleman1.mp3", "aq2");
var Texta1 = new soundEntry("Texta", "Es bahnt sich an", "SoundFiles/EsBahntSichAn1.mp3","aq3");

var soundArray = [Nazar1, Texta1, DynDel1]
//basic functions

function audioSwap(){
	var x = document.getElementById("playing").innerHTML;
	var y = document.getElementById("bobby").src;
	document.getElementById("playing2").innerHTML = x;
	document.getElementById("bobby2").src = y;
}

function audioPlay2(song){
	//var g = soundArray[song];
	document.getElementById("playing").innerHTML = song.title;
	document.getElementById("bobby").src = song.source;
}

function audioPlay3(song){
	document.getElementById("playing2").innerHTML = song.title;
	document.getElementById("bobby2").src = song.source;
}

function audioPlay(trackName, trackSource){
	document.getElementById("playing").innerHTML = trackName;
	document.getElementById("bobby").src = trackSource;
}

function biblref(refName){
	document.getElementById("entryHere").innerHTML = refName.author + ". " + refName.title;
}

function clickie(future	){
	document.getElementById("clickLand").innerHTML = "Click to see: " + future;
}

function clearRef(){
	document.getElementById("entryHere").innerHTML = "";
	document.getElementById("clickLand").innerHTML = "";
}

//var footnotes = 0;

function footnote(content){
	document.getElementById("fn1").innerHTML = content;
}

/*function fnClick(){
	footnotes += 1;
}*/

function unfootnote(){
	//if (footnotes == 0){
	document.getElementById("fn1").innerHTML = "NOTE";
	//}
}



//bibliography constructor

function biblEntry(author, article, title, editor, place, publisher, year, medium) {
	this.author = author;
	this.article = article;
	this.title = title;
	this.place = place;
	this.publisher = publisher;
	this.year = year;
	this.medium = medium
}
	
//bibliography entries

var schlaffer = new biblEntry("Schlaffer, Heinz", 0, "Geistersprache: Zweck und Mittel der Lyrik", 0, "Stuttgart", "Reclam", "2015", "Print");
var fnbook = new biblEntry("Note, Guy", 0, "The Guide to Footnotes", 0, 0, 0, 0, 0)






//first sound element creator	
	
/*var x = document.createElement("SOURCE");
	var y = document.createAttribute("src");
	y.value = "SoundFiles/Kanax.mp3";
	var z = document.createAttribute("type");
	z.value = "audio/mpeg";
	x.appendChild(y);
	x.appendChild(z);
	document.getElementById("bobby").appendChild(x);*/
