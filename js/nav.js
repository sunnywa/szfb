$(document).ready(function(){
	$(".head .btn").hover(function(){
		$(".head .abs").show();							   
	},function(){
		$(".head .abs").hide();
	});
	
	$("#search1").focus(function(){
		if($(this).val()=="输入产品关键字"){
			 $(this).val("");
			 $(this).css("color","#333")
			}					 
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("输入产品关键字");
			$(this).css("color","#999")
			}
	});
	
	$(".brand_in .list li").hover(function(){
		$(this).find(".ta").stop().animate({bottom:"0"})									   
	},function(){
		$(this).find(".ta").stop().animate({bottom:"-32px"})
		});
	
	$("#wzdh").bind("mouseover", function () {
        $(".f1_con_wzdh").show();
    });

    $(".f1_con_wzdh").bind("mouseleave", function () {
        $(".f1_con_wzdh").hide();
    });
})