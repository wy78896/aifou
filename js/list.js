require(["config"],function(){
	require(["jquery","template","cookie","load"],function($,template){
		$.getJSON("/mock/product-list.json",function(data){
			var html = template("prod_item",{list:data});
			$(html).appendTo(".product-list");
			
			$(".g").children("a").click(function(){
				//$(this).attr({"href":"/html/detail.html"})
				console.log($(this).attr("i"))
				for (var i = 0; i < data.length; i++) {
					if($(this).attr("i")==data[i].id){
						$.cookie.json = true;
						$.cookie("prodInfo",data[i],{expires:7, path:"/"})
						console.log($.cookie("prodInfo"));
						$(this).attr({"href":"/html/detail.html"})
						return;
					}
				}
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
