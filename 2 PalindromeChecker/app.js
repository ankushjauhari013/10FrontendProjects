function isPalindrome(str){
    
    const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g);
    const reversestr = cleanstr.split('').reverse().join('');
    return cleanstr === reversestr;

}


function palindromeChecker(){
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');
    if(inputText.value == ""){
        alert ("Please enter some text to check");  //checking for empty string or only spaces in
        }
    
    else if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a palindrome`;
    }
    else{
        result.textContent = `"${inputText.value}" is not a palindrome`;
    }
    result.classList.add('fadeIn');
    inputText.value = '';
}
document.getElementById('checkButton').
addEventListener("click",palindromeChecker);



