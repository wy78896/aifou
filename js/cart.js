require(["config"],function(){
	require(["jquery","template","load"],function($,template){
		
		var data = JSON.parse($.cookie("products"));
		
		var html = template("prod_item",{products:data});
			$(html).appendTo(".cartInfo");
		
		
		
		
		//增加减少商品数量
		$(".jia").click(function(){
			var count = $("#num").val();
			count++;
			$("#num").val(count);
			
		})
		$(".jian").click(function(){
			var count = $("#num").val();
			count--;
			if (count < 1) {
				count = 1;
			}
			$("#num").val(count);
			
		})
		$("#num").blur(function(){
			if($("#num").val()<1){
				$("#num").val(1);
			}
		})
	});
})