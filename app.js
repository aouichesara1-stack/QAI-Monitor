// Options communes pour toutes les jauges
var opts = {
  angle: 0.15,
  lineWidth: 0.25,
  radiusScale: 1,
  pointer: {
    length: 0.6,
    strokeWidth: 0.035,
    color: '#000000'
  },
  limitMax: false,
  limitMin: false,
  highDpiSupport: true,
  staticZones: true,
  staticLabelsFont: "10px Arial",
};

// --- CO2 ---
var gaugeCO2 = new Gauge(document.getElementById('gaugeCO2')).setOptions(opts);
gaugeCO2.maxValue = 10000;
gaugeCO2.setMinValue(400);
gaugeCO2.set(400);
gaugeCO2.animationSpeed = 32;
gaugeCO2.staticZones = [
  {strokeStyle: "#00FF00", min: 400, max: 1000},
  {strokeStyle: "#FFFF00", min: 1000, max: 2000},
  {strokeStyle: "#FF0000", min: 2000, max: 10000}
];
gaugeCO2.setOptions({staticLabels:{labels:[400, 3000, 6000, 10000], font:"10px Arial"}});

// --- Température ---
var gaugeTemp = new Gauge(document.getElementById('gaugeTemp')).setOptions(opts);
gaugeTemp.maxValue = 80;
gaugeTemp.setMinValue(-40);
gaugeTemp.set(25);
gaugeTemp.animationSpeed = 32;
gaugeTemp.staticZones = [
  {strokeStyle: "#00FF00", min: -40, max: 25},
  {strokeStyle: "#FFFF00", min: 25, max: 50},
  {strokeStyle: "#FF0000", min: 50, max: 80}
];
gaugeTemp.setOptions({staticLabels:{labels:[-40, 0, 25, 50, 80], font:"10px Arial"}});

// --- Humidité ---
var gaugeHum = new Gauge(document.getElementById('gaugeHum')).setOptions(opts);
gaugeHum.maxValue = 100;
gaugeHum.setMinValue(0);
gaugeHum.set(50);
gaugeHum.animationSpeed = 32;
gaugeHum.staticZones = [
  {strokeStyle: "#FF0000", min: 0, max: 30},
  {strokeStyle: "#00FF00", min: 30, max: 60},
  {strokeStyle: "#FFFF00", min: 60, max: 80},
  {strokeStyle: "#FF0000", min: 80, max: 100}
];
gaugeHum.setOptions({staticLabels:{labels:[0, 30, 60, 80, 100], font:"10px Arial"}});

// --- TVOC ---
var gaugeTVOC = new Gauge(document.getElementById('gaugeTVOC')).setOptions(opts);
gaugeTVOC.maxValue = 1087;
gaugeTVOC.setMinValue(0);
gaugeTVOC.set(200);
gaugeTVOC.animationSpeed = 32;
gaugeTVOC.staticZones = [
  {strokeStyle: "#00FF00", min: 0, max: 500},
  {strokeStyle: "#FFFF00", min: 500, max: 800},
  {strokeStyle: "#FF0000", min: 800, max: 1087}
];
gaugeTVOC.setOptions({staticLabels:{labels:[0, 500, 800, 1087], font:"10px Arial"}});

// --- CO ---
var gaugeCO = new Gauge(document.getElementById('gaugeCO')).setOptions(opts);
gaugeCO.maxValue = 10000;
gaugeCO.setMinValue(10);
gaugeCO.set(10);
gaugeCO.animationSpeed = 32;
gaugeCO.staticZones = [
  {strokeStyle: "#00FF00", min: 10, max: 200},
  {strokeStyle: "#FFFF00", min: 200, max: 600},
  {strokeStyle: "#FF0000", min: 600, max: 10000}
];
gaugeCO.setOptions({staticLabels:{labels:[10, 2000, 5000, 10000], font:"10px Arial"}});

// --- Test aléatoire ---
setInterval(() => {
  gaugeCO2.set(Math.floor(Math.random()*(10000-400)+400));
  gaugeTemp.set(Math.floor(Math.random()*(80+40)-40));
  gaugeHum.set(Math.floor(Math.random()*100));
  gaugeTVOC.set(Math.floor(Math.random()*1087));
  gaugeCO.set(Math.floor(Math.random()*(10000-10)+10));
}, 2000);

// --- Ventilateur avec LEDs ---
const fanRadios = document.querySelectorAll('input[name="fan"]');
const ledOn = document.querySelector('.led.on');
const ledOff = document.querySelector('.led.off');

fanRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if(radio.value === 'on' && radio.checked){
            ledOn.classList.add('on-active');
            ledOff.classList.remove('off-active');
        } else if(radio.value === 'off' && radio.checked){
            ledOff.classList.add('off-active');
            ledOn.classList.remove('on-active');
        }
    });
});