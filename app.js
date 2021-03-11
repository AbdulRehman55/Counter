let counter=document.querySelector('.counter');
let addcount=document.querySelector('#add-count-btn');
let lowercount=document.querySelector('#lower-count-btn');

let count=0;

addcount.addEventListener('click',addition)
lowercount.addEventListener('click',subtraction)

function addition(){

count+=1;

counter.innerHTML=count;

if(counter.innerHTML==='0'){
	counter.style.color='blue';
}
else if(counter.innerHTML>'0')
{counter.style.color='green'}


counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration
:500,fill:'forwards'});


};
function subtraction(){

	count-=1;
	counter.innerHTML=count;

	if(counter.innerHTML<'0'){

		counter.style.color='red';
	}
	else if(counter.innerHTML==='0')
	{

counter.style.color='blue';

	}




	counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration
:500,fill:'forwards'});
};