var time = document.getElementsByTagName('h1')[0];
var doill=0,second=0,minute=0,hour=0;
var olEl = document.getElementsByTagName('ol')[0];
//setInterval -> kodiig hyzgaargui ajiluulna
function watch(){
	// ternary operator ? ;
		doill++;
	if(doill==100){
		second++;
		doill=0;
	if(second==60){
		minute++;
		second=0;
		if(minute==60){
			minute=0;
			hour++;
		}
	}
	}
	var d = doill<10 ? "0"+doill : doill
	var s = second<10 ? "0"+second : second;
	var m = minute<10 ? "0"+minute : minute;
	var h = hour<10 ? "0"+hour : hour;
	time.innerText=h+":"+m+":"+s+":"+d;
}
var up;
function start(){
	up=setInterval(watch,10);
	document.querySelector(".start").disabled=true;
	document.querySelector(".stop").disabled=false;
}
function stop(){
	clearInterval(up);
	document.querySelector(".start").disabled=false;
	document.querySelector(".stop").disabled=true;
}
function reset(){
	doill=0;
	second=0;
	minute=0;
	hour=0;
	clearInterval(up);
	time.innerText="00:00:00:0";
	document.querySelector(".start").disabled=false;
	document.querySelector(".stop").disabled=false;
	olEl.innerText="";
}
function lap(){
	// document.createElement("tagName"); shineer tag uusgeh
	var liEl = document.createElement('li');
	console.log(liEl);
	liEl.innerText=time.innerText;
	// .append(varName); -> tag dotor tag oruulna
	olEl.append(liEl);
}