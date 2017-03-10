

function loadRegister(){
	$("#header").load("html/register.html #registerHeader",function(){
		
	});
	$("#content").load("html/register.html #registerContent",function(){
		var _zhanghao=$("#zhanghao").val();
		var _mima=$("#mima").val();
		var _sub=$("#sub");
		_sub.click(function(){
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				async:true,
				data:{"status":"register","userID":_zhanghao,"password":_mima},
				success:function(data){
					alert(data);
				}
			});
		})
	});
}
