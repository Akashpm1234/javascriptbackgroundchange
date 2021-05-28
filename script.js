var  button = document.querySelector('button');
var body =document.querySelector('body');
var colors = ['red','green','yellow','blue','pink','hotpink','purple'];
var temp;

 body.style.backgroundColor='blue';


function backgroundchange(){
	temp=parseInt(Math.random()*colors.length);
	body.style.backgroundColor=colors[temp]
}


//
//const button = document.querySelector('button')
//const body = document.querySelector('body')
//const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
//
//body.style.backgroundColor = 'violet'
//button.addEventListener('click', changeBackground)
//
//function changeBackground(){
//const colorIndex= parseInt(Math.random()*colors.length)
//body.style.backgroundColor = colors[colorIndex]
//}