/*
 * 一、获取非行内样式
 * 	1. 兼容
 * 	IE     对象.currentStyle.属性
 * 	标准          getComputedStyle(对象,1).属性
 * 二、运动框架
 * 1.计时器
 * 		1》设置开关：作用何时退出计时器
 * 		2》遍历json
 * 			（1）获取对象属性的当前值
 * 				注：兼容
 * 					透明度（处理小数）
 * 					其它属性值（处理单位）
 * 			（2）计算速度
 * 				匀速运动（处理停止条件）
 * 				缓冲运动（处理小数）
 * 			（3）判断json中所有的属性是否达到目标值
 * 			（4）设置运动（改变CSS值）
 * 		3》检测停止（当开关为true时，停止计时器）
 */
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
function sport(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var stop = true;
		for(var attr in json){
			//获取当前值
			var current = 0;
			if(attr == "opacity"){
				current = parseInt(parseFloat(getStyle(obj,attr)) * 100);
				// "0.34567"     0.34567 * 100 = 34.567     34
			}else{
				current = parseInt(getStyle(obj,attr));
			}
			//计算速度
			//缓冲运动
			var speed = (json[attr] - current) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(current != json[attr]){
				stop = false;
			}
			if(attr == "opacity"){
				obj.style.opacity = (current + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (current + speed) + ")";
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
		if(stop){
			clearInterval(obj.timer);
			fn && fn();
			/*
			if(fn){
				fn();
			}
			*/
		}
	},30);
}
