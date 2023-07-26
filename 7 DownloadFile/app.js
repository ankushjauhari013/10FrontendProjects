const urlInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('myInput').value = ''; // Clear the input box
  });

downloadBtn.addEventListener("click", async() => {
    try{
        const response = await fetch(urlInput.value);
        const file= await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        // set the name of the downloaded file here:
        link.download = new Date().getTime();
        link.click();
        
    }catch(error){
        alert("Failed to download the file!");
    }
});

