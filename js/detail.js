require(["config"],function(){
	require(["jquery","load"],function($){
		
		var color_as = $(".color").children("a"),
			currentIndex = 0,
			nextIndex = 0;
			
		for (let i = 0; i < color_as.length; i++) {

			color_as.eq(i).click(function(){
				currentIndex = nextIndex;
				nextIndex = i;
				
				color_as.eq(currentIndex).removeClass("n-check");
				color_as.eq(nextIndex).addClass("n-check");
			})
		}
		
		var icons = $("#icon_list").children("li").children("img"),
			currIndex = 0,
			nextIn = 0,
			viewImgSrc;
		
		for (let i =0;i < icons.length;i++) {
			icons.eq(i).mouseenter(function(){
				currIndex = nextIn;
				nextIn = i;
				
				icons.eq(currIndex).css({"border":"1px solid transparent"});
				icons.eq(nextIn).css({"border":"1px solid #23A96F"});
				
				viewImgSrc = icons.eq(i).attr("src");
				console.log(viewImgSrc)
				$(".view").children("img").attr("src",viewImgSrc);
			})
		}
	});
})
