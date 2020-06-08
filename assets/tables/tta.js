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
                    text: 'Turn Time at altitude'
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
if (document.getElementById('a20b').checked) {
    master_dataset.push({
    label: 'A-20B',
    fill: false,
    data: [24.4, 24.4, 26.5, 31.3, 34.7, 42.7, 61.2, 122.2],
    backgroundColor: 'Black',
    borderColor: 'Crimson',
    borderWidth: 2}); }
if (document.getElementById('bf109e7').checked) {
    master_dataset.push({
    label: 'Bf 109 E-7',
    fill: false,
    data: [20.0, 20.0, 21.0, 22.0, 24.0, 28.0, 30.0, 36.0, 42.0],
    backgroundColor: 'Blue',
    borderColor: 'Cyan',
    borderWidth: 2}); }
if (document.getElementById('bf109f2').checked) {
    master_dataset.push({
    label: 'Bf109F2',
    fill: false,
    data: [22.0, 22.0, 23.2, 25.6, 28.8, 31.7, 35.9, 40.8, 49.4],
    backgroundColor: 'BlueViolet',
    borderColor: 'DarkBlue',
    borderWidth: 2}); }
if (document.getElementById('bf109f4').checked) {
    master_dataset.push({
    label: 'Bf109F4',
    fill: false,
    data: [23.7, 23.7, 25.0, 27.6, 30.7, 33.7, 37.3, 42.4, 49.1],
    backgroundColor: 'Brown',
    borderColor: 'DarkCyan',
    borderWidth: 2}); }
if (document.getElementById('bf109g2').checked) {
    master_dataset.push({
    label: 'Bf109G2',
    fill: false,
    data: [21.2, 21.2, 22.4, 24.4, 27.2, 29.5, 32.6, 36.7, 45.0],
    backgroundColor: 'BurlyWood',
    borderColor: 'DarkGoldenRod',
    borderWidth: 2}); }
if (document.getElementById('bf109g4').checked) {
    master_dataset.push({
    label: 'Bf109G4',
    fill: false,
    data: [21.2, 21.2, 22.4, 24.4, 27.2, 29.5, 32.6, 36.7, 45.0],
    backgroundColor: 'CadetBlue',
    borderColor: 'DarkGray',
    borderWidth: 2}); }
if (document.getElementById('bf109g6').checked) {
    master_dataset.push({
    label: 'Bf109G6',
    fill: false,
    data: [21.2, 21.2, 22.4, 24.4, 27.2, 29.5, 32.6, 36.7, 45.0],
    backgroundColor: 'Chartreuse',
    borderColor: 'DarkGreen',
    borderWidth: 2}); }
if (document.getElementById('bf110e2').checked) {
    master_dataset.push({
    label: 'Bf-110 E2',
    fill: false,
    data: [26.7, 26.7, 27.8, 30.0, 33.1, 37.7, 45.4, 56.1, 72.2, 95.0],
    backgroundColor: 'Chocolate',
    borderColor: 'DarkKhaki',
    borderWidth: 2}); }
if (document.getElementById('bf110g2').checked) {
    master_dataset.push({
    label: 'Bf-110 G2',
    fill: false,
    data: [26.7, 26.7, 27.8, 30.0, 33.1, 37.7, 45.4, 56.1, 72.2, 95.0],
    backgroundColor: 'Coral',
    borderColor: 'DarkMagenta',
    borderWidth: 2}); }
if (document.getElementById('fw190a3').checked) {
    master_dataset.push({
    label: 'FW190A3',
    fill: false,
    data: [23.0, 23.0, 24.0, 27.4, 28.0, 32.0, 35.0, 43.1, 49.7],
    backgroundColor: 'CornflowerBlue',
    borderColor: 'DarkOliveGreen',
    borderWidth: 2}); }
if (document.getElementById('fw190a5').checked) {
    master_dataset.push({
    label: 'FW190A5',
    fill: false,
    data: [23.0, 23.0, 24.0, 27.4, 28.0, 32.0, 35.0, 43.1, 49.7],
    backgroundColor: 'Crimson',
    borderColor: 'DarkOrange',
    borderWidth: 2}); }
