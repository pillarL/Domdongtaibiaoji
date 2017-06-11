function displayabbreviations() {
	if(!document.getElementsByTagName){
		return false;
	}
	if(!document.createElement){
		return false;
	}
	if(!document.createTextNode){
		return false;
	}
	//取得所有的缩略词
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length<1){
		return false;
	}
	var defs=new Array();
	//遍历这些缩略词
	for (var i=0;i<abbreviations.length;i++) {
		var current_abbr = abbreviations[i];
		if(current_abbr.childNodes.length<1){
			continue;                                               //IE平稳退化。
		}
		var definition = current_abbr.getAttribute('title');
		var key = current_abbr.lastChild.nodeValue;
		defs[key]= definition;
	}
	//创建定义列表
	var dlist=document.createElement("dl");
	//遍历定义
	for (key in defs) {
		var dtitle=document.createElement('dt');
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var definition=defs[key];
		var ddsec=document.createElement("dd");
		var ddsec_text=document.createTextNode(definition);
		ddsec.appendChild(ddsec_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddsec);
	}
	if(dlist.childNodes.length<1){
		return false;
	}
	//创建标题
	var header = document.createElement("h2");
	var header_text=document.createTextNode("abbreiations");
	header.appendChild(header_text);
	//添加到页面主体
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}
window.onload=function(){
	displayabbreviations();
};
