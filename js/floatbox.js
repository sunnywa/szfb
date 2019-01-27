$(".service_box .tab_nav li").hover(function () {
    var i = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".service_box .tab_plan:eq(" + i + ")").show().siblings().hide();
});
$(function () {
    var t;
    $(".service_box").hover(function () {
        $(".service_box").animate({ right: 0 }, 300)
        clearTimeout(t);
    }, function () {
        t = setTimeout(function (e) {
            $(".service_box").animate({ right: "-146px" }, 300);
            $(".service_box").find(".tab_nav li").removeClass("active");
        }, 1000);
    });
});
var isTransition = true;
$(".m_logo").hover(function () {
    var r = 0;
    if (isTransition) {
        animateTime = setInterval(function () {
            if (r >= 153) {
                clearInterval(animateTime);
                isTransition = true;
            } else {
                isTransition = false;
                r++;
                $(".m_logo a").attr("style", "-webkit-mask:-webkit-gradient(radial, 45 25, " + r + ", 45 25, " + (r + 15) + ", from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)));")
            };
        }, 5);
    }
}, function () {
    return;
});