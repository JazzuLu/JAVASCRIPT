/*
 * 构造函数
 * 实例属性
 * 原型方法
 * 1.鼠标按下时：fnDown
 * 		获取鼠标的相对坐标值
 * 2.鼠标移动时：fnMove
 * 		改变对象的坐标值
 * 3.鼠标弹起时：fnUp
 * 		取消移动事件
 */
function Drag(id){
	//实例属性
	this.disX = 0;
	this.disY = 0;
	this.ele = document.getElementById(id);
	var that = this;
	this.ele.onmousedown = function(evt){
		that.fnDown(evt);
	}
}
//原型方法
//当鼠标按下时所执行的方法
Drag.prototype.fnDown = function(evt){
	var e = evt || window.event;
	this.disX = e.offsetX;
	this.disY = e.offsetY;
	var that = this;
	document.onmousemove = function(evt){
		that.fnMove(evt);
	}
	document.onmouseup = this.fnUp;
}
//当鼠标移动时所执行的方法
Drag.prototype.fnMove = function(evt){
	var e = evt || window.event;
	this.ele.style.left = e.clientX - this.disX + "px";
	this.ele.style.top = e.clientY - this.disY + "px";
}
//当鼠标弹起时所执行的方法
Drag.prototype.fnUp = function(){
	document.onmousemove = null;
}
