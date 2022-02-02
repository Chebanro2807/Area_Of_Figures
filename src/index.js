import getArea from "./components/libraryFormula";
import { resultSquare, inputSquare, resultParallelogram, inputParallelogramWidth, inputParallelogramHeight, resultRhombus, inputRhombusWidth, inputRhombusHeight} from "./components/domOperations";

document.querySelector('#showResultInDomKvadrat').addEventListener('click',()=>{
    resultSquare.innerHTML = getArea(inputSquare.value)
})

document.querySelector('#showResultInDomParalelograma').addEventListener('click',()=>{
    resultParallelogram.innerHTML = getArea(inputParallelogramWidth.value, inputParallelogramHeight.value)
})

document.querySelector('#showResultInDomRomba').addEventListener('click',()=>{
    resultRhombus.innerHTML = getArea(inputRhombusWidth.value, inputRhombusHeight.value)
})
