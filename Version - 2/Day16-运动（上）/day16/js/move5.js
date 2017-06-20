
//缓冲运动
function startMove(obj,attr,target){
	//设置计时器
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//获取当前值
		var cur = 0;
		if(attr == "opacity"){
			cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
		}else{
			cur = parseInt(getStyle(obj,attr));
		}
		
		console.log(cur);
		//计算速度
		var speed = (target - cur) / 8; //基数
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		//检测停止
		if(cur == target){
			clearInterval(obj.timer);
		}else{
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			}else{
				obj.style[attr] = cur + speed + "px";
			}
			
		}
		console.log(cur + ":" + target + ":" + speed);
		
	},30)
}
//获取内部样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
