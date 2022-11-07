### Tutorial

click [here] (https://muzammil-mahmood.github.io/tutorial/) to see the project.

## Explaining Calculator Project

##### __ Myself Muzammil Mahmood__
In this project I made a calculator using HTML, CSS, and JavaScript. I used different classes, id, names, variables and functions


so, here is my JavaScript code:


``` JavaScript
'use strict';

function loadnum(val)
{
	//alert(val);
	var press=0, oldpressval="", valuerelatedto="";
	
	press=val;
	oldpressval=document.getElementById("inputid2").value;
	
	oldpressval=oldpressval+press;
	document.getElementById("inputid").value=oldpressval;
	document.getElementById("inputid2").value=oldpressval;
}




function resultdisplay()
{
	var oldpressval="", rslt=0;
	oldpressval=document.getElementById("inputid2").value;
	rslt=eval(oldpressval) 
	document.getElementById('nowid').innerHTML=rslt;
	document.getElementById("inputid2").value="";
}

function clearall()
{
	document.getElementById("inputid").value="";
	document.getElementById("inputid2").value="";
	document.getElementById('nowid').innerHTML="";
}
```

In this project overall, I use three functions 
1: loadnum
2: resultdisplay
3: clearall

I used "get element by id" to grab the id to perform its function on the web page.

