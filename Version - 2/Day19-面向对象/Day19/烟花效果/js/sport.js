//获取非行内样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//完美运动框架
function startMove(obj,json,fn){
	//先清计时器
	clearInterval(obj.timer);
	//开启新的计时器
	obj.timer = setInterval(function(){
		//1.设置开关
		var stop = true;
		//2.遍历json
		for(var attr in json){
			//1.获取初值
			var cur = attr == 'opacity' ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
			//2.计算速度
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//3.检测属性值是否全部达到目标值
			if(cur != json[attr]){
				stop = false;
			}
			//4.设置运动
			if(attr == 'opacity'){
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
				obj.style.opacity = (cur + speed) / 100;
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		//3.停止计时器
		if(stop){
			clearInterval(obj.timer);
			fn && fn();
		}
	},30);
}
