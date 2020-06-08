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
                    text: 'Optimal C.A.S. at altitude'
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
                            labelString: 'Speed (kilometers per hour)'
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
    data: [250, 250, 260, 270, 275, 280, 285, 290],
    backgroundColor: 'Black',
    borderColor: 'Crimson',
    borderWidth: 2}); }
if (document.getElementById('bf109e7').checked) {
    master_dataset.push({
    label: 'Bf 109 E-7',
    fill: false,
    data: [250, 250, 260, 260, 260, 270, 270, 260, 260],
    backgroundColor: 'Blue',
    borderColor: 'Cyan',
    borderWidth: 2}); }
if (document.getElementById('bf109f2').checked) {
    master_dataset.push({
    label: 'Bf109F2',
    fill: false,
    data: [260, 260, 265, 270, 275, 280, 285, 290, 295],
    backgroundColor: 'BlueViolet',
    borderColor: 'DarkBlue',
    borderWidth: 2}); }
if (document.getElementById('bf109f4').checked) {
    master_dataset.push({
    label: 'Bf109F4',
    fill: false,
    data: [250, 250, 260, 260, 260, 270, 270, 260, 260],
    backgroundColor: 'Brown',
    borderColor: 'DarkCyan',
    borderWidth: 2}); }
if (document.getElementById('bf109g2').checked) {
    master_dataset.push({
    label: 'Bf109G2',
    fill: false,
    data: [275, 275, 275, 265, 265, 265, 265, 260, 260],
    backgroundColor: 'BurlyWood',
    borderColor: 'DarkGoldenRod',
    borderWidth: 2}); }
if (document.getElementById('bf109g4').checked) {
    master_dataset.push({
    label: 'Bf109G4',
    fill: false,
    data: [275, 275, 275, 265, 265, 265, 265, 260, 260],
    backgroundColor: 'CadetBlue',
    borderColor: 'DarkGray',
    borderWidth: 2}); }
if (document.getElementById('bf109g6').checked) {
    master_dataset.push({
    label: 'Bf109G6',
    fill: false,
    data: [275, 275, 275, 265, 265, 265, 265, 260, 260],
    backgroundColor: 'Chartreuse',
    borderColor: 'DarkGreen',
    borderWidth: 2}); }
if (document.getElementById('bf110e2').checked) {
    master_dataset.push({
    label: 'Bf-110 E2',
    fill: false,
    data: [230, 230, 235, 240, 240, 245, 250, 250, 255, 260],
    backgroundColor: 'Chocolate',
    borderColor: 'DarkKhaki',
    borderWidth: 2}); }
if (document.getElementById('bf110g2').checked) {
    master_dataset.push({
    label: 'Bf-110 G2',
    fill: false,
    data: [230, 230, 235, 240, 240, 245, 250, 250, 255, 260],
    backgroundColor: 'Coral',
    borderColor: 'DarkMagenta',
    borderWidth: 2}); }
if (document.getElementById('fw190a3').checked) {
    master_dataset.push({
    label: 'FW190A3',
    fill: false,
    data: [310, 310, 300, 290, 290, 290, 290, 280, 280],
    backgroundColor: 'CornflowerBlue',
    borderColor: 'DarkOliveGreen',
    borderWidth: 2}); }
if (document.getElementById('fw190a5').checked) {
    master_dataset.push({
    label: 'FW190A5',
    fill: false,
    data: [310, 310, 300, 290, 290, 290, 290, 280, 280],
    backgroundColor: 'Crimson',
    borderColor: 'DarkOrange',
    borderWidth: 2}); }
if (document.getElementById('he111h16').checked) {
    master_dataset.push({
    label: 'He 111 H-16',
    fill: false,
    data: [260, 260, 260, 260, 240, 230, 230, 220],
    backgroundColor: 'Cyan',
    borderColor: 'DarkOrchid',
    borderWidth: 2}); }
if (document.getElementById('he111h6').checked) {
    master_dataset.push({
    label: 'He 111 H-6',
    fill: false,
    data: [260, 260, 260, 260, 240, 230, 230, 220],
    backgroundColor: 'DarkBlue',
    borderColor: 'DarkRed',
    borderWidth: 2}); }
if (document.getElementById('hs129b2').checked) {
    master_dataset.push({
    label: 'Hs 129 B-2',
    fill: false,
    data: [260, 260, 260, 255, 250, 245, 240, 235],
    backgroundColor: 'DarkCyan',
    borderColor: 'DarkSalmon',
    borderWidth: 2}); }
if (document.getElementById('il2m41').checked) {
    master_dataset.push({
    label: 'Il-2m41',
    fill: false,
    data: [185, 185, 185, 185, 180, 180, 180],
    backgroundColor: 'DarkGoldenRod',
    borderColor: 'DarkSeaGreen',
    borderWidth: 2}); }
if (document.getElementById('il2m42').checked) {
    master_dataset.push({
    label: 'Il-2m42',
    fill: false,
    data: [185, 185, 185, 185, 180, 180, 180],
    backgroundColor: 'DarkGray',
    borderColor: 'DarkSlateBlue',
    borderWidth: 2}); }
if (document.getElementById('il2m43').checked) {
    master_dataset.push({
    label: 'Il-2m43',
    fill: false,
    data: [185, 185, 185, 185, 180, 180, 180],
    backgroundColor: 'DarkGreen',
    borderColor: 'DarkSlateGray',
    borderWidth: 2}); }