if (document.getElementById('he111h16').checked) {
    master_dataset.push({
    label: 'He 111 H-16',
    fill: false,
    data: [38.0, 38.0, 40.4, 44.2, 52.6, 59.6, 72.8, 91.0],
    backgroundColor: 'Cyan',
    borderColor: 'DarkOrchid',
    borderWidth: 2}); }
if (document.getElementById('he111h6').checked) {
    master_dataset.push({
    label: 'He 111 H-6',
    fill: false,
    data: [38.0, 38.0, 40.4, 44.2, 52.6, 59.6, 72.8, 91.0],
    backgroundColor: 'DarkBlue',
    borderColor: 'DarkRed',
    borderWidth: 2}); }
if (document.getElementById('hs129b2').checked) {
    master_dataset.push({
    label: 'Hs 129 B-2',
    fill: false,
    data: [31.0, 31.0, 32.4, 33.9, 36.3, 45.5, 61.0, 80.1],
    backgroundColor: 'DarkCyan',
    borderColor: 'DarkSalmon',
    borderWidth: 2}); }
if (document.getElementById('il2m41').checked) {
    master_dataset.push({
    label: 'Il-2m41',
    fill: false,
    data: [24.2, 24.2, 25.2, 28.1, 33.2, 40.6, 51.4],
    backgroundColor: 'DarkGoldenRod',
    borderColor: 'DarkSeaGreen',
    borderWidth: 2}); }
if (document.getElementById('il2m42').checked) {
    master_dataset.push({
    label: 'Il-2m42',
    fill: false,
    data: [24.2, 24.2, 25.2, 28.1, 33.2, 40.6, 51.4],
    backgroundColor: 'DarkGray',
    borderColor: 'DarkSlateBlue',
    borderWidth: 2}); }
if (document.getElementById('il2m43').checked) {
    master_dataset.push({
    label: 'Il-2m43',
    fill: false,
    data: [24.2, 24.2, 25.2, 28.1, 33.2, 40.6, 51.4],
    backgroundColor: 'DarkGreen',
    borderColor: 'DarkSlateGray',
    borderWidth: 2}); }
if (document.getElementById('i16t24').checked) {
    master_dataset.push({
    label: 'I16t24',
    fill: false,
    data: [17.0, 17.0, 18.1, 20.1, 24.2, 27.4, 32.5, 47.7, 58.3],
    backgroundColor: 'DarkKhaki',
    borderColor: 'DarkSlateGrey',
    borderWidth: 2}); }
if (document.getElementById('ju52mg4e').checked) {
    master_dataset.push({
    label: 'Ju 52 mg4e',
    fill: false,
    data: [30.0, 30.0, 30.4, 34.2, 42.6, 59.6, 82.8],
    backgroundColor: 'DarkMagenta',
    borderColor: 'DarkTurquoise',
    borderWidth: 2}); }
if (document.getElementById('ju87d3').checked) {
    master_dataset.push({
    label: 'Ju-87 D3',
    fill: false,
    data: [24.4, 24.4, 24.8, 25.3, 29.7, 35.2, 43.6],
    backgroundColor: 'DarkOliveGreen',
    borderColor: 'DarkViolet',
    borderWidth: 2}); }
if (document.getElementById('ju88a4').checked) {
    master_dataset.push({
    label: 'Ju 88 A-4',
    fill: false,
    data: [32.0, 32.0, 42.0, 43.0, 45.0, 50.0, 70.0],
    backgroundColor: 'DarkOrange',
    borderColor: 'DeepPink',
    borderWidth: 2}); }
if (document.getElementById('lagg3s29').checked) {
    master_dataset.push({
    label: 'LaGG3s29',
    fill: false,
    data: [22.5, 22.5, 23.6, 26.4, 28.2, 31.6, 37.1, 43.5, 52.4],
    backgroundColor: 'DarkOrchid',
    borderColor: 'DeepSkyBlue',
    borderWidth: 2}); }
if (document.getElementById('la5fns2').checked) {
    master_dataset.push({
    label: 'La5FNs2',
    fill: false,
    data: [21.0, 21.0, 21.8, 23.0, 27.0, 29.5, 34.1, 40.8, 47.1],
    backgroundColor: 'DarkRed',
    borderColor: 'DimGray',
    borderWidth: 2}); }
