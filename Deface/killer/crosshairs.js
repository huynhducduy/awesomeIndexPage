//Crosshairs - http://www.btinternet.com/~kurt.grigg/javascript

if  ((document.getElementById) && 
window.addEventListener || window.attachEvent){

(function(){

var hairCol = "#ff0000";

var d = document;
var my = -10;
var mx = -10;
var r;
var vert = "";
var hori = "";

var idx = document.getElementsByTagName('div').length;

var thehairs = "<div id='ver"+idx+"' style='position:absolute;top:-2px;left:-2px;"
+"height:1px;width:1px;font-size:1px;border-left:dotted 1px "+hairCol+"'><\/div>"
+"<div id='hor"+idx+"' style='position:absolute;top:-2px;left:-2px;"
+"height:1px;width:1px;font-size:1px;border-top:dotted 1px "+hairCol+"'><\/div>";
document.write(thehairs);

var pix = "px";
var domWw = (typeof window.innerWidth == "number");
var domSy = (typeof window.pageYOffset == "number");

if (domWw) r = window;
else{ 
  if (d.documentElement && 
  typeof d.documentElement.clientWidth == "number" && 
  d.documentElement.clientWidth != 0)
  r = d.documentElement;
 else{ 
  if (d.body && 
  typeof d.body.clientWidth == "number")
  r = d.body;
 }
}


function hairs(){
if (domWw){
 vert.height = r.innerHeight - 2 + pix;
 hori.width = '100%';
 }
else{
 vert.height = r.clientHeight - 2 + pix;
 hori.width = r.clientWidth + pix;
 }
}


function scrl(yx){
var y,x;
if (domSy){
 y = r.pageYOffset;
 x = r.pageXOffset;
 }
else{
 y = r.scrollTop;
 x = r.scrollLeft;
 }
return (yx == 0)?y:x;
}


function mouse(e){
var msy = (domSy)?window.pageYOffset:0;
if (!e) e = window.event;    
 if (typeof e.pageY == 'number'){
  my = e.pageY - 5 - msy;
  mx = e.pageX - 4;
 }
 else{
  my = e.clientY - 6 - msy;
  mx = e.clientX - 6;
 }
vert.top = scrl(0) + pix;
vert.left = mx + pix;
hori.top = my + scrl(0) + pix;
}


function ani(){
vert.top = scrl(0) + pix;
hori.top = my + scrl(0) + pix;
setTimeout(ani,300);
}


function init(){
vert = document.getElementById("ver"+idx).style;
hori = document.getElementById("hor"+idx).style;
hairs();
ani();
}

if (window.addEventListener){
 window.addEventListener("load",init,false);
 window.addEventListener("resize",hairs,false);
 document.addEventListener("mousemove",mouse,false);
}  
else if (window.attachEvent){
 window.attachEvent("onload",init);
 window.attachEvent("onresize",hairs);
 document.attachEvent("onmousemove",mouse);
} 

})();
}//End.