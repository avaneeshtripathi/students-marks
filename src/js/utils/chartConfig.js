export function getChartConfig (listX, listY) {
    return {
        chart: {
            type: 'column'
        },
        title: {
          	text: ''
        },
        xAxis: {
            categories: listX
        },
        yAxis: [{
            title: {
            		text: 'Marks',
              	style: {
              		  color: '#000'
                }
           	},
            tickInterval: 10,
            max: 100
        }],
        plotOptions: {
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        tooltip: {
            enabled: false
        },
        legend: {
            x: 100
        },
        series: [{
        		showInLegend: false,
            data: listY
        }]
    }
}
