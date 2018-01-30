var oUl = document.getElementById("main");
	var pageUl = document.getElementById("u");
	var oSpanLeft = document.getElementById("left");
	var oSpanRight = document.getElementById("right");
	var a = 1;//页码  默认显示第一页  
	var pageNum = 6; //每页的数据量
	getData();
	//页面加载后将数据渲染到页面上
	function getData(){
		ajaxGet("data.json",function(msg){			
			var arr = JSON.parse(msg);
			var str = "";			
			for( var i = (a-1)*pageNum ; i < a*pageNum ; i++ ){
				//解决最后一页bug  加一个判断，当i<arr.length 可以读取数据
				if( i < arr.length ){
					str += `<li>
								<img src="img/goods/${arr[i].src}" alt="" />
								<p>${arr[i].title}</p>
								<p>特惠价:${arr[i].price}元</p>
								
							</li>`;
				}
			}
			oUl.innerHTML = str;			
			
			//处理 页面中页码数量
			//计算总页数 
			pageTotle = Math.ceil( arr.length/pageNum );
			var page = "";
			for( var j = 1 ; j <= pageTotle ; j++ ){
				page += `<li>${j}</li>`;
			}
			pageUl.innerHTML = page;
			//当前页码index对应的页码的li高亮显示
			pageUl.children[a-1].className = "active";
		})
		
	}
	
	//操作页码显示对应页的数据   委托
	pageUl.onclick = function(e){
		var e = e || event;
		var target = e.target || e.srcElement;
		if( target.nodeName == "LI" ){
			//获取当前页码的index  
			a = parseInt( target.innerHTML );
			getData();
		}
	}
	//上一页 index--
	oSpanLeft.onclick = function(){
		if( a == 1 ){
			a = 1;
		}else{
			a--;
		}
		getData();
	}
	//下一页  index++
	oSpanRight.onclick = function(){
		if( a == pageTotle ){
			a = pageTotle;
		}else{
			a++;
		}
		getData();
	}
