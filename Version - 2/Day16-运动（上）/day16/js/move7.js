
//缓冲运动
function startMove(obj,json){
	//设置计时器
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var stop = true;  
		//假设json中所有的属性都已经达到目标值
		
		for(var attr in json){
			//1.获取当前值
			var cur = 0;
			if(attr == "opacity"){
				cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
			}else{
				cur = parseInt(getStyle(obj,attr));
			}
			
			
			//2.计算速度
			var speed = (json[attr] - cur) / 8; //基数
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			
			//3.判断json中所有的对象是否达到目标值
			if(cur != json[attr]){
				stop = false;
			}
			//4.设置运动
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			}else{
				obj.style[attr] = cur + speed + "px";
			}
				
			
			console.log(cur + ":" + json[attr] + ":" + speed);
		}
		//检测停止
		if(stop){
			clearInterval(obj.timer);
		}
	},30)
}
//获取内部样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
