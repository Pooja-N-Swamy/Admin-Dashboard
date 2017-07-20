$(document).ready(function(){
    var lineOptions = {
                type: 'bar',
                data: {
                    labels: [0,1,2,3,4,5],
                    datasets: [{
                        label: 'Visitors',
                        backgroundColor: window.chartColors.gainsboro,
                        data: [55,106,90,40,56,160]
                    }, {
                        label: 'Unvisitors',
                        backgroundColor: window.chartColors.blue,
                        data: [110,145,223,137,227,129]
                    }]
            },
                options: {
                    title:{
                        display:true,
                        text:"Page-visitors"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            }

            var ctx = document.getElementById("bar-graph").getContext("2d");
            var myBar = new Chart(ctx, lineOptions);
    
    var lineOptions = {
                type: 'line',
                data: {
                    labels: [2013-01-01,2013-01-02,2013-01-03,2013-01-04,2013-01-05,2013-01-06,],
                    datasets: [{
                        label: 'data 1',
                        backgroundColor: window.chartColors.blue,
                         borderColor: window.chartColors.red,
                        data: [55,106,90,40,56,160],
                        fill: false
                    }, {
                        label: 'data 2',
                        backgroundColor: window.chartColors.red,
                         borderColor: window.chartColors.blue,
                        data: [110,145,223,137,227,129],
                        fill: false
                    },{
                        label: 'data 3',
                        backgroundColor: window.chartColors.blue,
                         borderColor: window.chartColors.red,
                        data: [110,145,223,137,227,129],
                        fill: false
                    }]
            },
                options: {
                    title:{
                        display:false,
                        text:"Page-visitors"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            }

            var ctx = document.getElementById("line-graph").getContext("2d");
            var myLine = new Chart(ctx, lineOptions);
            
});