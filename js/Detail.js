function loadDetailHeader(){
	$("#header").load("html/detail.html #detailHeader",function(){
		$("#back").on("touchend",function(){
			loadHomeHeader();
			loadHomeContent();
		})
	})
}

function loadDetailContent(goodsID){
	$("#content").load("html/detail.html #detailContent",function(){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			data:{
				goodsID:goodsID
			},
			dataType:"JSONP",
			beforeSend:function(){
				$("#detailContent .neiRong").hide();
				$("#detailContent .spinner").show();
			},
			success:function(data){
				$("#detailContent .neiRong").show();
				$("#detailContent .spinner").hide()
				var result = eval(data);
				console.log(result);
				$(".neiRong").find(".neiRongx").eq(0).css({"display":"block"});
				$("#detailFooter").find("li").on("touchend",function(){
					var activeIndex=$(this).index();
					changeFooterClass(activeIndex)
					switch (activeIndex){
						case 0:
							$(".neiRong").find(".neiRongx").eq(0).css({"display":"block"}).siblings().css({"display":"none"});
							break;
						case 1:
							$(".neiRong").find(".neiRongx").eq(1).css({"display":"block"}).siblings().css({"display":"none"});
							break;
						case 2:
							$(".neiRong").find(".neiRongx").eq(2).css({"display":"block"}).siblings().css({"display":"none"});
							break;
						default:
							break;
					}
				});
				function changeFooterClass(activeIndex){
					$("#detailFooter").find("li").eq(activeIndex).addClass("active").siblings().removeClass("active");
				}
				//介绍
				$("#img").attr("src",result[0].goodsListImg);
				$("#proname").html('<span>$'+result[0].price+'</span>'+" "+result[0].goodsName);
				$("#zhekou").html('<span>市场价:'+
				'<span>'+
				(result[0].price/(result[0].discount/10)).toFixed(2)+
				'</span>'+
				'</span>'+
				
				'<span>'+
				result[0].discount+
				'折'+
				'</span>'+
				
				'<span>'+
				result[0].buynumber+
				'人购买'+
				'</span>');
				
				//详情
				$(".xiangqing div img").attr("src",eval(result[0].goodsBenUrl));
				$(".xiangqing .detail").html(result[0].detail);
				//实拍
				$("#homeWrapper1").html("");
				for (var i = 0;i<eval(result[0]["imgsUrl"]).length;i++){
					$("#homeWrapper1").append('<div class="swiper-slide"><img src='+eval(result[0]["imgsUrl"])[i]+' alt="" /></div>')
				}
				var swiper = new Swiper("#homeBanner1",{
					autoplay:3000,
					loop:true,
					autoplayDisableOnInteraction:false,
					pagination:".swiper-pagination"
				})
				
				
				
				
				
				/*$("#homeWrapper1").html("");
				var _data=eval(result[0].imgsUrl)
				console.log(_data)
				for (var k=0;k<_data.length;k++) {
					$("#homeWrapper1").append('<div class="swiper-slide">'+
					'<img src="'+_data[k]+'" alt="" />'+
					'</div>')
				}
				var swiper = new Swiper("#homeBanner1",{
					autoplay:3000,
					loop:true,
					autoplayDisableOnInteraction:false,
					pagination:".swiper-pagination"
				})*/
			}
		});
	})
}
