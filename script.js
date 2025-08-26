function highlight() {
    //Write your code here
	let highlight = document.querySelectorAll("strong");
	for(let i=0;i<highlight.length;i++){
		highlight[i].style.color="rgb(0, 128, 0)";
	}
	
 

}


function return_normal() {
    //Write your code here
let highlight = document.querySelectorAll("strong");
	for(let i=0;i<highlight.length;i++){
		highlight[i].style.color="rgb(0, 0, 0)";
	}
    
}
