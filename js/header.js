$(function () {
    $("#wzdh").bind("mouseover", function () {
        $(".f1_con_wzdh").show();
    });

    $(".f1_con_wzdh").bind("mouseleave", function () {
        $(".f1_con_wzdh").hide();
    });

    if (window.location.pathname != "/") {
        $("#menu").bind("mouseover", function () {
            $("#mlist").attr("class", "con_left_list bg_bai");
        });

        $("#mlist").bind("mouseleave", function () {
            $("#mlist").attr("class", "con_left_list bg_bai hide");
        });
    }

    $(".collectionshop").bind("click", function () {
        collectionShop();
    });

    $(".collectionsell").bind("click", function () {
        collectionSell();
    });

    getRecord();
    getTitleStat();
});


function collectionShop() {
    $.get("/userlogin", { r: Math.random(), t: "check" }, function (data) {
        if (data == "true") {
            var id = $("#spuid").val();
            $.get("/collection", { r: Math.random(), spid: id, t: "shop" }, function (d) {
                switch (d) {
                    case "true":
                        layer.msg("收藏成功，在“企业通讯录”中可以查看！");
                        break;
                    case "f1":
                        layer.msg("收藏失败！");
                        break;
                    case "f2":
                        layer.msg("您已收藏该旺铺！");
                        break;
                }
            });
        }
        else {
            ShowLogin();
        }
    });
}

function collectionSell() {
    $.get("/userlogin", { r: Math.random(), t: "check" }, function (data) {
        if (data == "true") {
            var id = $("#sellid").val();
            $.get("/collection", { r: Math.random(), sellid: id, t: "sell" }, function (d) {
                switch (d) {
                    case "true":
                        layer.msg("收藏成功！");
                        break;
                    case "f1":
                        layer.msg("收藏失败！");
                        break;
                    case "f2":
                        layer.msg("已收藏！");
                        break;
                }
            });
        }
        else {
            ShowLogin();
        }
    });
}

function getRecord() {
    $.get("/record", { r: Math.random() }, function (data) {
        $("#shoprecord").html(data);
    });
}

function getTitleStat() {
    var url = window.location.pathname;
    if (url.indexOf('sell') > 0) {
        $("#t3").attr("class", "cur");
        return;
    }
    if (url.indexOf('cert') > 0) {
        $("#t4").attr("class", "cur");
        return;
    }
    if (url.indexOf('album') > 0) {
        $("#t5").attr("class", "cur");
        return;
    }
    if (url.indexOf('news') > 0) {
        $("#t6").attr("class", "cur");
        return;
    }
    if (url.indexOf('msg') > 0) {
        $("#t7").attr("class", "cur");
        return;
    }
    if (url.indexOf('contact') > 0) {
        $("#t8").attr("class", "cur");
        return;
    }
    if (url.indexOf('co') > 0) {
        $("#t2").attr("class", "cur");
        return;
    }
    $("#t1").attr("class", "cur");
}