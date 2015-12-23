

if (window.Event) 
document.captureEvents(Event.MOUSEUP); 

function nocontextmenu() 
{ 
event.cancelBubble = true 
event.returnValue = false; 

return false; 
} 

function norightclick(e) 
{ 
if (window.Event) 
{ 
if (e.which == 2 || e.which == 3) 
return false; 
} 
else 
if (event.button == 2 || event.button == 3) 
{ 
event.cancelBubble = true 
event.returnValue = false; 
return false; 
} 

} 
if (document.layers) { 
document.captureEvents(Event.MOUSEDOWN); 
} 
document.oncontextmenu = nocontextmenu; 
document.onmousedown = norightclick; 
document.onmouseup = norightclick; 
//--> 

//Disable select-text script (IE4+, NS6+)- By Andy Scott
//Exclusive permission granted to Dynamic Drive to feature script

function disableselect(e){
return false
}

function reEnable(){
return true
}

//if IE4+
document.onselectstart=new Function ("return false")

//if NS6
if (window.sidebar){
document.onmousedown=disableselect
document.onclick=reEnable
}


