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