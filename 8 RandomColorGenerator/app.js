const containerEL = document.querySelector(".container");

for(let index=0; index<100; index++){

    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");

    const colorCodeEl = document.createElement("span");
    colorCodeEl.classList.add("color-code");
    colorContainerEl.appendChild(colorCodeEl);

    const copyButtonEl = document.createElement("button");
    copyButtonEl.innerText = "Copy";
    colorContainerEl.appendChild(copyButtonEl);

    containerEL.appendChild(colorContainerEl);    
}

function randomColor(){

    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randIndex = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randIndex,randIndex+1);
        console.log(colorCode);
    }
    return colorCode;
}
const colorContainerEls = document.querySelectorAll(".color-container");

generateColor();
function generateColor(){

    for(let x=0;x<colorContainerEls.length;x++){

        const colorContainerEl = colorContainerEls[x];
        const newColorCode = randomColor();
        const colorCodeEl = colorContainerEl.querySelector(".color-code");

        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorCodeEl.innerText = "#" + newColorCode;
    }
}

colorContainerEls.forEach((colorContainerEl)=> {
    const copyButtonEl = colorContainerEl.querySelector("button");
    const colorCodeEl = colorContainerEl.querySelector(".color-code");
    copyButtonEl.addEventListener("click",()=>{
        const colorCode  = colorCodeEl.innerText;
        copyToClipboard(colorCode);

    });

});



function copyToClipboard(text){
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert("Copied to clipboard : " + text);
    })
    .catch((error) =>{
        console.log("Failed to copied to clipboard", error);
    })

}