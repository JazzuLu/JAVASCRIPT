function drag(obj){
	obj.onmousedown = function(evt){
		var e = evt || window.event;
		//获取鼠标当前的相对坐标值
		var disX = e.offsetX;
		var disY = e.offsetY;
		document.onmousemove = function(evt){
			var e = evt || window.event;
			obj.style.left = e.clientX - disX + "px";
			obj.style.top = e.clientY - disY + "px";
		}
		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}
	//去掉拖拽的默认行为（禁拖行为）;
	document.ondragstart = function(){
		return false;
	}
}