if (document.getElementById('i16t24').checked) {
    master_dataset.push({
    label: 'I16t24',
    fill: false,
    data: [230, 230, 230, 235, 235, 240, 250, 265, 265],
    backgroundColor: 'DarkKhaki',
    borderColor: 'DarkSlateGrey',
    borderWidth: 2}); }
if (document.getElementById('ju52mg4e').checked) {
    master_dataset.push({
    label: 'Ju 52 mg4e',
    fill: false,
    data: [170, 170, 170, 170, 160, 155, 150],
    backgroundColor: 'DarkMagenta',
    borderColor: 'DarkTurquoise',
    borderWidth: 2}); }
if (document.getElementById('ju87d3').checked) {
    master_dataset.push({
    label: 'Ju-87 D3',
    fill: false,
    data: [275, 275, 265, 255, 245, 245, 235],
    backgroundColor: 'DarkOliveGreen',
    borderColor: 'DarkViolet',
    borderWidth: 2}); }
if (document.getElementById('ju88a4').checked) {
    master_dataset.push({
    label: 'Ju 88 A-4',
    fill: false,
    data: [250, 250, 260, 270, 275, 280, 290],
    backgroundColor: 'DarkOrange',
    borderColor: 'DeepPink',
    borderWidth: 2}); }
if (document.getElementById('lagg3s29').checked) {
    master_dataset.push({
    label: 'LaGG3s29',
    fill: false,
    data: [300, 300, 300, 285, 285, 275, 265, 260, 255],
    backgroundColor: 'DarkOrchid',
    borderColor: 'DeepSkyBlue',
    borderWidth: 2}); }
if (document.getElementById('la5fns2').checked) {
    master_dataset.push({
    label: 'La5FNs2',
    fill: false,
    data: [300, 300, 290, 280, 270, 260, 255, 250, 245],
    backgroundColor: 'DarkRed',
    borderColor: 'DimGray',
    borderWidth: 2}); }
if (document.getElementById('la5s8').checked) {
    master_dataset.push({
    label: 'La5s8',
    fill: false,
    data: [300, 300, 290, 280, 270, 260, 255, 250, 245],
    backgroundColor: 'DarkSalmon',
    borderColor: 'DodgerBlue',
    borderWidth: 2}); }
if (document.getElementById('mc202s8').checked) {
    master_dataset.push({
    label: 'MC202s8',
    fill: false,
    data: [260, 260, 260, 260, 250, 245, 235, 225, 215],
    backgroundColor: 'DarkSeaGreen',
    borderColor: 'FireBrick',
    borderWidth: 2}); }
if (document.getElementById('mig3s24').checked) {
    master_dataset.push({
    label: 'MiG3s24',
    fill: false,
    data: [350, 350, 330, 320, 320, 310, 310, 310, 310, 310],
    backgroundColor: 'DarkSlateBlue',
    borderColor: 'ForestGreen',
    borderWidth: 2}); }
if (document.getElementById('pe2ser35').checked) {
    master_dataset.push({
    label: 'Pe-2 ser.35',
    fill: false,
    data: [310, 310, 310, 300, 290, 280, 270],
    backgroundColor: 'DarkSlateGray',
    borderColor: 'Fuchsia',
    borderWidth: 2}); }
if (document.getElementById('pe2ser87').checked) {
    master_dataset.push({
    label: 'Pe-2 ser.87',
    fill: false,
    data: [310, 310, 310, 300, 290, 280, 270],
    backgroundColor: 'DarkSlateGrey',
    borderColor: 'Gainsboro',
    borderWidth: 2}); }
if (document.getElementById('p39l1').checked) {
    master_dataset.push({
    label: 'P-39L-1',
    fill: false,
    data: [230, 230, 230, 235, 235, 240, 245, 250, 255],
    backgroundColor: 'DarkTurquoise',
    borderColor: 'Gold',
    borderWidth: 2}); }
if (document.getElementById('p40e1').checked) {
    master_dataset.push({
    label: 'P-40E-1',
    fill: false,
    data: [230, 230, 230, 235, 235, 240, 245, 250, 255],
    backgroundColor: 'DarkViolet',
    borderColor: 'GoldenRod',
    borderWidth: 2}); }
if (document.getElementById('spitfiremkvbmerlin46').checked) {
    master_dataset.push({
    label: 'Spitfire',
    fill: false,
    data: [275, 275, 270, 265, 260, 255, 250, 245, 240],
    backgroundColor: 'DeepPink',
    borderColor: 'Gray',
    borderWidth: 2}); }
if (document.getElementById('yak1s127').checked) {
    master_dataset.push({
    label: 'Yak1s127',
    fill: false,
    data: [300, 300, 300, 285, 285, 275, 265, 260, 255],
    backgroundColor: 'DeepSkyBlue',
    borderColor: 'Green',
    borderWidth: 2}); }
if (document.getElementById('yak1s69').checked) {
    master_dataset.push({
    label: 'Yak1s69',
    fill: false,
    data: [300, 300, 300, 285, 285, 275, 265, 260, 255],
    backgroundColor: 'DimGray',
    borderColor: 'GreenYellow',
    borderWidth: 2}); }
if (document.getElementById('yak7bs36').checked) {
    master_dataset.push({
    label: 'Yak7Bs36',
    fill: false,
    data: [300, 300, 300, 285, 285, 275, 265, 260, 255],
    backgroundColor: 'DodgerBlue',
    borderColor: 'HotPink',
    borderWidth: 2}); }

    myChart.update();
};
