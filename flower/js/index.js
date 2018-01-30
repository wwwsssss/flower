function banner(){	
	var timer = null;
	var index = 0;
	timer = setInterval( autoPlay,3000 );
	function autoPlay(){	
		index++;
		if( index==$(".banner ol li").size() ){
			index = 0;
		}	
		$(".banner ol li").eq(index)
						  .addClass("current")
						  .siblings()
						  .removeClass("current")
		$(".banner ul li").eq(index)
						  .fadeIn(1000)
						  .siblings()
						  .fadeOut(1000)
	}
	$(".banner ol li").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	})
	$(".banner ol li").mouseleave(function(){
		timer = setInterval( autoPlay,2500 )
	})
	$(".banner ul li").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	})
	$(".banner ul li").mouseleave(function(){
		timer = setInterval( autoPlay,2500 )
	})
}
banner();
function wscroll(){		
	var flag = true;
	$("#loutiNav li:not(.last)").click(function(){
		flag = false;
		$(this).find("span")
		       .addClass("active")
		       .end()
		       .siblings()
		       .find("span")
		       .removeClass("active");
		var t = $(".louti").eq( $(this).index() ).offset().top;		
		$("html,body").animate({"scrollTop":t},1500,function(){
			flag = true;		
		})
	})	
	$(".last").click(function(){
		flag = false;
		$("html,body").animate({"scrollTop":0},1500,function(){
			flag = true;
			$("#loutiNav li:not(.last)").find("span").removeClass("active");
		})
	})
	$(window).scroll(function(){
		if(flag){
			var sTop = $(document).scrollTop();
			$floor = $(".louti").filter(function(){								
				return Math.abs( $(this).offset().top - sTop ) < $(this).outerHeight()/2;			
			})		
			var index = $floor.index(); 						
			if( index != -1 ){				
				$("#loutiNav li:not(.last)").eq(index).find("span")
													  .addClass("active")
													  .end()
													  .siblings()
													  .find("span")
													  .removeClass("active");
			}else{
				$("#loutiNav li:not(.last)").find("span").removeClass("active");
			}
		}
	})
}
	$(".fcenter #fade").fadeTo(0,0.5);
	$(".fcenter #fade").mouseenter(function(){	
		$(this).fadeTo(0,1);
	}).mouseleave(function(){
		$(this).fadeTo(0,0.5);
	})
wscroll();
window.onload=function(){	
	$.ajax({
		url : "lastdata.json",
		type : "get",
		success : function(json){
			var html = "";
			var index = 0;
			for( var attr in json ){
				for( var i = 0 ; i < json[attr].list.length ; i++ ){
					var product = json[attr].list[i];
					html += `<li>
								<a href="#"><img src="img/goods/${product.src}"/></a>
								<a href="#">【春舞枝】${product.name}</a>
								<p>￥${product.price}</p>
							</li>`							
				}
				$(".none").eq(index).html(html);
				index++;
				html="";
			}
		}
	})
}
$(".button").mouseenter(function(){
	$(this).addClass("selected")
		   .siblings()
		   .removeClass("selected");
	$(".none").eq($(this).index())
			  .addClass("block")
			  .siblings()
			  .removeClass("block")
})
