function random(min,max){
	if(typeof min == "number" && typeof max == "number"){  //34   67
		if(min > max){
			var t = min;
			min = max;
			max = t;
		}
	}else if(!isNaN(min) && !isNaN(max)){   //"30"  "50"
		min = Number(min);
		max = Number(max);
		if(min > max){
			var t = min;
			min = max;
			max = t;
		}
	}else{
		return "您输入的是非数字！";   //"ab"  "cd"
	}
	
	return Math.floor(Math.random() * (max - min + 1)) + min;
}