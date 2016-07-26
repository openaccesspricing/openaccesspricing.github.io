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
                name: 'Africa & Middle East',
                y: 9.41
            }, {
                name: 'Asia',
                y: 18.65
            }, {
                name: 'Australasia',
                y: 10.61
            }, {
                name: 'Central & South America',
                y: 9.82
            }, {
                name: 'Europe',
                y: 15.09
            }, {
                name: 'North America',
                y: 15.77
            }]
        }, {
            name: '$3000',
            stack: '$3000',
            color: '#A0C7E5',
            data: [{
                name: 'Africa & Middle East',
                y: 5.10
            }, {
                name: 'Asia',
                y: 8.53
            }, {
                name: 'Australasia',
                y: 6.82
            }, {
                name: 'Central & South America',
                y: 4.29
            }, {
                name: 'Europe',
                y: 9.68
            }, {
                name: 'North America',
                y: 8.93
            }]
        }, {
            name: '$3500',
            stack: '$3500',
            color: '#1D5C56',
            data: [{
                name: 'Africa & Middle East',
                y: 2.75
            }, {
                name: 'Asia',
                y: 7.54
            }, {
                name: 'Australasia',
                y: 6.06
            }, {
                name: 'Central & South America',
                y: 3.68
            }, {
                name: 'Europe',
                y: 5.10
            }, {
                name: 'North America',
                y: 7.14
            }]
        }, {
            name: '$4000',
            stack: '$4000',
            color: '#C6DE8C',
            data: [{
                name: 'Africa & Middle East',
                y: 1.96
            }, {
                name: 'Asia',
                y: 4.96
            }, {
                name: 'Australasia',
                y: 3.79
            }, {
                name: 'Central & South America',
                y: 1.84
            }, {
                name: 'Europe',
                y: 2.29
            }, {
                name: 'North America',
                y: 4.76
            }]
        }, {
            name: '$4500',
            stack: '$4500',
            color: '#800049',
            data: [{
                name: 'Africa & Middle East',
                y: 1.18
            }, {
                name: 'Asia',
                y: 4.17
            }, {
                name: 'Australasia',
                y: 3.03
            }, {
                name: 'Central & South America',
                y: 1.84
            }, {
                name: 'Europe',
                y: 1.56
            }, {
                name: 'North America',
                y: 4.46
            }]
        }]

    });
});