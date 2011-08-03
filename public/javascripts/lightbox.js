function FSLightbox(_1){
this.config=_1;
this.ie=document.all;
this.ns6=document.getElementById&&!document.all;
this.closeHandle=document.getElementById("fsLightboxClose"+_1.form);
this.handle=document.createElement("div");
this.handle.style.background="#000";
this.handle.style.border="#FFF solid 2px";
if(_1.handlePosition=="right"){
this.handle.style.right="0px";
this.handle.style.top="200px";
this.handleAngle="-90";
this.handle.style.borderRight="0px";
this.handle.style.position="absolute";
this.handle.onmouseover=function(){
_2.handle.style.paddingRight="10px";
};
this.handle.onmouseout=function(){
_2.handle.style.paddingRight="0px";
};
}else{
if(_1.handlePosition=="bottomLeft"){
this.handle.style.left="100px";
this.handle.style.bottom="0px";
this.handleAngle="0";
this.handle.style.borderBottom="0px";
this.handle.style.position="fixed";
this.handle.onmouseover=function(){
_2.handle.style.paddingBottom="10px";
};
this.handle.onmouseout=function(){
_2.handle.style.paddingBottom="0px";
};
}else{
if(_1.handlePosition=="bottomRight"){
this.handle.style.right="100px";
this.handle.style.bottom="0px";
this.handleAngle="0";
this.handle.style.borderBottom="0px";
this.handle.style.position="fixed";
this.handle.onmouseover=function(){
_2.handle.style.paddingBottom="10px";
};
this.handle.onmouseout=function(){
_2.handle.style.paddingBottom="0px";
};
}else{
if(_1.handlePosition=="topLeft"){
this.handle.style.left="100px";
this.handle.style.top="0px";
this.handleAngle="0";
this.handle.style.borderTop="0px";
this.handle.style.position="absolute";
this.handle.onmouseover=function(){
_2.handle.style.paddingTop="10px";
};
this.handle.onmouseout=function(){
_2.handle.style.paddingTop="0px";
};
}else{
if(_1.handlePosition=="topRight"){
this.handle.style.right="100px";
this.handle.style.top="0px";
this.handleAngle="0";
this.handle.style.borderTop="0px";
this.handle.style.position="absolute";
this.handle.onmouseover=function(){
_2.handle.style.paddingTop="10px";
};
this.handle.onmouseout=function(){
_2.handle.style.paddingTop="0px";
};
}else{
this.handle.style.left="0px";
this.handle.style.top="200px";
this.handleAngle="-90";
this.handle.style.borderLeft="0px";
this.handle.style.position="absolute";
this.handle.onmouseover=function(){
_2.handle.style.paddingLeft="10px";
};
this.handle.onmouseout=function(){
_2.handle.style.paddingLeft="0px";
};
}
}
}
}
}
this.handleImage=_1.handleImage+"&angle="+this.handleAngle;
this.handleLink="<img src=\""+this.handleImage+"\" border=\"0\" />";
this.handle.innerHTML="<a href=\"#\" style=\"color:#FFF; text-decoration:none;\">"+this.handleLink+"</a>";
var _2=this;
this.handle.onclick=function(){
_2.show(_2.config.form);
return false;
};
var p=document.getElementsByTagName("div")[0];
p.parentNode.insertBefore(this.handle,p);
this.closeHandle.onclick=function(){
_2.hide(_2.config.form);
return false;
};
this.fadeOverlay=document.createElement("div");
this.fadeOverlay.style.display="none";
this.fadeOverlay.style.zIndex="1";
this.fadeOverlay.style.position="absolute";
this.fadeOverlay.style.background="#000";
this.fadeOverlay.style.overflow="hidden";
this.fadeOverlay.innerHTML="&nbsp";
this.fadeOverlay.onclick=function(){
_2.fade("out");
_2.hide();
};
p.parentNode.insertBefore(this.fadeOverlay,p);
var _4=document.getElementById("fsLightbox"+_1.form);
_4.style.position="absolute";
_4.style.background="#DDD";
_4.style.zIndex="10000";
_4.style.width="650px";
_4.style.height="500px";
_4.style.padding="5px";
_4.style.scroll="auto";
_4.style.display="none";
this.show=function(){
this.fade("in");
var _5=document.getElementById("fsLightbox"+this.config.form);
_5.style.display=_5.style.display!="block"?"block":"none";
var _6=(document.documentElement.scrollTop)?document.documentElement.scrollTop:document.body.scrollTop;
var x=(document.body.clientWidth/2)-(_5.offsetWidth/2);
var y=((this.iecompattest().clientHeight/2+_6))-(_5.offsetHeight/2);
_5.style.left=x+"px";
_5.style.top=((y>_6)?y:_6)+"px";
};
this.hide=function(){
this.fade("out");
document.getElementById("fsLightbox"+this.config.form).style.display="none";
};
this.fade=function(_9){
var _a=this.ie&&!window.opera?this.iecompattest().scrollLeft+this.iecompattest().clientWidth:window.pageXOffset+window.innerWidth;
var _b=this.ie&&!window.opera?this.iecompattest().scrollTop+this.iecompattest().clientHeight:window.pageYOffset+window.innerHeight;
this.fadeOverlay.style.left="0px";
this.fadeOverlay.style.top="0px";
this.fadeOverlay.style.width=_a+"px";
this.fadeOverlay.style.height=_b+"px";
if(_9=="in"&&this.getOpacity()>0.6){
return;
}
if(_9=="out"&&this.getOpacity()<0.1){
return;
}
var _c=_9=="in"?0:0.7;
this.fadeOverlay.style.display="block";
this._fader(_9,_c);
};
this._fader=function(_d,_e){
if(_d=="in"){
_e+=0.05;
}else{
_e-=0.05;
}
if(this.fadeOverlay.style.filter!=null){
this.fadeOverlay.style.filter="alpha(opacity="+(_e*100)+")";
this.fadeOverlay.style.opacity=_e;
}else{
if(this.fadeOverlay.filters&&this.fadeOverlay.filters[0]){
if(typeof this.fadeOverlay.filters[0].opacity=="number"){
this.fadeOverlay.filters[0].opacity=_e*100;
}else{
this.fadeOverlay.style.filter="alpha(opacity="+(_e*100)+")";
}
}else{
if(typeof this.fadeOverlay.style.MozOpacity!="undefined"&&_e!=""){
this.fadeOverlay.style.MozOpacity=_e;
}else{
this.fadeOverlay.style.opacity=_e;
}
}
}
if(_d=="in"&&_e>=0.7){
return;
}else{
if(_d=="out"&&_e<=0){
this.fadeOverlay.style.display="none";
return;
}
}
var _f=this;
setTimeout(function(){
_f._fader(_d,_e);
},10);
};
this.getOpacity=function(){
var _10=-1;
_10=this.fadeOverlay.style.opacity;
if(_10<0){
if(this.fadeOverlay.style.filter!=null){
var tmp=this.fadeOverlay.style.filter.replace("alpha(opacity=","");
_10=parseInt(tmp.replace(")",""));
}else{
_10=0;
}
}
return _10;
};
this.iecompattest=function(){
return document.compatMode&&document.compatMode!="BackCompat"?document.documentElement:document.body;
};
this.getposOffset=function(_12,_13){
var _14=_13=="left"?_12.offsetLeft:_12.offsetTop;
var _15=_12.offsetParent;
while(_15!=null){
_14=_13=="left"?_14+_15.offsetLeft:_14+_15.offsetTop;
_15=_15.offsetParent;
}
return _14;
};
};

