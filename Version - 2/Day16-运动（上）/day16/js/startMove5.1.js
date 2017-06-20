function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
function startMove(obj,attr,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//1.获取当前值
		var cur = attr == "opacity" ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
		//2.计算速度
		var speed = (target - cur) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		//3.检测停止
		if(cur == target){
			clearInterval(obj.timer);
		}else{
			//设置运动
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			}else{
				obj.style[attr] = cur + speed + "px";
			}
		}
		
	},30);
}
