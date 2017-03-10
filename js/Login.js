

function loadLogin(){
	$("#header").load("html/login.html #loginHeader",function(){
		
	});
	$("#content").load("html/login.html #loginContent",function(){
		var _zhanghao=$("#zhang").val();
		var _mima=$("#mi").val();
		$.ajax({
			type:"get",
			url:" http://datainfo.duapp.com/shopdata/userinfo.php",
			async:true,
			data:{"status":"login","userID":_login,"password":_register},
			success:function(data,status){
				alert("222")
			}
		});
	});
}
