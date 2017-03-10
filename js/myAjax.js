function myAjax(url,data,dataType,callback){
	$.ajax({
		type:"get",
		url:dataType=="JSONP" ? url+"?callback=" : url ,
		data:data,
		dataType:dataType || "",
		success:function(data){
			callback(data);
		}	
	});
}
