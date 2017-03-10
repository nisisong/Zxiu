function loadSearchHeader(){
	$("#header").load("html/search.html #searchHeader",function(){
		$("#back").on("touchend",function(){
				loadHomeHeader();
				loadHomeContent();
				$("#footer").show()
		})
	})
}

function loadSearchContent(){
	$("#content").load("html/search.html #searchContent",function(){
		
	})
}
