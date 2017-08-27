require(["config"],function(){
	require(["jquery","template","load"],function($,template){
		
		$.getJSON("/mock/recommend.json",function(data){
			var html = template("prod_item",{list:data});
			console.log(html)
			$(html).appendTo(".product");
		})
		
		var lis = $(".banner").children("ul").children("li"),
			len = lis.length,
			currentIndex = 0, // 当前显示图片的索引
			nextIndex = 1,
			circles = $("#pages").children("div"),
			timer = null;
		function move(){
			lis.eq(currentIndex).fadeOut(1000);
			lis.eq(nextIndex).fadeIn(1000);
			
			// 切换小圆点背景效果
			circles.eq(currentIndex).removeClass("current");
			circles.eq(nextIndex).addClass("current");
			//修改索引
			currentIndex = nextIndex;
			nextIndex++;
			if (nextIndex >= len) 
				nextIndex = 0;
		}
		
		timer = setInterval(move, 3000);
		
		// 鼠标移入/移出轮播图范围，停止/重启计时器
		$(".banner").mouseenter(function(){
			clearInterval(timer);
		});
		$(".banner").mouseleave(function(){
			timer = setInterval(move, 3000);
		});
		
		// 点击向上/下翻页
		$("#prev").click(function(){
			nextIndex = currentIndex - 1;
			if (nextIndex < 0)
				nextIndex = len - 1;
			// 切换
			move();
		});
		$("#next").click(function(){
			move();
		})
		
		// 点击小圆点切换
		for (let i = 0, len = circles.length; i < len; i++) {
			circles.eq(i).click(function(){
				if (i === currentIndex) // 当前点击的索引和显示图片索引一致
					return;
				// 将即将显示图片的索引修改为点击的小圆点索引
				nextIndex = i;
				// 切换
				move();
			})
		}
	});
})


