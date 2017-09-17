$( document ).ready(function() {
    console.log( "ready!" );

    console.log(localStorage.getItem("orgName"));

    $('#orgHeaderName').html(localStorage.getItem("orgName").toUpperCase());

    var categoriesLabel = ['Food', 'Clothes', 'Medicines'];
    var stackedBarData = [{name:'distributed', data:[1,2,3]},{name: 'REQUIRED', data:[10, 21, 9]}];
    $(function () {
        var myChart = Highcharts.chart('2ColBarChart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Resources by Categories'
            },
            xAxis: {
                categories: categoriesLabel
            },
            yAxis: {
                title: {
                    text: '#items'
                }
            },
            series: stackedBarData
        });
    });



});