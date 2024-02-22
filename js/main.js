// objectives :
// 1. get base 
// 2. get height
// 3. calculate area
// 4. display the area

// get base by function
function getArea(){
    // get the base
    // const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseInput = document.getElementById('triangle-base')
    const base = triangleBaseInput.value;
    //console.log(base);
     
    // get the height
    // const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightInput = document.getElementById('triangle-height');
    const height = triangleHeightInput.value;
   // console.log(height);
    
    // calculate area
    const area = 0.5 * base * height;
    //console.log(area);
} 


function calculateTrinangleArea(){
    const base = getInputFieldById('triangle-base');
    const height = getInputFieldById('triangle-height');

    const area = 0.5 * height * base ;

    const areaCalcDisp = document.getElementById('triangle-area-calc')
    areaCalcDisp.innerText = area;
    console.log(area);
}
function calculateRectangleArea(){
    const base = getInputFieldById('rectangle-base');
    const height = getInputFieldById('rectangle-height');

    const area = height * base ;
    const areaCalcDisp = document.getElementById('rectangle-area-calc')
    areaCalcDisp.innerText = area;
    console.log(area);
}
function calculateParallelogramArea(){
    const base = getInputFieldById('Parallelogram-base');
    const height = getInputFieldById('Parallelogram-height');

    const area = height * base ;
    const areaCalcDisp = document.getElementById('Parallelogram-area-calc')
    areaCalcDisp.innerText = area;
    console.log(area);
}
function calculateRhombusArea(){
    const base = getInputFieldById('Rhombus-base');
    const height = getInputFieldById('Rhombus-height');

    const area = 0.5 * height * base ;
    const areaCalcDisp = document.getElementById('Rhombus-area-calc')
    areaCalcDisp.innerText = area;
    console.log(area);
}
function calculatePentagonArea(){
    const base = getInputFieldById('Pentagon-base');
    const height = getInputFieldById('Pentagon-height');

    const area = 0.5 * height * base ;
    const areaCalcDisp = document.getElementById('Pentagon-area-calc')
    areaCalcDisp.innerText = area;
    
    console.log(area);
}
function calculateEllipseArea(){
    const base = getInputFieldById('Ellipse-base');
    const height = getInputFieldById('Ellipse-height');

    const area = 3.1416 * height * base ;
    const areaCalcDisp = document.getElementById('Ellipse-area-calc')
    areaCalcDisp.innerText = area;
    console.log(area.toFixed(2));
}


function getInputFieldById(fieldId){
    const inputField = document.getElementById(fieldId).value;
    const inputValue = parseFloat(inputField);
    return inputValue;
}
function displayCalcValue(id){
    const areaCalcDisp = document.getElementById(id)
    areaCalcDisp.innerText = area;
}

function convertToMeterSquare(id){
    const getCentimeterSquareValue = document.getElementById(id);
    const elementValue = parseFloat(getCentimeterSquareValue.value);
    const sqareValue = elementValue / 10 ** 6;

    getCentimeterSquareValue.innerText = sqareValue;

}



