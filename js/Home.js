
/**************************loadHomeHeader*******************************************/
function loadHomeHeader(){
	$("#header").load("html/home.html #homeHeader",function(){
		//对于搜索的
	})
}
/**************************loadHomeContent*******************************************/
//创建banner;
function createBanner(_data){
	$("#homeWrapper").html("");
	var _arr=[];
	for (var i = 0;i<_data.length;i++){
		var goodsBenUrl = JSON.parse(_data[i].goodsBenUrl)[0];
		_arr.push(goodsBenUrl);
	}
	for (var k=0;k<_arr.length;k++) {
		$("#homeWrapper").append('<div class="swiper-slide"><img src="'+_arr[k]+'" alt="" /></div>')
	}
	var swiper = new Swiper("#homeBanner",{
		autoplay:3000,
		loop:true,
		autoplayDisableOnInteraction:false,
		pagination:".swiper-pagination"
	})
}

//创建goods;
function createGoods(result){
	$("#homeList").html("");
	for(var i in result){
		var goodsID = result[i].goodsID;
		var goodsListImg = result[i].goodsListImg;
		var goodsName = result[i].goodsName;
		var price=result[i].price;
		var discount=result[i].discount;
		$("#homeList").append('<li class="proItem">'+
			'<img goodsID="'+goodsID+'" src="'+goodsListImg+'"/>'+
			'<span class="name">'+goodsName+'</span>'+
			'<div>'+
				'<span>$'+price+'</span>'+
				'<span>$'+(10-discount)*price*1/10+'</span>'+
			'</div>'+
			'<div>'+
				'<span class="discount">'+discount+'折</span>'+
				'<span class="iconfont">&#xe65e;</span>'+
			'</div>'+
		'</li>')
	}
	$(".proItem img").on("tap",function(){
		var goodsID = $(this).attr("goodsID");
		console.log(goodsID);
		loadDetailHeader();
		loadDetailContent(goodsID);
	});
	/*$(".proItem div iconfont").on("tap",function(){
		var goodsID = $(this).attr("goodsID");
		console.log(goodsID);
		loadCartHeader();
		loadCartContent()
	});*/
	
}

//调取数据;
function loadHomeContent(){
	$("#content").load("html/home.html #homeContent",function(){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=",
			dataType:"JSONP",
			async:true,
			beforeSend:function(){
				$("#homeBanner").hide();
				$(".spinner").show()
			},
			success:function(data){
				$("#homeBanner").show();
				$(".spinner").hide()
				var _data=eval(data);
				createBanner(_data);//创建banner;
			}
		});
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			async:true,
			dataType:"JSONP",
			data:{
				pageCode:0,
				linenumber:5
			},
			success:function(goods){
				var _goods=eval(goods);
				console.log(_goods);
				createGoods(_goods);
			}
		});
	})
}
