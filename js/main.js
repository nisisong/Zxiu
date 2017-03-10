$("#footer").load("html/mainFooter.html",function(){
	loadHomeHeader()
	loadHomeContent()
	$(this).find(".mainFooter").find("li").on("touchend",function(){
		var activeIndex = $(this).index();
		changeFooterClass(activeIndex)
		switch (activeIndex){
			case 0:
				loadHomeHeader();
				loadHomeContent();
				break;
			case 1:
				loadKindContent();
				break;
			case 2:
				$("#content").html("购物车")
//				loadCartHeader();
//				loadCartContent()
				break;
			case 3:
				loadUserHeader();
				loadUserContent();
				break;
			case 4:
				loadMoreHeader();
				loadMoreContent();
				break;
			default:
				break;
		}
	})
})
function changeFooterClass(activeIndex){
	$("#footer").find(".mainFooter").find("li").eq(activeIndex).addClass("active").siblings().removeClass("active");
}