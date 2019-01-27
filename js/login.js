function ShowLogin() {
    layer.open({
        type: 1, //page层
        area: ['500px', '300px'],
        title: '&nbsp;&nbsp;&nbsp;&nbsp;用户登录',
        skin: 'layui-layer-molv', //墨绿风格
        shade: 0.5, //遮罩透明度
        shift: 6, //0-6的动画形式，-1不开启
        content: "<div id='login'>" +
				 "<div class='login_msg'><img src='http://img1.zcwz.com/net/dlinfo.jpg'/></div>" +
				 '<div class="login_user"><input id="txtUser" type="text" autocomplete="off" value="" style="outline:none;"/></div>' +
				 '<div class="login_pwd"><input id="txtPwd" type="password"/></div>' +
				 '<div class="login_info">验证码：<input id="txtYZM" type="text" name="txtYZM" class="chkimg" maxlength="5" autocomplete="off" style="height:28px;line-height:28px;"/>&nbsp;&nbsp;<img id="cimgmsg" onclick="javascript:changeimg()" src="/login.jpg" title="点击图片换一张"/></div>' +
				 "<div id='loga' onclick='UserLogin()'>登&nbsp;&nbsp;&nbsp;&nbsp;录</div>" +
				 "<div class='login_info2'>还没有中华轴承网账号？<a target='_blank' href='"+$CONFIG['toRegister_url']+"'>免费注册</a>&nbsp;<a href='"+$CONFIG['contact_url']+"' target='_blank'>忘记密码？</a></div></div>"
    });
}
function UserLogin() {
    var n = $("#txtUser").val();
    var p = $("#txtPwd").val();
    if (n == "" || p == "") {
        layer.msg('账号密码不能为空');
        return;
    }
    $.get("/userlogin", { name: n, pwd: p, r: Math.random(), t: "login" }, function (data) {
        switch (data) {
            case "true":
                layer.closeAll();
                layer.msg('登录成功！');
                break;
            case "f1":
                layer.msg('账号或密码错误');
                break;
            case "f2":
                layer.msg('账号密码不能为空');
                break;
        }
    });
}
function changeimg(){
$("#cimgmsg").attr("src", "/login.jpg?" + Math.random());
}