var ec_china = echarts.init(document.getElementById('map'),"dark")

var mydata = [{'name':'上海','value':318},{'name':'云南','value':162}]

var ec_china_option = {
    title:{
        text:'',
        subtext:'',
        x:'left'
    },
    tooltip:{
        trigger:'item'
    },
    visualMap:{
        show:true,
        x:'left',
        y:'bottom',
        textStyle: {
            fontsize:8,
        },
        splitList:[{start:1,end:9},
            {start:10,end:99},
            {start:100,end:999},
            {start:1000,end:9999},
            {start:10000},],
        color:['#8A3310','#C64918','#E55B25','#F2AD92','#F9DCD1']
    },
    series:[{
        name:'累计确诊人数',
        type:'map',
        mapType:'china',
        roam:false,//是否可拖动
        itemStyle:{
            normal:{
                borderWidth:.5,
                borderColor:'#009fe8',
                areaColor:'#FFEFD5',
            },
            emphasis:{
                borderWidth:.5,
                borderColor:'#4B0082',
                areaColor:'#FFF',
            },
        },
        label:{
            normal:{
                show:true,
                fontsize: 8,
            },
            emphasis:{
                show:true,
                fontsize: 8,
            },
        },
        data : mydata
    }]
}
ec_china.setOption(ec_china_option)