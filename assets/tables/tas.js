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
                    text: 'T.A.S at altitude'
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
    // because JS doesn't let you manipulate global vars for some dumb reason I just set the global array to zero.
    master_dataset.length = 0;
    // Checks for check boxes
if (document.getElementById('a20b').checked) {
    master_dataset.push({
    label: 'A-20B',
    fill: false,
    data: [466, 466, 482, 500, 502, 521, 525, 518, 505, 486, 448],
    backgroundColor: 'Black',
    borderColor: 'Crimson',
    borderWidth: 2}); }
if (document.getElementById('bf109e7').checked) {
    master_dataset.push({
    label: 'Bf 109 E-7',
    fill: false,
    data: [477, 477, 497, 520, 533, 544, 564, 562, 558, 551, 541],
    backgroundColor: 'Blue',
    borderColor: 'Cyan',
    borderWidth: 2}); }
if (document.getElementById('bf109f2').checked) {
    master_dataset.push({
    label: 'Bf109F2',
    fill: false,
    data: [497, 497, 514, 533, 549, 569, 589, 602, 604, 599, 584, 553],
    backgroundColor: 'BlueViolet',
    borderColor: 'DarkBlue',
    borderWidth: 2}); }
if (document.getElementById('bf109f4').checked) {
    master_dataset.push({
    label: 'Bf109F4',
    fill: false,
    data: [526, 526, 550, 572, 590, 608, 627, 634, 630, 623, 612, 594, 556],
    backgroundColor: 'Brown',
    borderColor: 'DarkCyan',
    borderWidth: 2}); }
if (document.getElementById('bf109g2').checked) {
    master_dataset.push({
    label: 'Bf109G2',
    fill: false,
    data: [530, 530, 550, 577, 597, 615, 632, 653, 656, 656, 652, 642, 623],
    backgroundColor: 'BurlyWood',
    borderColor: 'DarkGoldenRod',
    borderWidth: 2}); }
if (document.getElementById('bf109g4').checked) {
    master_dataset.push({
    label: 'Bf109G4',
    fill: false,
    data: [517, 517, 538, 564, 584, 601, 618, 639, 641, 640, 634, 622, 601],
    backgroundColor: 'CadetBlue',
    borderColor: 'DarkGray',
    borderWidth: 2}); }
if (document.getElementById('bf109g6').checked) {
    master_dataset.push({
    label: 'Bf109G6',
    fill: false,
    data: [505, 505, 525, 547, 565, 581, 598, 615, 614, 610, 606, 596, 573],
    backgroundColor: 'Chartreuse',
    borderColor: 'DarkGreen',
    borderWidth: 2}); }
if (document.getElementById('bf110e2').checked) {
    master_dataset.push({
    label: 'Bf-110 E2',
    fill: false,
    data: [456, 456, 473, 494, 506, 516, 529, 523, 512, 496],
    backgroundColor: 'Chocolate',
    borderColor: 'DarkKhaki',
    borderWidth: 2}); }
if (document.getElementById('bf110g2').checked) {
    master_dataset.push({
    label: 'Bf-110 G2',
    fill: false,
    data: [489, 489, 511, 533, 549, 562, 573, 580, 578, 571],
    backgroundColor: 'Coral',
    borderColor: 'DarkMagenta',
    borderWidth: 2}); }
if (document.getElementById('fw190a3').checked) {
    master_dataset.push({
    label: 'FW190A3',
    fill: false,
    data: [535, 535, 558, 563, 562, 584, 607, 626, 624, 620, 613],
    backgroundColor: 'CornflowerBlue',
    borderColor: 'DarkOliveGreen',
    borderWidth: 2}); }
if (document.getElementById('fw190a5').checked) {
    master_dataset.push({
    label: 'FW190A5',
    fill: false,
    data: [535, 535, 558, 563, 562, 584, 607, 626, 624, 620, 613],
    backgroundColor: 'Crimson',
    borderColor: 'DarkOrange',
    borderWidth: 2}); }
if (document.getElementById('he111h16').checked) {
    master_dataset.push({
    label: 'He 111 H-16',
    fill: false,
    data: [332, 332, 341, 354, 347, 350, 362, 352],
    backgroundColor: 'Cyan',
    borderColor: 'DarkOrchid',
    borderWidth: 2}); }
if (document.getElementById('he111h6').checked) {
    master_dataset.push({
    label: 'He 111 H-6',
    fill: false,
    data: [332, 332, 341, 354, 347, 350, 362, 352],
    backgroundColor: 'DarkBlue',
    borderColor: 'DarkRed',
    borderWidth: 2}); }
if (document.getElementById('hs129b2').checked) {
    master_dataset.push({
    label: 'Hs 129 B-2',
    fill: false,
    data: [350, 350, 365, 382, 396, 387, 375, 354],
    backgroundColor: 'DarkCyan',
    borderColor: 'DarkSalmon',
    borderWidth: 2}); }
if (document.getElementById('il2m41').checked) {
    master_dataset.push({
    label: 'Il-2m41',
    fill: false,
    data: [382, 382, 396, 409, 409, 402, 390],
    backgroundColor: 'DarkGoldenRod',
    borderColor: 'DarkSeaGreen',
    borderWidth: 2}); }
if (document.getElementById('il2m42').checked) {
    master_dataset.push({
    label: 'Il-2m42',
    fill: false,
    data: [382, 382, 396, 409, 409, 402, 390],
    backgroundColor: 'DarkGray',
    borderColor: 'DarkSlateBlue',
    borderWidth: 2}); }
if (document.getElementById('il2m43').checked) {
    master_dataset.push({
    label: 'Il-2m43',
    fill: false,
    data: [382, 382, 396, 409, 409, 402, 390],
    backgroundColor: 'DarkGreen',
    borderColor: 'DarkSlateGray',
    borderWidth: 2}); }
