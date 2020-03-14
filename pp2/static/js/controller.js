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
/*setInterval(get_graph_data,100000)*/