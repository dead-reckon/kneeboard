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
if (document.getElementById('a20b').checked) {
    master_dataset.push({
    label: 'A-20B',
    fill: false,
    data: [0, 0, 95, 192, 305, 422, 563, 730, 1010, 1519],
    backgroundColor: 'Black',
    borderColor: 'Crimson',
    borderWidth: 2}); }
if (document.getElementById('bf109e7').checked) {
    master_dataset.push({
    label: 'Bf 109 E-7',
    fill: false,
    data: [0, 0, 63, 131, 204, 282, 386, 514, 665, 861, 1154],
    backgroundColor: 'Blue',
    borderColor: 'Cyan',
    borderWidth: 2}); }
if (document.getElementById('bf109f2').checked) {
    master_dataset.push({
    label: 'Bf109F2',
    fill: false,
    data: [0, 0, 61, 127, 196, 269, 346, 431, 535, 666, 855, 1156],
    backgroundColor: 'BlueViolet',
    borderColor: 'DarkBlue',
    borderWidth: 2}); }
if (document.getElementById('bf109f4').checked) {
    master_dataset.push({
    label: 'Bf109F4',
    fill: false,
    data: [0, 0, 54, 107, 162, 222, 285, 358, 450, 575, 687, 854, 1160],
    backgroundColor: 'Brown',
    borderColor: 'DarkCyan',
    borderWidth: 2}); }
if (document.getElementById('bf109g2').checked) {
    master_dataset.push({
    label: 'Bf109G2',
    fill: false,
    data: [0, 0, 48, 97, 149, 201, 258, 317, 389, 471, 574, 702, 892],
    backgroundColor: 'BurlyWood',
    borderColor: 'DarkGoldenRod',
    borderWidth: 2}); }
if (document.getElementById('bf109g4').checked) {
    master_dataset.push({
    label: 'Bf109G4',
    fill: false,
    data: [0, 0, 50, 100, 154, 208, 266, 328, 404, 490, 597, 739, 952],
    backgroundColor: 'CadetBlue',
    borderColor: 'DarkGray',
    borderWidth: 2}); }
if (document.getElementById('bf109g6').checked) {
    master_dataset.push({
    label: 'Bf109G6',
    fill: false,
    data: [0, 0, 51, 103, 156, 211, 269, 331, 406, 495, 605, 754, 992],
    backgroundColor: 'Chartreuse',
    borderColor: 'DarkGreen',
    borderWidth: 2}); }
if (document.getElementById('bf110e2').checked) {
    master_dataset.push({
    label: 'Bf-110 E2',
    fill: false,
    data: [0, 0, 95, 193, 294, 404, 524, 668, 864],
    backgroundColor: 'Chocolate',
    borderColor: 'DarkKhaki',
    borderWidth: 2}); }
if (document.getElementById('bf110g2').checked) {
    master_dataset.push({
    label: 'Bf-110 G2',
    fill: false,
    data: [0, 0, 68, 136, 204, 278, 358, 445, 549],
    backgroundColor: 'Coral',
    borderColor: 'DarkMagenta',
    borderWidth: 2}); }
if (document.getElementById('fw190a3').checked) {
    master_dataset.push({
    label: 'FW190A3',
    fill: false,
    data: [0, 0, 61, 129, 205, 286, 371, 462, 569, 703, 942, 1133],
    backgroundColor: 'CornflowerBlue',
    borderColor: 'DarkOliveGreen',
    borderWidth: 2}); }
if (document.getElementById('fw190a5').checked) {
    master_dataset.push({
    label: 'FW190A5',
    fill: false,
    data: [0, 0, 61, 129, 205, 286, 371, 462, 569, 703, 942, 1133],
    backgroundColor: 'Crimson',
    borderColor: 'DarkOrange',
    borderWidth: 2}); }
if (document.getElementById('he111h16').checked) {
    master_dataset.push({
    label: 'He 111 H-16',
    fill: false,
    data: [180, 180, 390, 570, 900, 1296, 1854],
    backgroundColor: 'Cyan',
    borderColor: 'DarkOrchid',
    borderWidth: 2}); }
if (document.getElementById('he111h6').checked) {
    master_dataset.push({
    label: 'He 111 H-6',
    fill: false,
    data: [180, 180, 390, 570, 900, 1296, 1854],
    backgroundColor: 'DarkBlue',
    borderColor: 'DarkRed',
    borderWidth: 2}); }
if (document.getElementById('hs129b2').checked) {
    master_dataset.push({
    label: 'Hs 129 B-2',
    fill: false,
    data: [0, 0, 117, 236, 357, 499, 692, 989, 1653],
    backgroundColor: 'DarkCyan',
    borderColor: 'DarkSalmon',
    borderWidth: 2}); }
if (document.getElementById('il2m41').checked) {
    master_dataset.push({
    label: 'Il-2m41',
    fill: false,
    data: [0, 0, 147, 294, 452, 661, 963],
    backgroundColor: 'DarkGoldenRod',
    borderColor: 'DarkSeaGreen',
    borderWidth: 2}); }
if (document.getElementById('il2m42').checked) {
    master_dataset.push({
    label: 'Il-2m42',
    fill: false,
    data: [0, 0, 147, 294, 452, 661, 963],
    backgroundColor: 'DarkGray',
    borderColor: 'DarkSlateBlue',
    borderWidth: 2}); }
if (document.getElementById('il2m43').checked) {
    master_dataset.push({
    label: 'Il-2m43',
    fill: false,
    data: [0, 0, 147, 294, 452, 661, 963],
    backgroundColor: 'DarkGreen',
    borderColor: 'DarkSlateGray',
    borderWidth: 2}); }
