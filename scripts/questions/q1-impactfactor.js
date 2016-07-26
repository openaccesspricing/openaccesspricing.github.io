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
                y: 15.20
            }, {
                name: 'Medium impact',
                y: 15.51
            }, {
                name: 'Low impact',
                y: 9.46
            }, {
                name: 'No impact',
                y: 4.76
            }, {
                name: 'New journal',
                y: 13.33
            }]
        }, {
            name: '$3000',
            stack: '$3000',
            color: '#A0C7E5',
            data: [{
                name: 'High impact',
                y: 7.84
            }, {
                name: 'Medium impact',
                y: 8.85
            }, {
                name: 'Low impact',
                y: 5.41
            }, {
                name: 'No impact',
                y: 0.00
            }, {
                name: 'New journal',
                y: 6.67
            }]
        }, {
            name: '$3500',
            stack: '$3500',
            color: '#1D5C56',
            data: [{
                name: 'High impact',
                y: 5.15
            }, {
                name: 'Medium impact',
                y: 5.93
            }, {
                name: 'Low impact',
                y: 4.50
            }, {
                name: 'No impact',
                y: 0.00
            }, {
                name: 'New journal',
                y: 0.00
            }]
        }, {
            name: '$4000',
            stack: '$4000',
            color: '#C6DE8C',
            data: [{
                name: 'High impact',
                y: 2.92
            }, {
                name: 'Medium impact',
                y: 3.01
            }, {
                name: 'Low impact',
                y: 2.70
            }, {
                name: 'No impact',
                y: 0.00
            }, {
                name: 'New journal',
                y: 0.00
            }]
        }, {
            name: '$4500',
            stack: '$4500',
            color: '#800049',
            data: [{
                name: 'High impact',
                y: 2.34
            }, {
                name: 'Medium impact',
                y: 2.46
            }, {
                name: 'Low impact',
                y: 1.80
            }, {
                name: 'No impact',
                y: 0.00
            }, {
                name: 'New journal',
                y: 0.00
            }]
        }]

    });
});