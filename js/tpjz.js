function resize_f(oimg,width_x,height_x)
{
var args=resize_f.arguments;
	boxWidth_x=args[3];
	boxHeight_x=args[4];
	var scaleHeight_x,scaleWidth_x;
	var pic_x=new Image();
	pic_x.src=oimg.src;
	var pw_x = oimg.width;
	var ph_x = oimg.height; 
	if(pic_x.src=="")
	{
		oimg.width = 0;
		oimg.height = 0;
	}
	if(pw_x<width_x&&ph_x<height_x)
	{
		oimg.width = pw_x;
		oimg.height = ph_x;
		scaleWidth_x=pw_x
		scaleHeight_x=ph_x
		
	}
	else
	{
		if(pw_x/ph_x>width_x/height_x)
		{ 
			oimg.width = width_x;
			scaleWidth_x=width_x
			scaleHeight_x=width_x*(ph_x/pw_x);
			oimg.height=scaleHeight_x;
		}
		else
		{
			oimg.height = height_x;
			scaleWidth_x=height_x*(pw_x/ph_x);
			scaleHeight_x=height_x
			oimg.width=scaleWidth_x;
		}
	}	
	if(typeof(boxWidth_x)=="undefined"){boxWidth_x=width_x;}
	if(typeof(boxHeight_x)=="undefined"){boxHeight_x=height_x;}
	oimg.style.marginTop=((boxHeight_x-scaleHeight_x)/2)+"px";
	oimg.style.marginLeft=((boxWidth_x-scaleWidth_x)/2)+"px";
	if(oimg.style.display="none") oimg.style.display="block";
}

