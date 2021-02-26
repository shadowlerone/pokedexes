previousItem = function (parent){
	var children = parent.children;
}
setupKeyInteraction = function () {
	Array.from(document.getElementById("dex-list").children).forEach(element => element.classList.remove('selected'));
}

load = function (){
	document.getElementById("dex-list").addEventListener("click", setupKeyInteraction)
}
load()