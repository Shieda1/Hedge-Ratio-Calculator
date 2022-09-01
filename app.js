// https://www.omnicalculator.com/finance/hedge-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const hedgeratioRadio = document.getElementById('hedgeratioRadio');
const valueoftotalexposureRadio = document.getElementById('valueoftotalexposureRadio');
const valueofhedgepositionRadio = document.getElementById('valueofhedgepositionRadio');

let hedgeratio;
let valueoftotalexposure = v1;
let valueofhedgeposition = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

hedgeratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Value of total exposure';
  variable2.textContent = 'Value of hedge position';
  valueoftotalexposure = v1;
  valueofhedgeposition = v2;
  result.textContent = '';
});

valueoftotalexposureRadio.addEventListener('click', function() {
  variable1.textContent = 'Hedge ratio';
  variable2.textContent = 'Value of hedge position';
  hedgeratio = v1;
  valueofhedgeposition = v2;
  result.textContent = '';
});

valueofhedgepositionRadio.addEventListener('click', function() {
  variable1.textContent = 'Hedge ratio';
  variable2.textContent = 'Value of total exposure';
  hedgeratio = v1;
  valueoftotalexposure = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(hedgeratioRadio.checked)
    result.textContent = `Hedge ratio = ${computehedgeratio().toFixed(2)}`;

  else if(valueoftotalexposureRadio.checked)
    result.textContent = `Value of total exposure = ${computevalueoftotalexposure().toFixed(2)}`;

  else if(valueofhedgepositionRadio.checked)
    result.textContent = `Value of hedge position = ${computevalueofhedgeposition().toFixed(2)}`;
})

// calculation

function computehedgeratio() {
  return (Number(valueofhedgeposition.value) / Number(valueoftotalexposure.value)) * 100;
}

function computevalueoftotalexposure() {
  return Number(valueofhedgeposition.value) / (Number(hedgeratio.value) / 100);
}

function computevalueofhedgeposition() {
  return (Number(hedgeratio.value) / 100) * Number(valueoftotalexposure.value);
}