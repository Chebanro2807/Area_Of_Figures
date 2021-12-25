let resultSquare = document.getElementById('ploschadKvadrata');
let inputSquare = document.getElementById('dlinaStoroniKvadrata');
let resultParallelogram = document.getElementById('ploschadParalelograma');
let inputParallelogramWidth = document.getElementById('dlinaStoroniKvadrata');
let inputParallelogramHeight = document.getElementById('dlinaVisotyParalelograma');
let resultRhombus = document.getElementById('ploschadRomba');
let inputRhombusWidth = document.getElementById('dlinaStoronyRomba');
let inputRhombusHeight = document.getElementById('dlinaVisotyRomba');

function showResultInDomKvadrat() {
    resultSquare.innerHTML = getArea(inputSquare.value)
}

function showResultInDomParalelograma() {
    resultParallelogram.innerHTML = getArea(inputParallelogramWidth.value, inputParallelogramHeight.value)
}

function showResultInDomRomba() {
    resultRhombus.innerHTML = getArea(inputRhombusWidth.value, inputRhombusHeight.value)
}