if (document.getElementById('i16t24').checked) {
    master_dataset.push({
    label: 'I16t24',
    fill: false,
    data: [0, 0, 58, 124, 196, 275, 358, 457, 581, 745, 990],
    backgroundColor: 'DarkKhaki',
    borderColor: 'DarkSlateGrey',
    borderWidth: 2}); }
if (document.getElementById('ju52mg4e').checked) {
    master_dataset.push({
    label: 'Ju 52 mg4e',
    fill: false,
    data: [180, 180, 390, 570, 900, 1296, 1854],
    backgroundColor: 'DarkMagenta',
    borderColor: 'DarkTurquoise',
    borderWidth: 2}); }
if (document.getElementById('ju87d3').checked) {
    master_dataset.push({
    label: 'Ju-87 D3',
    fill: false,
    data: [0, 0, 128, 257, 392, 544, 689],
    backgroundColor: 'DarkOliveGreen',
    borderColor: 'DarkViolet',
    borderWidth: 2}); }
if (document.getElementById('ju88a4').checked) {
    master_dataset.push({
    label: 'Ju 88 A-4',
    fill: false,
    data: [0, 0, 162, 309, 486, 697, 909, 1160, 1588],
    backgroundColor: 'DarkOrange',
    borderColor: 'DeepPink',
    borderWidth: 2}); }
if (document.getElementById('lagg3s29').checked) {
    master_dataset.push({
    label: 'LaGG3s29',
    fill: false,
    data: [0, 0, 66, 135, 210, 287, 377, 490, 636, 840, 1167],
    backgroundColor: 'DarkOrchid',
    borderColor: 'DeepSkyBlue',
    borderWidth: 2}); }
if (document.getElementById('la5fns2').checked) {
    master_dataset.push({
    label: 'La5FNs2',
    fill: false,
    data: [0, 0, 42, 88, 142, 204, 269, 342, 431, 545, 705, 971],
    backgroundColor: 'DarkRed',
    borderColor: 'DimGray',
    borderWidth: 2}); }
if (document.getElementById('la5s8').checked) {
    master_dataset.push({
    label: 'La5s8',
    fill: false,
    data: [0, 0, 60, 116, 187, 270, 369, 481, 626, 829],
    backgroundColor: 'DarkSalmon',
    borderColor: 'DodgerBlue',
    borderWidth: 2}); }
if (document.getElementById('mc202s8').checked) {
    master_dataset.push({
    label: 'MC202s8',
    fill: false,
    data: [0, 0, 51, 107, 169, 233, 301, 382, 480, 603, 769, 1004],
    backgroundColor: 'DarkSeaGreen',
    borderColor: 'FireBrick',
    borderWidth: 2}); }
if (document.getElementById('mig3s24').checked) {
    master_dataset.push({
    label: 'MiG3s24',
    fill: false,
    data: [0, 0, 72, 148, 227, 308, 395, 488, 589, 710, 862, 1066],
    backgroundColor: 'DarkSlateBlue',
    borderColor: 'ForestGreen',
    borderWidth: 2}); }
if (document.getElementById('pe2ser35').checked) {
    master_dataset.push({
    label: 'Pe-2 ser.35',
    fill: false,
    data: [96, 96, 198, 314, 441, 612],
    backgroundColor: 'DarkSlateGray',
    borderColor: 'Fuchsia',
    borderWidth: 2}); }
if (document.getElementById('pe2ser87').checked) {
    master_dataset.push({
    label: 'Pe-2 ser.87',
    fill: false,
    data: [96, 96, 198, 314, 441, 612],
    backgroundColor: 'DarkSlateGrey',
    borderColor: 'Gainsboro',
    borderWidth: 2}); }
if (document.getElementById('p39l1').checked) {
    master_dataset.push({
    label: 'P-39L-1',
    fill: false,
    data: [0, 0, 84, 167, 250, 347, 482, 661, 931, 2143, 3350],
    backgroundColor: 'DarkTurquoise',
    borderColor: 'Gold',
    borderWidth: 2}); }
if (document.getElementById('p40e1').checked) {
    master_dataset.push({
    label: 'P-40E-1',
    fill: false,
    data: [0, 0, 84, 167, 250, 347, 482, 661, 931, 2143, 3350],
    backgroundColor: 'DarkViolet',
    borderColor: 'GoldenRod',
    borderWidth: 2}); }
if (document.getElementById('spitfiremkvbmerlin46').checked) {
    master_dataset.push({
    label: 'Spitfire',
    fill: false,
    data: [0, 0, 80, 157, 233, 311, 388, 469, 561, 652, 764, 904, 1099, 1477],
    backgroundColor: 'DeepPink',
    borderColor: 'Gray',
    borderWidth: 2}); }
if (document.getElementById('yak1s127').checked) {
    master_dataset.push({
    label: 'Yak1s127',
    fill: false,
    data: [0, 0, 62, 125, 190, 260, 340, 436, 553, 700, 907],
    backgroundColor: 'DeepSkyBlue',
    borderColor: 'Green',
    borderWidth: 2}); }
if (document.getElementById('yak1s69').checked) {
    master_dataset.push({
    label: 'Yak1s69',
    fill: false,
    data: [0, 0, 53, 116, 183, 253, 334, 429, 549, 706, 927],
    backgroundColor: 'DimGray',
    borderColor: 'GreenYellow',
    borderWidth: 2}); }
if (document.getElementById('yak7bs36').checked) {
    master_dataset.push({
    label: 'Yak7Bs36',
    fill: false,
    data: [0, 0, 58, 124, 191, 266, 354, 459, 589, 760, 1003],
    backgroundColor: 'DodgerBlue',
    borderColor: 'HotPink',
    borderWidth: 2}); }

    myChart.update();
};
