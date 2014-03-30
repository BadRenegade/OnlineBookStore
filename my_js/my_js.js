var my_titlebar = document.getElementById("my_titlebar");
var category_title = document.getElementById("category_title");
var main_page_left = document.getElementById("main_page_left");

//
var category_title_fixed = false;
window.onscroll = function()
{
	var t = document.body.scrollTop;
	if (t > 60)
	{
		category_title.style.position = "fixed";
		main_page_left.style.position = "fixed";
		main_page_left.style.marginTop = 48 + "px";		
		my_titlebar.style.height = 0;
		category_title_fixed = true;	
	}
	else
	{	
		if (category_title_fixed)
		{
			my_titlebar.style.height = 60 + "px";
			category_title.style.position = "static";
			main_page_left.style.position = "static";
			main_page_left.style.marginTop = 0;	
			
		}					
	}
}


function add_delivery_cost(obj)
{
	if (obj.value == '1')
	{
		document.getElementById("total_cost").innerHTML = 5;
	}	
	else
	{
		document.getElementById("total_cost").innerHTML = 0;
	}
}

function goto_cart()
{
	window.location.href="check_out.php";
}

function goto_mypage()
{
    window.location.href="my_page.php";
}

function showArrow()
{
	document.getElementById("headimg").style.cursor = "pointer";
}


function check_signup(){
		if(form_signup.username.value==""){
	        alert("请输入用户名!");
   		    form_signup.username.select();
			return(false);
         }		
		if(form_signup.password.value==""){
	        alert("请输入用户密码!");
			form_signup.password.select();
			return(false);
		 }	
        if(form_signup.password.value!=form_signup.password_confirm.value){
		    alert("您输入的密码和验证密码不符！");
			form_signup.password_confirm.select();
			return(false);
		 }	
		 
       if(form_signup.email.value==""){
			alert("请输入邮箱地址!");
			form_signup.email.select();
			return(false);
		 }
	   if(!check_email(form_signup.email.value)){
			alert("邮箱地址格式不正确!");
			form_signup.email.select();
			return(false);
		 } 
		 
		return(true);				 
}	

function check_email(email){
	var strs=email;
	var Expression=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;  
	var objExp=new RegExp(Expression);
	if(objExp.test(strs)==true){
		return true;
	}else{
		return false;
	}
}

function check_login()
{
	if (form_login.username.value == "")
	{
		alert("Please enter your name!");
		return false;
	}
	if (form_login.password.value == "")
	{
		alert("Please enter your password!");
		return false;
	}
	return true;
}

function user_logout()
{
	//window.open("deal_page/deal_logout.php", "", "", false);
	window.location.href = "deal_page/deal_logout.php";
}
	







