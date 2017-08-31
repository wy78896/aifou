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
				$(".view").children("img").attr("src",viewImgSrc);
			})
		}
		
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
		
		//读取cookie
		var prodInfo = JSON.parse($.cookie("prodInfo"));
		console.log(prodInfo)
		$(".view").children("img").attr("src",prodInfo.imgSrc);
		$(".prodName").children("h1").html(prodInfo.title);
		$(".price").children("strong").html(prodInfo.price);
		for (var i = 0;i < 5 ;i++) {
			$("#icon_list").children("li").children("img").eq(i).attr("src",prodInfo.xt[i])
		}
		
		//加入购物车
		$(".addcart").click(function(){
			var addprod = {
				id:prodInfo.id,
				imgSrc : $("#icon_list").children("li").children("img").eq(0).attr("src"),
				name : $(".prodName").children("h1").html(),
				color: $(".n-check").html(),
				price : $(".price").children("strong").html(),
				num : $("#buyCount").children("input").val()
			};
			
			$.cookie.json = true;
			var _products = $.cookie("products")||[];
			var index = isExist(addprod.id,_products);
			console.log(addprod.id);
			console.log(index);
			if(index == -1){
				_products.push(addprod);
			}else{
				
				_products[index].num  = Number(_products[index].num)+Number(addprod.num);
			}
			// 将数组存回到 cookie 中
			$.cookie("products", _products, {expires:10});
			location = "/html/cart.html";
			return false;
			
				
			
		})
		function isExist(id, products) {
				for (var i = 0, len = products.length; i < len; i++) {
					if (products[i].id == id)
						return i;
				}

				return -1;
			}
	});
})