if (document.getElementById('la5s8').checked) {
    master_dataset.push({
    label: 'La5s8',
    fill: false,
    data: [24.9, 24.9, 26.0, 27.4, 33.0, 35.1, 40.6, 48.6, 56.0],
    backgroundColor: 'DarkSalmon',
    borderColor: 'DodgerBlue',
    borderWidth: 2}); }
if (document.getElementById('mc202s8').checked) {
    master_dataset.push({
    label: 'MC202s8',
    fill: false,
    data: [20.5, 20.5, 21.2, 22.7, 24.7, 26.8, 30.8, 35.9, 42.5],
    backgroundColor: 'DarkSeaGreen',
    borderColor: 'FireBrick',
    borderWidth: 2}); }
if (document.getElementById('mig3s24').checked) {
    master_dataset.push({
    label: 'MiG3s24',
    fill: false,
    data: [21.8, 21.8, 22.3, 24.4, 26.2, 29.1, 32.9, 38.4, 46.9, 58.3],
    backgroundColor: 'DarkSlateBlue',
    borderColor: 'ForestGreen',
    borderWidth: 2}); }
if (document.getElementById('pe2ser35').checked) {
    master_dataset.push({
    label: 'Pe-2 ser.35',
    fill: false,
    data: [30.0, 30.0, 31.8, 34.5, 37.7, 42.1, 49.6],
    backgroundColor: 'DarkSlateGray',
    borderColor: 'Fuchsia',
    borderWidth: 2}); }
if (document.getElementById('pe2ser87').checked) {
    master_dataset.push({
    label: 'Pe-2 ser.87',
    fill: false,
    data: [30.0, 30.0, 31.8, 34.5, 37.7, 42.1, 49.6],
    backgroundColor: 'DarkSlateGrey',
    borderColor: 'Gainsboro',
    borderWidth: 2}); }
if (document.getElementById('p39l1').checked) {
    master_dataset.push({
    label: 'P-39L-1',
    fill: false,
    data: [25.5, 25.5, 27.0, 29.7, 32.2, 35.5, 42.5, 53.0, 69.6],
    backgroundColor: 'DarkTurquoise',
    borderColor: 'Gold',
    borderWidth: 2}); }
if (document.getElementById('p40e1').checked) {
    master_dataset.push({
    label: 'P-40E-1',
    fill: false,
    data: [25.5, 25.5, 27.0, 29.7, 32.2, 35.5, 42.5, 53.0, 69.6],
    backgroundColor: 'DarkViolet',
    borderColor: 'GoldenRod',
    borderWidth: 2}); }
if (document.getElementById('spitfiremkvbmerlin46').checked) {
    master_dataset.push({
    label: 'Spitfire',
    fill: false,
    data: [25.0, 25.0, 26.5, 29.0, 30.0, 32.5, 40.0, 50.0, 60.0],
    backgroundColor: 'DeepPink',
    borderColor: 'Gray',
    borderWidth: 2}); }
if (document.getElementById('yak1s127').checked) {
    master_dataset.push({
    label: 'Yak1s127',
    fill: false,
    data: [19.0, 19.0, 20.3, 22.6, 24.1, 27.2, 31.2, 36.5, 43.7],
    backgroundColor: 'DeepSkyBlue',
    borderColor: 'Green',
    borderWidth: 2}); }
if (document.getElementById('yak1s69').checked) {
    master_dataset.push({
    label: 'Yak1s69',
    fill: false,
    data: [19.0, 19.0, 20.7, 22.8, 24.6, 27.8, 32.2, 37.7, 45.2],
    backgroundColor: 'DimGray',
    borderColor: 'GreenYellow',
    borderWidth: 2}); }
if (document.getElementById('yak7bs36').checked) {
    master_dataset.push({
    label: 'Yak7Bs36',
    fill: false,
    data: [19.0, 19.0, 19.3, 21.5, 22.9, 25.9, 29.7, 34.7, 41.5],
    backgroundColor: 'DodgerBlue',
    borderColor: 'HotPink',
    borderWidth: 2}); }

    myChart.update();
};
