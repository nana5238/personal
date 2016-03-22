$(document).ready(function(){
    var $key=0
    var timer=null
    dong()
   

	$("#box").height($(window).height())//核心思想，5个page页的高是100%，它会继承大box的高，大Box的等于窗口的高

 $(window).resize(function(){
    	$("#box").height($(window).height())
    })

    
	$(document).mousewheel(function(event,delta){
        clearTimeout(timer)//刚开始清除定时器
		timer=setTimeout(function(){//开启定时器，因为autoplay函数不识别delta,所以需要传参。
			 autoplay(delta)
		},100);
		dong();
		
	})//为防止一下滑动多次，需要定时器帮忙

		function autoplay(delta){//核心思想：delta的值是1或-1，1代表往上，-1代表往下，往上滑动多少或者往下滑动多少是个变量，所以要申明变量，每滑一次。他就等于$key-delta 例：(0- -1)就证明滑1次,他就更改类
				$key=$key-delta
			if($key<0)
			{
				$key=0
			}
			else if($key>4)
			{
				$key=4
			}
			
			$("#box").attr("class","go"+$key+"")
			dong()
			
		}


$(".liest li").click(function(){//.liest li点击之后获取相对应的$("#box").attr
		$key=$(this).index()//重新获取.liest li的索引号
		$("#box").attr("class","go"+$key+"")
		dong()
		})
	function dong(){
		if($key==0)
		{
			$(".page1 .boy").addClass("donghua")
		}
		else 
		{
			$(".page1 .boy").removeClass("donghua")
		}
		
		
		if($key==3)
			{
				$(".peixun").stop().animate({"left":0},2000)
				$(".xingming").stop().animate({"left":0},2000)
				$(".xinxi").stop().animate({"right":0},2000)
				$(".yixiang").stop().animate({"left":0},2000)
				$(".gongzuo").stop().animate({"right":0},2000)
			}
			else 
			{
				$(".peixun").stop().animate({"left":"-750px"},1000)
				$(".xingming").stop().animate({"left":"-590px"},1000)
				$(".xinxi").stop().animate({"right":"-680px"},1000)
				$(".yixiang").stop().animate({"left":"-565px"},1000)
				$(".gongzuo").stop().animate({"right":"-505px"},1000)
			}
	
		
	}

/*page2js*/
	$(".hd li").hover(function(){
		$(this).addClass("current").siblings().removeClass("current")
		$(this).children("i").css("display","block")
		$(this).siblings().children("i").css("display","none")
})	
	$(".hd li.aa").hover(function(){
		$(".bot").hide();
	})
	$(".hd li.current").hover(function(){
		$(".bot").show();
	})

/*平面设计jS*/

	$(".bot li").hover(function() {
			$(this).siblings("li").stop().fadeTo(500,0.2)
		}, function() {
			$(".bot li").stop().fadeTo(500,1)
		})

	$(".gray").height($(window).height())

	var num=0
	$(".bot li").each(function(){
		num=$(".bot li").index()
		$(".bot li").click(function(){
			num=$(this).index()
			num++
			$(".gray").show()
			$(".PIC"+num+"").show()
		})
		$(".page2 span").click(function(){	
			$(".gray").hide()
			$(".PIC"+num+"").hide()
		})
	})

	
/*网页制作js*/
$(".bottom li").hover(function() {
			$(this).find('p').show().stop().animate({"bottom":0},200);
			$(this).siblings("li").stop().fadeTo(500,0.2)
		}, function() {
			$(this).find('p').hide().stop().animate({"bottom":-50},200);
			$(".bottom li").stop().fadeTo(500,1)
		});

})