

var country_graph = echarts.init(document.getElementById('graph'),"dark");

var country_graph_Option ={
    title: {
        text: '全国疫情趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['累计确诊', '新增确诊', '累计治愈', '累计死亡'],
        left: "right"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '累计确诊',
            type: 'line',
            stack: '总量',
            data: []
        },
        {
            name: '新增确诊',
            type: 'line',
            stack: '总量',
            data: []
        },
        {
            name: '累计治愈',
            type: 'line',
            stack: '总量',
            data: []
        },
        {
            name: '累计死亡',
            type: 'line',
            stack: '总量',
            data: []
        }
    ]
}
 country_graph.setOption(country_graph_Option);