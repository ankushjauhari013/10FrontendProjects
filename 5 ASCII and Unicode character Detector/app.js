function detectCharacter(){
    //https://ss64.com/ascii.html

    const characterInput = document.getElementById("characterInput");
    const result = document.getElementById("result");

    const character = characterInput.value;
    if(isASCII(character)){
        result.innerText = 'The Entered Character is an ASCII Character';
    }else{
        result.innerText = 'The Entered Character is an Unicode Character';
    }
}
function isASCII(character){
    return character.charCodeAt(0)<=127;
}