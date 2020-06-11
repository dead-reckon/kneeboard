---
title: js test
---
var ctx = document.getElementById("myChart").getContext('2d');

master_dataset = [];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000'],
        datasets: master_dataset
    },
    options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Time to Climb to Altitude'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Altitude (meters)'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time (Seconds)'
                        }
                    }]
                }
            }
});

function clicked() {
        master_dataset.length = 0;
{% for plane in site.data.ct %}
    // {% if plane.circus == 0 %}
if (document.getElementById('{{ plane.id }}').checked) {
    master_dataset.push({
    label: '{{ plane.name }}',
    fill: false,
    data: [{{ plane.spd }}],
    backgroundColor: '{{ plane.bgc }}',
    borderColor: '{{ plane.bc }}',
    borderWidth: 2}); }
    // {% endif %}
{% endfor %}

    myChart.update();
};