//下是jQuery
$(function() {
		$(".category_item_content").hide();
		/*
		$( "#category_list" ).accordion({
			heightStyle: "content"
		});*/
		$("#category_item_arts").click(function() {
			$(this).next(".category_item_content").slideToggle("slow");
			$("#category_item_children").next(".category_item_content").slideUp("slow");
			$("#category_item_literature").next(".category_item_content").slideUp("slow");
			$("#category_item_social_science").next(".category_item_content").slideUp("slow");
			$("#category_item_health").next(".category_item_content").slideUp("slow");
			$("#category_item_technology").next(".category_item_content").slideUp("slow");
		});
		$("#category_item_children").click(function() {
			$(this).next(".category_item_content").slideToggle("slow");
			$("#category_item_arts").next(".category_item_content").slideUp("slow");
			$("#category_item_literature").next(".category_item_content").slideUp("slow");
			$("#category_item_social_science").next(".category_item_content").slideUp("slow");
			$("#category_item_health").next(".category_item_content").slideUp("slow");
			$("#category_item_technology").next(".category_item_content").slideUp("slow");
		});
		$("#category_item_literature").click(function() {
			$(this).next(".category_item_content").slideToggle("slow");
			$("#category_item_arts").next(".category_item_content").slideUp("slow");
			$("#category_item_children").next(".category_item_content").slideUp("slow");
			$("#category_item_social_science").next(".category_item_content").slideUp("slow");
			$("#category_item_health").next(".category_item_content").slideUp("slow");
			$("#category_item_technology").next(".category_item_content").slideUp("slow");
		});
		$("#category_item_social_science").click(function() {
			$(this).next(".category_item_content").slideToggle("slow");
			$("#category_item_arts").next(".category_item_content").slideUp("slow");
			$("#category_item_children").next(".category_item_content").slideUp("slow");
			$("#category_item_literature").next(".category_item_content").slideUp("slow");
			$("#category_item_health").next(".category_item_content").slideUp("slow");
			$("#category_item_technology").next(".category_item_content").slideUp("slow");
		});
		$("#category_item_health").click(function() {
			$(this).next(".category_item_content").slideToggle("slow");
			$("#category_item_arts").next(".category_item_content").slideUp("slow");
			$("#category_item_children").next(".category_item_content").slideUp("slow");
			$("#category_item_literature").next(".category_item_content").slideUp("slow");
			$("#category_item_social_science").next(".category_item_content").slideUp("slow");
			$("#category_item_technology").next(".category_item_content").slideUp("slow");
		});
		$("#category_item_technology").click(function() {
			$(this).next(".category_item_content").slideToggle("slow");
			$("#category_item_arts").next(".category_item_content").slideUp("slow");
			$("#category_item_children").next(".category_item_content").slideUp("slow");
			$("#category_item_literature").next(".category_item_content").slideUp("slow");
			$("#category_item_social_science").next(".category_item_content").slideUp("slow");
			$("#category_item_health").next(".category_item_content").slideUp("slow");
		});	
		$(".category_item").hover(
		function() {
			$(this).css("color", "#FFF");
		}, 
		function() {
			$(this).css("color", "#333");		
		});
		
		
		$("#check_out_address").hide();
		$("#check_out_address_confirm").hide();
		$("#edit_button_address").click(function() {
			$("#check_out_address").slideToggle("slow");
			$("#check_out_address_confirm").slideUp("slow");
		});
		$("#checkout_address_confirm_btn").click(function() {
			$("#check_out_address").slideUp("slow");
			$("#check_out_address_item1").attr("value",
				$("#address_select_country").val() + " " +
				$("#address_select_state").val() + " " +
				$("#address_select_city").val());
			$("#check_out_address_item2").attr("value", 
				$("#address").val() + "           " +
				$("#zipcode").val());
			$("#check_out_address_item3").attr("value", 
				$("#phone_number").val() + "   " +
				$("#e_mail").val());
			$("#check_out_address_confirm").slideDown("slow");			
		});
		
		
		$("#check_out_payment").hide();
		$("#check_out_payment_confirm").hide();
		$("#edit_button_payment").click(function() {
			$("#check_out_payment").slideToggle("slow");
			$("#check_out_payment_confirm").slideUp("slow");
		});
		$("#checkout_payment_confirm_btn").click(function() {
			$("#check_out_payment").slideUp("slow");
			$("#check_out_payment_item1").attr("value", $("#credit_card").val());
			$("#check_out_payment_item2").attr("value", "Expirated on  " +
				$("#expiration_month").val() + " / " + $("#expiration_year").val());
			$("#check_out_payment_confirm").slideDown("slow");			
		});
		
		$('#myModal').on('hidden.bs.modal', function (e) {
			window.location.href="index.html";
        });
		
		$("#myspace_setting").hide();
		$("#myspace_setting_btn").click(function() {
			$("#myspace_setting").show();
			$("#myspace_orders").hide();
		});
		$("#myspace_orders_btn").click(function() {
			$("#myspace_setting").hide();
			$("#myspace_orders").show();
		});
		
		
							
	});


	



