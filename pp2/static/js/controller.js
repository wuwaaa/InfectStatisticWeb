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

function get_graph_data(){
    $.ajax({
        url:"/graph",
        /*timeout:10000,//超时时间设置为10秒；*/
        success:function(data){
            country_graph_Option.xAxis.data=data.day
            country_graph_Option.series[0].data=data.confirm
            country_graph_Option.series[1].data=data.confirm_add
            country_graph_Option.series[2].data=data.heal
            country_graph_Option.series[3].data=data.dead
            country_graph.setOption(country_graph_Option)
        },
        error:function(xhr,type,errorThrown){
            print(error)

        },
    });
}

get_graph_data()

get_map_data()
setInterval(get_time,1000)
setInterval(get_main_data,1000)