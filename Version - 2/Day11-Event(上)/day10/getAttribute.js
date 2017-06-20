function getAttribute(obj){
	return obj.getAttribute("class") ? obj.getAttribute("class") : obj.getAttribute("className");
}