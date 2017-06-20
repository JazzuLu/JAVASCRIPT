function Drag(id){
	//实例属性
	this.oDiv = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
	var that = this;
	this.oDiv.onmousedown = function(evt){
		that.fnDown(evt);
	}
}
//原型方法
Drag.prototype.fnMove = function(evt){
	var e = evt || window.event;
	this.oDiv.style.left = e.clientX - this.disX + "px";
	this.oDiv.style.top = e.clientY - this.disY + "px";
}
Drag.prototype.fnUp = function(){
	document.onmousemove = null;
}
Drag.prototype.fnDown = function(evt){
	var e = evt || window.event;
	var that = this;
	this.disX = e.offsetX;
	this.disY = e.offsetY;
	document.onmousemove = function(evt){
		that.fnMove(evt);
	}
	document.onmouseup = this.fnUp;
}


//变量
//函数
//属性
//方法