$( document ).ready(function() {

    data = {
        datasets: [{
            data: [9, 7, 35],
            backgroundColor: ['rgba(0, 255, 120, 0.7)', 'rgba(255, 255, 0, 0.7)', 'rgba(255, 50, 0, 0.7)']

        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Distributed',
            'in-transit',
            'Required'
        ]
    };

    var donutIds = [];
    $('.donut').each(function () {
        //console.log(this.id);
        donutIds.push(this.id);
    });

    //console.log(donutDivs);

    for(var donut in donutIds){

        //console.log(donut);


        var stringID = donutIds[donut];
        if(stringID == undefined) continue;

        var ctx = document.getElementById(stringID).getContext('2d');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {}
        });

    }




});