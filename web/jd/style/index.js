$(document).ready(function() {
	$(".foc").hover(function() {
		$(this).children('span').show()
	}, function() {
		$(this).children('span').hide()
	});

	$(".vip").hover(function() {
		$(this).children('i').css("background-position","0 -15px")
	}, function() {
		$(this).children('i').css("background-position","0 0")
	});

	$(".cell").hover(function() {
		$(this).children('em').css({"height":0,"background-position":"-128px -399px","margin-top":"26px"}).stop().animate({"height":22,"margin-top":"4px"},200);
		$(this).children('.celljd,.kong').show();
		
		}, function() {
		$(this).children('em').css({"height":0,"background-position":"-128px -360px","margin-top":"4px"}).stop().animate({"height":22},200);
		$(this).children('.celljd,.kong').hide();
	});	

	$(".webnav").hover(function() {
		$(this).children('.webchild,.kong-2').show();
	}, function() {
		$(this).children('.webchild,.kong-2').hide();
	});

	$(".search input").focus(function(event) {
		if($(this).val()=="智能电视")
		{
			$(this).val("");
			$(this).css("color","#333");
		}
	});
	$(".search input").blur(function(event) {
		if($(this).val()=="")
		{
			$(this).val("智能电视");
			$(this).css("color","#999");
		}
		
	});

	/*楼层轮播图*/
	$(".f1scroll ol li").hover(function() {
		num=-$(this).index()*474
		$(this).addClass('cnetertop-current').siblings('').removeClass('cnetertop-current');
		$(".f1scroll ul").stop().animate({"margin-left":num},300)
	});
	$(".f2scroll ol li").hover(function() {
		num=-$(this).index()*474
		$(this).addClass('cnetertop-current').siblings('').removeClass('cnetertop-current');
		$(".f2scroll ul").stop().animate({"margin-left":num},300)
	});	
	$(".f4scroll ol li").hover(function() {
		num=-$(this).index()*474
		$(this).addClass('cnetertop-current').siblings('').removeClass('cnetertop-current');
		$(".f4scroll ul").stop().animate({"margin-left":num},300)
	});
	$(".f5scroll ol li").hover(function() {
		num=-$(this).index()*474
		$(this).addClass('cnetertop-current').siblings('').removeClass('cnetertop-current');
		$(".f5scroll ul").stop().animate({"margin-left":num},300)
	});
	$(".f6scroll ol li").hover(function() {
		num=-$(this).index()*474
		$(this).addClass('cnetertop-current').siblings('').removeClass('cnetertop-current');
		$(".f6scroll ul").stop().animate({"margin-left":num},300)
	});
	$(".f7scroll ol li").hover(function() {
		num=-$(this).index()*474
		$(this).addClass('cnetertop-current').siblings('').removeClass('cnetertop-current');
		$(".f7scroll ul").stop().animate({"margin-left":num},300)
	});
	$(".f8scroll ol li").hover(function() {
		num=-$(this).index()*474
		$(this).addClass('cnetertop-current').siblings('').removeClass('cnetertop-current');
		$(".f8scroll ul").stop().animate({"margin-left":num},300)
	});
	/*楼层右侧下方轮播图*/
	$(".1fbottom ol li").hover(function() {
		num=-$(this).index()*209
		$(this).addClass('btcurrent').siblings('').removeClass('btcurrent');
		$(".1fbottom ul").stop().animate({"margin-left":num},300)
	});
	$(".2fbottom ol li").hover(function() {
		num=-$(this).index()*209
		$(this).addClass('btcurrent').siblings('').removeClass('btcurrent');
		$(".2fbottom ul").stop().animate({"margin-left":num},300)
	});
	$(".3fbottom ol li").hover(function() {
		num=-$(this).index()*209
		$(this).addClass('btcurrent').siblings('').removeClass('btcurrent');
		$(".3fbottom ul").stop().animate({"margin-left":num},300)
	});
	$(".4fbottom ol li").hover(function() {
		num=-$(this).index()*209
		$(this).addClass('btcurrent').siblings('').removeClass('btcurrent');
		$(".4fbottom ul").stop().animate({"margin-left":num},300)
	});
	$(".5fbottom ol li").hover(function() {
		num=-$(this).index()*209
		$(this).addClass('btcurrent').siblings('').removeClass('btcurrent');
		$(".5fbottom ul").stop().animate({"margin-left":num},300)
	});
/*	$(".6fbottom ol li").hover(function() {
		num=-$(this).index()*209
		$(this).addClass('btcurrent').siblings('').removeClass('btcurrent');
		$(".6fbottom ul").stop().animate({"margin-left":num},300)
	});*/
	/*$(".7fbottom ol li").hover(function() {
		num=-$(this).index()*209
		$(this).addClass('btcurrent').siblings('').removeClass('btcurrent');
		$(".7fbottom ul").stop().animate({"margin-left":num},300)
	});*/
	$(".8fbottom ol li").hover(function() {
		num=-$(this).index()*209
		$(this).addClass('btcurrent').siblings('').removeClass('btcurrent');
		$(".8fbottom ul").stop().animate({"margin-left":num},300)
	});


	/*定时轮播图*/
		var num=null;
	$(".banner ul li").mouseenter(function(event) {
		num=$(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".banner ol li").eq(num).fadeIn("fast").siblings().fadeOut();
	});
	var arr=0;
	var timer=setInterval(autoplay, 3000);	
	autoplay();
	function autoplay()
	{	
		$(".banner ul li").eq(arr).addClass('current').siblings().removeClass('current');
		$(".banner ol li").eq(arr).fadeIn("fast").siblings().fadeOut("fast");
		arr++;
		if(arr>5)
		{
			arr=0
		}	

	}
	$(".banner").hover(function() {
		clearInterval(timer);
		timer=null;
	}, function() {
		clearInterval(timer);
		timer=setInterval(autoplay, 3000);
	});

	$(".service").hover(function() {
		$(this).children('ul').show();
	}, function() {
		$(this).children('ul').hide();
	});

	var B=setInterval(navtime, 1500)
	var num=0;
	navtime();
	function navtime()
	{	
		$(".r-nav .pic").css("z-index",num);
		num++;
		if(num>1)
		{
			num=0;
		}
		$(".r-nav .pic-2").css("z-index",num);
	}

	/*定位头部广告*/
	$(".topad span").click(function(event) {
		$(this).parent().hide();
		$(".topsearch").css("margin-top",0);
	});

	/*banner下方滑动banner*/
	
	var a=$(".picscroll-l").index()
	$(".picscroll-l:first").clone().appendTo($(".picscroll"))
	
	$(".bottom-banner .right").click(function(event) {
			
			a++;
			if(a>3)
			{
				a=1;
				$(".picscroll").css("left",0)
			}
			$(".picscroll").stop().animate({"left":-a*608},500)
			

		});
	$(".bottom-banner .left").click(function(event) {
			a--;
			if(a<0)
			{
				a=2;
				$(".picscroll").css("left",-1824)
			}
			$(".picscroll").stop().animate({"left":-a*608},500)			
		});




	$(".bottom-banner a").hover(function() {
		$(this).css("background-color","#F5F5F5")
		
	}, function() {
		$(this).css("background-color","#fff")
	});



/*生活服务*/
	var A=0;
	$(".crservice-1 li").each(function(index, el) {
		A=-index*63
		$(el).find("span").css("background-position",A+"px 0");
	});
	$(".crservice-2 li").each(function(index, el) {
		A=-index*63
		$(el).find("span").css({"background-position":A+"px -50px"});
	});	
	
	$(".crservice-1 li").hover(function() {
		var a=$(this);		
		Time=setTimeout(Tout,200)
	function Tout()
	{
		
		a.children("a").find('span,s').hide();
		a.siblings().children('a').find('span,s').hide();
		a.children(".word").css({"padding-top":"5px", "height":"29px", "background-color":"#fff","z-index":"999"});
		a.siblings().children('.word').css({"padding-top":"5px","z-index":"0"});
		a.children('.crservice-down').show();
		a.siblings().children('.crservice-down').hide();		
	}	
	}, function() {
		clearTimeout(Time);
		Time=null;		
	});
		$(".crservice-down .downclose").click(function(event) {
			$(this).parent(".crservice-down").hide();
			$(".crservice-1 li").children("a").find('span,s').show();
			$(".crservice-1 li").siblings().children('a').find('span,s').show();
			$(".crservice-1 li").children(".word").css({"padding-top":"15px", "height":"67px", "background-color":"none","z-index":"0"});
			$(".crservice-1 li").siblings().children('.word').css({"padding-top":"15px","z-index":"0"});
	
		});

/*生活橱窗开始*/
	$(".lifecontent ul>li").hover(function() {
		$(this).children('a').children('img').stop().animate({"margin-left":"-10px"},500)
	}, function() {
		$(this).children('a').children('img').stop().animate({"margin-left":0},500)
	});

/*第三层*/
    $(".f3-center .flcenter-1 img").hover(function() {
    	$(".f3-center .flcenter-1 img").css("opacity","0.8");
    	$(this).fadeTo(0,1).stop().animate({"margin-left":"-15px"},1000)
    }, function() {
    	$(this).stop().animate({"margin-left":0},1000);
    	$(".f3-center .flcenter-1 img").css("opacity","1");
    });

/*楼层带有定时器的table栏*/
    var fl=null;
    $(".floor-8f .floornav ul li").hover(function() {
    	fl=$(this);
    	timer=setTimeout(flor, 500);
    	function flor(){
    		fl.addClass('licurrent').siblings().removeClass('licurrent')
    	$(".floor-center .f8jd").eq(fl.index()).addClass("flcurrent").siblings(".f8jd").removeClass('flcurrent')
    	}
    }, function() {
    	clearTimeout(timer);
    	timer=null;
    });
    $(".floor-7f .floornav ul li").hover(function() {
    	fl=$(this);
    	timer=setTimeout(flor, 500);
    	function flor(){
    		fl.addClass('licurrent').siblings().removeClass('licurrent')
    	$(".floor-center .f7jd").eq(fl.index()).addClass("flcurrent").siblings(".f7jd").removeClass('flcurrent')
    	}
    }, function() {
    	clearTimeout(timer);
    	timer=null;
    });
    $(".floor-6f .floornav ul li").hover(function() {
    	fl=$(this);
    	timer=setTimeout(flor, 500);
    	function flor(){
    		fl.addClass('licurrent').siblings().removeClass('licurrent')
    	$(".floor-center .f6jd").eq(fl.index()).addClass("flcurrent").siblings(".f6jd").removeClass('flcurrent')
    	}
    }, function() {
    	clearTimeout(timer);
    	timer=null;
    });
    $(".floor-5f .floornav ul li").hover(function() {
    	fl=$(this);
    	timer=setTimeout(flor, 500);
    	function flor(){
    		fl.addClass('licurrent').siblings().removeClass('licurrent')
    	$(".floor-center .f5jd").eq(fl.index()).addClass("flcurrent").siblings(".f5jd").removeClass('flcurrent')
    	}
    }, function() {
    	clearTimeout(timer);
    	timer=null;
    });
    $(".floor-4f .floornav ul li").hover(function() {
    	fl=$(this);
    	timer=setTimeout(flor, 500);
    	function flor(){
    		fl.addClass('licurrent').siblings().removeClass('licurrent')
    	$(".floor-center .f4jd").eq(fl.index()).addClass("flcurrent").siblings(".f4jd").removeClass('flcurrent')
    	}
    }, function() {
    	clearTimeout(timer);
    	timer=null;
    });
    $(".floor-3f .floornav ul li").hover(function() {
    	fl=$(this);
    	timer=setTimeout(flor, 500);
    	function flor(){
    		fl.addClass('licurrent').siblings().removeClass('licurrent')
    	$(".floor-center .f3jd").eq(fl.index()).addClass("flcurrent").siblings(".f3jd").removeClass('flcurrent')
    	}
    }, function() {
    	clearTimeout(timer);
    	timer=null;
    });
    $(".floor-2f .floornav ul li").hover(function() {
    	fl=$(this);
    	timer=setTimeout(flor, 500);
    	function flor(){
    		fl.addClass('licurrent').siblings().removeClass('licurrent')
    	$(".floor-center .f2jd").eq(fl.index()).addClass("flcurrent").siblings(".f2jd").removeClass('flcurrent')
    	}
    }, function() {
    	clearTimeout(timer);
    	timer=null;
    });
    $(".floor-1f .floornav ul li").hover(function() {
    	fl=$(this);
    	timer=setTimeout(flor, 500);
    	function flor(){
    		fl.addClass('licurrent').siblings().removeClass('licurrent')
    	$(".floor-center .f1jd").eq(fl.index()).addClass("flcurrent").siblings(".f1jd").removeClass('flcurrent')
    	}
    }, function() {
    	clearTimeout(timer);
    	timer=null;
    });










});



























