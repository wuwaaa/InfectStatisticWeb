function get_time() {
    $.ajax({
        url:"/time",
        timeout:10000,
        success:function (data) {
            $("#tim").html(data)
        },
        error:function () {
            alert("失败")
        }
    })
}

function get_main_data(){
    $.ajax({
        url: "/data",
        success:function (data) {
            $(".num h1").eq(0).text(data.nowcon);
            $(".num h1").eq(1).text(data.nowsus);
            $(".num h1").eq(2).text(data.nowbad);
            $(".num h1").eq(3).text(data.totcon);
            $(".num h1").eq(4).text(data.totheal);
            $(".num h1").eq(5).text(data.totdead);
        },
        error:function () {
            alert("失败")
        }
    })
}
function get_map_data(){
    $.ajax({
        url:"/map",
        success:function (data) {
            ec_china_option.series[0].data=data.data
            ec_china.setOption(ec_china_option)
        },
        error:function () {
            alert("失败")
        }
    })
}

get_map_data()
setInterval(get_time,1000)
setInterval(get_main_data,1000)