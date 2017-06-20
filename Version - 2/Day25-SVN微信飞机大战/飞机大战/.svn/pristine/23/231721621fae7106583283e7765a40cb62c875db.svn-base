function removeChild(node){
	var child = node.childNodes;	 
	for(var i = 0; i < child.length;i ++){
		if(child[i].nodeType === 3 && /^\s+$/.test(child[i].nodeValue){
		 	node.removeChild(child[i]);
		}
	}
	return node;
}