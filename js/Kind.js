

function loadKindContent(){
	$("#content").load("html/kind.html #kindContent",function(){
		var _ul=$("#kindContent ul")
		var _li=null;
		var _a=null;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getclass.php?callback=",
			async:true,
			dataType:"JSONP",
			beforeSend:function(){
				$("#kindContent ul").hide();
				$("#kindContent .spinner").show()
			},
			success:function(data){
				$("#kindContent ul").show();
				$("#kindContent .spinner").hide()
				var _data=eval(data);
				console.log(_data);
				for(var k=0; k<_data.length; k++){
					_ul.append('<li>'+
						_data[k]["className"]+
					'</li>')
				}
			}
		});
	})
}
