require(["config"],function(){
	require(["jquery","template","load"],function($,template){
		$.getJSON("/mock/product-list.json",function(data){
			var html = template("prod_item",{list:data});
			$(html).appendTo(".product-list");
			
			console.log($(".g").children("a"));
			$(".g").children("a").click(function(){
				$(this).attr({"href":"/html/detail.html"})
			})
		});
		
		
		var dls = $(".aside").children("dl"),
			currentIndex = 0,
			nextIndex = 0;
		for (let i = 0;i<dls.length; i++) {
			dls.eq(i).click(function(){
				
				currentIndex = nextIndex;
				nextIndex = i;
				
				dls.eq(currentIndex).removeClass("n");
				dls.eq(nextIndex).addClass("n");
				
			});
		}
		
		
	});
})
