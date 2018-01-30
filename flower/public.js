//寻找id名
function $id(id){
	return document.getElementById(id);
}
//随机函数
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min);
}
//随机获取六位数的颜色值
function getColor(){
	var str="0123456789abcdef";
	var color="#";
	for(var i=1;i<=6;i++){
		color+=str.charAt(rand(0,15));
	}return color;
}

//日期时间格式封装
function dateToString(sign){
	sign = sign || "-";
	var d = new Date ();
	var y = d.getFullYear();
	var m = toTwo(d.getMonth()+1);
	var _date = toTwo(d.getDate());
	var h = toTwo(d.getHours());
	var min = toTwo(d.getMinutes());
	var sec = toTwo(d.getSeconds());
	return y + sign + m + sign + _date + " " + h + ":" + min + ":" + sec;	
}
function toTwo(val){
	return val < 10 ? "0" + val : val ;
}
//时间差函数
function timeDiff(start,end){
	return Math.abs( start.getTime()-end.getTime() )/1000;
}
//动态添加元素
function createEle(ele){
	return document.createElement(ele);
}
//碰撞函数
function pz(obj1,obj2){
	var L1 = obj1.offsetLeft;
	var R1 = obj1.offsetLeft + obj1.offserWidth;
	var T1 = obj1.offsetTop;
	var B1 = obj1.offsetTop + obj1.offsetHeight;
	
	
	var L2 = obj2.offsetLeft;
	var R2 = obj2.offsetLeft + obj2.offsetWidth;
	var T2 = obj2.offsetTop;
	var B2 = obj2.offsetTop + obj2.offsetHeight;
	//如果碰不上返回false 如果碰上返回true
	if(L1 > R2 || R1 < L2 || T1 > B2 || B1 < T2 ){
		return false;
	}else{
		return true;
	}
}
