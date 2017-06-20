function SubDrag(id){
	//经典继承
	Drag.call(this,id);
}
//原型链继承
for(var i in Drag.prototype){
	SubDrag.prototype[i] = Drag.prototype[i];
}
//当鼠标移动时所执行的方法
SubDrag.prototype.fnMove = function(evt){
	var e = evt || window.event;
	//设置边界
	var l = e.clientX - this.disX;
	var t = e.clientY - this.disY;
	
	if ( l < 0){
		l = 0;
	}else if(l > document.documentElement.clientWidth - this.ele.offsetWidth){
		l = document.documentElement.clientWidth - this.ele.offsetWidth;
	}
	if(t < 0){
		t = 0;
	}else if(t > document.documentElement.clientHeight - this.ele.offsetHeight){
		t = document.documentElement.clientHeight - this.ele.offsetHeight;
	}
	this.ele.style.left = l + "px";
	this.ele.style.top = t + "px";
}