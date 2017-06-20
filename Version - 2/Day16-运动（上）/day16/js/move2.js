var timer = null;
function startMove(obj,attr,target){
	//设置计时器
	clearInterval(timer);
	timer = setInterval(function(){
		//获取当前值
		var cur = parseInt(getStyle(obj,attr));
		console.log(cur);
		//计算速度
		var speed = target > cur ? 7 : -7;
		//检测停止
		if(Math.abs(target - cur) < 7){
			obj.style[attr] = target + "px";
			clearInterval(timer);
		}else{
			obj.style[attr] = cur + speed + "px";
		}
		document.title = cur + ":" + target + ":" + speed;
	},30)
}
//获取内部样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
