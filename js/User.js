function loadUserHeader(){
	$("#header").load("html/user.html #userHeader",function(){
		
	})
}

function loadUserContent(){
	$("#content").load("html/user.html #userContent",function(){
		var _login=$("#login");
		var _register=$("#register");
		_login.on("touchend",function(){
			loadLogin();
		});
		_register.on("touchend",function(){
			loadRegister()
		})
	})
}
