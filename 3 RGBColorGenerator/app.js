const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redValueSpan = document.getElementById("redValue");
const greenValueSpan = document.getElementById("greenValue");
const blueValueSpan = document.getElementById("blueValue");

const colorBox = document.getElementById("color-box");
const copyButton = document.getElementById("copyButton");
const inputTypeRGBValue = document.getElementById("inputType");


redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyButton.addEventListener('click',copyRGBValue);

function updateColor(){

    const redvalue = redSlider.value;
    const greenvalue = greenSlider.value;
    const bluevalue = blueSlider.value;

    //console.log(redvalue,greenvalue,bluevalue);
    const rgbcolor = `rgb(${redvalue}, ${greenvalue}, ${bluevalue} )`
    //console.log(rgbcolor);

    colorBox.style.backgroundColor=rgbcolor ;
    redValueSpan.textContent = redvalue;
    greenValueSpan.textContent = greenvalue;
    blueValueSpan.textContent = bluevalue;

    inputTypeRGBValue.textContent = rgbcolor;
}

updateColor();

function copyRGBValue(){

    const redvalue = redSlider.value;
    const greenvalue = greenSlider.value;
    const bluevalue = blueSlider.value;

    const rgbcolor = `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`

    navigator.clipboard.writeText(rgbcolor)
    .then(()=>{
        alert("RGB Value copied to  clipboard: " + rgbcolor);
    })
    .catch((error)=>{
        console.error("Failed to Copy RGB Value: ",error);
    });
}