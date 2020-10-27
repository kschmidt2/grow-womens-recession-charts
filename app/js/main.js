// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


function drawHighcharts2() {
    Highcharts.chart("chart-container-1", {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Wf4Wwp5a0zC90jF1LiQBLDUhTgHVxFZMaWUVSz3QALc',
            googleSpreadsheetWorksheet: 1
        },
        // for bar charts only
        plotOptions: {
            series: {
                pointStart: 0,
                groupPadding: 0.1,
                dataLabels: {
                    enabled: true,
                    format: '{y}%',
                    verticalAlign: 'bottom'
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                autoRotation: false,
                style: {
                    whiteSpace: 'nowrap',
                }
            },
            tickLength: 5,
            type: 'category',
            offset: -91
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 3,
            min: -2,
            visible: false,
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                xAxis: {
                    labels: {
                        step: 2
                    }
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),

    Highcharts.chart("chart-container-2", {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Wf4Wwp5a0zC90jF1LiQBLDUhTgHVxFZMaWUVSz3QALc',
            googleSpreadsheetWorksheet: 2
        },
        // for line charts only
        plotOptions: {
            series: {
                lineWidth: 1,
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            enabled: false,
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),

    Highcharts.chart("chart-container-3", {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Wf4Wwp5a0zC90jF1LiQBLDUhTgHVxFZMaWUVSz3QALc',
            googleSpreadsheetWorksheet: 3
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            align: 'left',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 50,
            y: 5,
            floating: true
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 2000000,
            min: -4000000,
            tickAmount: 7
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            shared: true
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),

    Highcharts.chart("chart-container-4", {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Wf4Wwp5a0zC90jF1LiQBLDUhTgHVxFZMaWUVSz3QALc',
            googleSpreadsheetWorksheet: 4
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.05,
                stacking: 'percent'
            } 
        },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            layout: 'vertical'
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            shared: true,
            valueSuffix: '%'
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8,
                    layout: 'horizontal'
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),

    Highcharts.chart("chart-container-5", {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Wf4Wwp5a0zC90jF1LiQBLDUhTgHVxFZMaWUVSz3QALc',
            googleSpreadsheetWorksheet: 5
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            itemMarginTop: -10
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10,
                spacingLeft: 10
                },
                plotOptions: {
                    series: {
                        groupPadding: 0.2,
                        dataLabels: {
                            enabled: true,
                            allowOverlap: true,
                            format: "{y}%"
                        }
                    },   
                },
                xAxis: {
                    labels: {
                        align: 'left',
                        reserveSpace: false,
                        x: 5,
                        y: -27,
                    }
                },
                yAxis: {
                    visible: false,
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts2();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts2);
}

// social chart
// Highcharts.chart("chart-container-2", {
//     chart: {
//         type: 'area',
//         styledMode: true,
//         spacingBottom: 25,
//         spacingRight: 0,
//         spacingLeft: 0,
//         spacingTop: 60
//     }, 
//     title: {
//         text: null
//     },
//     data: {
//         googleSpreadsheetKey: '1Wf4Wwp5a0zC90jF1LiQBLDUhTgHVxFZMaWUVSz3QALc',
//         googleSpreadsheetWorksheet: 2
//     },
//     // for line charts only
//     plotOptions: {
//         series: {
//             lineWidth: 1,
//             clip: false,
//             marker: {
//                 enabled: false,
//                 symbol: 'circle',
//                 fillColor: '#ffffff',
//                 states: {
//                     hover: {
//                         fillColor: '#ffffff'
//                     }
//                 }
//             }
//         }
//     },
//     legend: {
//         enabled: false,
//     },
//     xAxis: {
//         labels: {
//             style: {
//                 whiteSpace: 'nowrap'
//             }
//         },
//         tickLength: 10,
//         // edits xAxis ticks
//         // dateTimeLabelFormats: {
//         //     week: '%b. %e',
//         // },
//         // tickInterval: 24 * 3600 * 1000 * 7
//     },
//     yAxis: {
//         title: false,
//         labels: {
//             useHTML: true,
//             overflow: 'allow'
//         },
//         min: 0,
//         max: 15,
//         tickAmount: 4
//         // adds commas to thousands
//         // formatter: function () {
//         //     return Highcharts.numberFormat(this.value,0,'.',',');
//         // },
//     },
//     credits: {
//         enabled: false
//     },
//     tooltip: {
//         shadow: false,
//         padding: 10
//     },
//     responsive: {
//         rules: [{
//         condition: {
//             maxWidth: 500
//         },
//         chartOptions: {
//             chart: {
//             spacingRight: 10
//             },
//             legend: {
//                 align: 'left',
//                 x: -18
//             },
//             tooltip: {
//                 enabled: false
//             }
//         }
//         }]
//     }
// }),