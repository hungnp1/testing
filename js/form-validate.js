	$(document).ready(function(){
		
		function mailTest(email){
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
		
		
		function isLongcontent(content){
			if(content.length < 200)	return false;
			return true;
		}
		
		function isPhone(phone){
		//validate phone
			var intRegex = /[0-9 -()+]+$/;
			if((phone.length !=10) || (!intRegex.test(phone)))
			{
				 return false;
			}
			else{
				return true;
			}
		}
		
		$("#resetBtn").click(function(){
			$("input").css("border","1px solid #F2F2F2");
			$('textarea').css("border","1px solid #F2F2F2");
			$('input').val('');
			$('#resetBtn').val('Reset');
		});
		
		$("#click").click(function(){
			var title = $("#title").val();
			if(title.length === 0){
					$(".result-title").html("None title");
					$(".result-title").css("color","red");
					$('#title').closest("input").css("border","2px solid red");
			}
			if(isLongcontent($("#content").val())){
					$(".result-content").html("OK");
					$(".result-content").css("color","green");
					$('#content').closest("input").css("border","2px solid green");
			}else{
					$(".result-content").html("At least 200 characters");
					$(".result-content").css("color","red");
					$('#content').closest("textarea").css("border","2px solid red");
			}
			
			if(isPhone($("#phone").val())){
					$(".result-phone").html("OK");
					$(".result-phone").css("color","green");
					$('#phone').closest("input").css("border","2px solid green");
			}else{
					$(".result-phone").html("Invalid phone");
					$(".result-phone").css("color","red");
					$('#phone').closest("input").css("border","2px solid red");
			}
			
			
		
			if(!mailTest($("#email").val())){
				$(".result").html("Invalid email input");
				$(".result").css("color","red");
				$('#email').closest("input").css("border","2px solid red");
			}else{
				$(".result").css("color","green");
				$(".result").html("Email is OK");
				$('#email').closest("input").css("border","2px solid green");
			}
				
			
		});
	});