function changeImg(obj,width,height) {
	if ( obj.width > width || obj.height > height ) {
	  var scale;
	  var scale1 = obj.width / width;
	  var scale2 = obj.height / height;
	
	  if(scale1 > scale2){
		scale = scale1;
	  }else{
		scale = scale2;
	  }
	
	  obj.height = obj.height / scale;
	}
}

function showleibielist(n){
	var moreul=document.getElementById("moreleibie");
	var littleul=document.getElementById("littleleibie");
	var divul=document.getElementById("lgonghuo_more");
	if (n==1){
		littleul.style.display="none";
		moreul.style.display="block";
		divul.innerHTML="<a href='javascript:' class='topicLink a_no_link' onclick=showleibielist(0)>简洁显示 &gt;&gt;</a>"
	}else{
		moreul.style.display="none";
		littleul.style.display="block";
		divul.innerHTML="<a href='javascript:' class='topicLink a_no_link' onclick=showleibielist(1)>更多 &gt;&gt;</a>";	
	}
}



var xmlhttp;

function newXMLHttpRequest()
{
	if(window.ActiveXObject){
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}else if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
}

function sendajax(obj_div,url)
{
	var tm=new Date();
	newXMLHttpRequest();
	xmlhttp.open("GET", url+"&tm="+tm.getTime(), true);
	xmlhttp.setRequestHeader("Content-Type","GB2312");
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 || xmlhttp.readyState=='complete'){
			if ("refresh"==obj_div){
				window.location.reload();
			}else{
				obj_div.innerHTML=xmlhttp.responseText;
			}
			xmlhttp.close;
			xmlhttp=null;
		}else if(xmlhttp.readyState==3){
			if ("refresh"!=obj_div){
				obj_div.innerHTML="数据加载中……";
			}
		}
	}	
}

function showHideLayers(id,formid,status)
{
	var lm_show=document.getElementById(id);
	if (status=="hide"){
		lm_show.innerHTML="";
		lm_show.style.display="none";
		return false;
	}
	if(window.ActiveXObject){
		lm_show.style.left = event.clientX - 160;
		lm_show.style.top = event.clientY+document.documentElement.scrollTop + 2;
	}
	if (lm_show.style.display=="block" && status=="show"){return false;}
	lm_show.style.display="block";
	sendajax(lm_show,"shoppage/showuserinfo.asp?id="+formid);
}
