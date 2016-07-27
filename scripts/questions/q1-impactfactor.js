$(function() {

    $('#container').highcharts({

        chart: {
            type: 'column',
            style: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px'
            }
        },

        title: {
            text: null
        },

        xAxis: {
            type: 'category'
        },

        yAxis: {
            allowDecimals: true,
            min: 0,
            title: {
                text: 'Percentage of responses'
            },
            reversedStacks: false,
            labels: {
                formatter: function() {
                    return this.value + '%';
                }
            }
        },

        tooltip: {
            formatter: function() {
                return this.point.name + '<br><b>' +
                    this.series.name + '</b>' + '<br>' + this.y + '%';
            }
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            itemStyle: {
                fontWeight: 'normal'
            },
            labelFormatter: function() {
                return this.name;
            },
            title: {
                style: {
                    "fontWeight": "light",
                    "fontSize": "10px"
                },
                text: "click to hide"
            },
            verticalAlign: "top"
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            },
            series: {
                borderWidth: 3,
                borderRadius: 3,
                dataLabels: {
                    enabled: true,
                    inside: false,
                    formatter: function() {
                        return Highcharts.numberFormat(this.y, 0) + '%';
                    },
                    color: 'black'
                }
            }
        },

        series: [{
            name: '$2500',
            stack: '$2500',
            color: '#032977',
            data: [{
                name: 'High impact',
                y: 26.77
            }, {
                name: 'Medium impact',
                y: 20.61
            }, {
                name: 'Low impact',
                y: 8.70
            }]
        }, {
            name: '$3000',
            stack: '$3000',
            color: '#A0C7E5',
            data: [{
                name: 'High impact',
                y: 19.69
            }, {
                name: 'Medium impact',
                y: 16.79
            }, {
                name: 'Low impact',
                y: 8.70
            }]
        }, {
            name: '$3500',
            stack: '$3500',
            color: '#1D5C56',
            data: [{
                name: 'High impact',
                y: 9.45
            }, {
                name: 'Medium impact',
                y: 9.16
            }, {
                name: 'Low impact',
                y: 4.35
            }]
        }, {
            name: '$4000',
            stack: '$4000',
            color: '#C6DE8C',
            data: [{
                name: 'High impact',
                y: 8.66
            }, {
                name: 'Medium impact',
                y: 3.82
            }, {
                name: 'Low impact',
                y: 4.35
            }]
        }, {
            name: '$4500',
            stack: '$4500',
            color: '#800049',
            data: [{
                name: 'High impact',
                y: 3.94
            }, {
                name: 'Medium impact',
                y: 2.29
            }, {
                name: 'Low impact',
                y: 4.35
            }]
        }]

    });
});