var timer = null;
//缓冲运动
function startMove(obj,attr,target){
	//设置计时器
	clearInterval(timer);
	timer = setInterval(function(){
		//获取当前值
		var cur = parseInt(getStyle(obj,attr));
		console.log(cur);
		//计算速度
		var speed = (target - cur) / 8; //基数
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		//检测停止
		if(cur == target){
			clearInterval(timer);
		}else{
			obj.style[attr] = cur + speed + "px";
		}
		console.log(cur + ":" + target + ":" + speed);
		
	},30)
}
//获取内部样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
