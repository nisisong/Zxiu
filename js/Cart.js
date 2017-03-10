function loadCartHeader(){
	$("#header").load("html/cart.html #cartHeader",function(){
		$("#back").on("touchend",function(){
			loadHomeHeader();
			loadHomeContent();
		})
	})
}

function loadCartContent(){
	$("#content").load("html/cart.html #cartContent",function(){
		
	})
}
