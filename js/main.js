function $(id){
	return document.getElementById(id);
}
function $$(cls,o){
	if(o===undefined)o=document;
	return o.getElementsByClassName(cls);
}
function $$$(tag,o){
	return o.getElementsByTagName(tag);
}
///css(object,{xxx:xxx,xxx:xxx});
function css(o,s){
	if(!o)return;
	if(o.length){
		for(let i=o.length;i--;){
			if(!o[i])continue;
			Object.assign(o[i].style,s);
		}
	}else{
		Object.assign(o.style,s);
	}
}