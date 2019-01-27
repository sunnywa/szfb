$(function () {
    $("#xx,#ly").bind("click", function () {
        showMsg($(this).attr("id"));
    });

    $("#xunjia").bind("click", function () {
        showMsg("ly");
    });

    $("#btn_sx").bind("click", function () {
        var p1 = $("#p1").val();
        var p2 = $("#p2").val();
        var p3 = $("#p3").val();
        var p4 = $("#p4").val();

        window.location.href = "/screening-1," + p1 + "," + p2 + "," + p3 + "," + p4;
    });

    getPrompt();
})

function showMsg(cid) {
    $("#info,#msg").hide();
    if (cid == "xx") {
        $("#info").show();
        $("#xx").attr("class", "cpt_t2_y");
        $("#ly").attr("class", "cpt_t2_n");
    }
    if (cid == "ly") {
        window.location.href = "#ly";
        $("#msg").show();
        $("#xx").attr("class", "cpt_t2_n");
        $("#ly").attr("class", "cpt_t2_y");

        $.get("/userlogin", { r: Math.random(), t: "check" }, function (data) {
            if (data != "true") {
                ShowLogin();
            }
        });
    }
}

function getPrompt() {
    var url = window.location.href;
    if (url.indexOf("f1") > 0) {
        layer.msg("验证码错误！");
    }
    if (url.indexOf("f2") > 0) {
        ShowLogin();
    }
    if (url.indexOf("f3") > 0) {
        layer.msg("留言失败，请重试！");
    }
    if (url.indexOf("true") > 0) {
        layer.msg("留言成功！");
    }
}