if (document.getElementById('i16t24').checked) {
    master_dataset.push({
    label: 'I16t24',
    fill: false,
    data: [428, 428, 444, 459, 464, 479, 488, 485, 481],
    backgroundColor: 'DarkKhaki',
    borderColor: 'DarkSlateGrey',
    borderWidth: 2}); }
if (document.getElementById('ju52mg4e').checked) {
    master_dataset.push({
    label: 'Ju 52 mg4e',
    fill: false,
    data: [290, 290, 300, 280, 260, 240, 220],
    backgroundColor: 'DarkMagenta',
    borderColor: 'DarkTurquoise',
    borderWidth: 2}); }
if (document.getElementById('ju87d3').checked) {
    master_dataset.push({
    label: 'Ju-87 D3',
    fill: false,
    data: [367, 367, 381, 389, 389, 389, 421, 422, 418],
    backgroundColor: 'DarkOliveGreen',
    borderColor: 'DarkViolet',
    borderWidth: 2}); }
if (document.getElementById('ju88a4').checked) {
    master_dataset.push({
    label: 'Ju 88 A-4',
    fill: false,
    data: [440, 440, 460, 443, 462, 484, 478, 455],
    backgroundColor: 'DarkOrange',
    borderColor: 'DeepPink',
    borderWidth: 2}); }
if (document.getElementById('lagg3s29').checked) {
    master_dataset.push({
    label: 'LaGG3s29',
    fill: false,
    data: [506, 506, 530, 549, 551, 574, 572, 568, 559],
    backgroundColor: 'DarkOrchid',
    borderColor: 'DeepSkyBlue',
    borderWidth: 2}); }
if (document.getElementById('la5fns2').checked) {
    master_dataset.push({
    label: 'La5FNs2',
    fill: false,
    data: [583, 583, 603, 610, 607, 607, 628, 646, 642, 638],
    backgroundColor: 'DarkRed',
    borderColor: 'DimGray',
    borderWidth: 2}); }
if (document.getElementById('la5s8').checked) {
    master_dataset.push({
    label: 'La5s8',
    fill: false,
    data: [544, 544, 565, 572, 571, 568, 575, 595, 602],
    backgroundColor: 'DarkSalmon',
    borderColor: 'DodgerBlue',
    borderWidth: 2}); }
if (document.getElementById('mc202s8').checked) {
    master_dataset.push({
    label: 'MC202s8',
    fill: false,
    data: [500, 500, 523, 543, 559, 579, 604, 602, 598],
    backgroundColor: 'DarkSeaGreen',
    borderColor: 'FireBrick',
    borderWidth: 2}); }
if (document.getElementById('mig3s24').checked) {
    master_dataset.push({
    label: 'MiG3s24',
    fill: false,
    data: [495, 495, 512, 531, 550, 566, 583, 599, 616, 618, 617, 608],
    backgroundColor: 'DarkSlateBlue',
    borderColor: 'ForestGreen',
    borderWidth: 2}); }
if (document.getElementById('pe2ser35').checked) {
    master_dataset.push({
    label: 'Pe-2 ser.35',
    fill: false,
    data: [468, 468, 476, 486, 504, 498, 485, 468],
    backgroundColor: 'DarkSlateGray',
    borderColor: 'Fuchsia',
    borderWidth: 2}); }
if (document.getElementById('pe2ser87').checked) {
    master_dataset.push({
    label: 'Pe-2 ser.87',
    fill: false,
    data: [468, 468, 476, 486, 504, 498, 485, 468],
    backgroundColor: 'DarkSlateGrey',
    borderColor: 'Gainsboro',
    borderWidth: 2}); }
if (document.getElementById('p39l1').checked) {
    master_dataset.push({
    label: 'P-39L-1',
    fill: false,
    data: [494, 494, 514, 536, 559, 582, 601, 596, 587, 572, 546],
    backgroundColor: 'DarkTurquoise',
    borderColor: 'Gold',
    borderWidth: 2}); }
if (document.getElementById('p40e1').checked) {
    master_dataset.push({
    label: 'P-40E-1',
    fill: false,
    data: [494, 494, 514, 536, 559, 582, 601, 596, 587, 572, 546],
    backgroundColor: 'DarkViolet',
    borderColor: 'GoldenRod',
    borderWidth: 2}); }
if (document.getElementById('spitfiremkvbmerlin46').checked) {
    master_dataset.push({
    label: 'Spitfire',
    fill: false,
    data: [457, 457, 473, 493, 513, 534, 557, 576, 594, 594, 586],
    backgroundColor: 'DeepPink',
    borderColor: 'Gray',
    borderWidth: 2}); }
if (document.getElementById('yak1s127').checked) {
    master_dataset.push({
    label: 'Yak1s127',
    fill: false,
    data: [526, 526, 548, 567, 573, 599, 598, 594, 587, 577],
    backgroundColor: 'DeepSkyBlue',
    borderColor: 'Green',
    borderWidth: 2}); }
if (document.getElementById('yak1s69').checked) {
    master_dataset.push({
    label: 'Yak1s69',
    fill: false,
    data: [509, 509, 532, 549, 558, 583, 580, 575, 567, 556],
    backgroundColor: 'DimGray',
    borderColor: 'GreenYellow',
    borderWidth: 2}); }
if (document.getElementById('yak7bs36').checked) {
    master_dataset.push({
    label: 'Yak7Bs36',
    fill: false,
    data: [526, 526, 549, 565, 574, 586, 579, 570, 557, 538, 509],
    backgroundColor: 'DodgerBlue',
    borderColor: 'HotPink',
    borderWidth: 2}); }

    myChart.update();
};
