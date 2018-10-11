document.addEventListener('DOMContentLoaded', ()=>{
	var main = document.querySelector(".main");
	var boxSearch = document.querySelector(".box-search");
	var exit = document.querySelector(".exit");

	boxSearch.addEventListener("click", ()=>{
		main.style.animation = "main-active 0.5s both";
		boxSearch.style.animation = "box-search-active 0.5s both";
		exit.style.animation = "exit-active 0.3s 0.1s both";
	});

	exit.addEventListener("click", ()=>{
		main.style.animation = "main-close 0.5s both";
		boxSearch.style.animation = "box-search-close 0.5s both";
		exit.style.animation = "exit-close 0.3s 0.1s both";
	});
});