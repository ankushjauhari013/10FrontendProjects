 function calculateLoan(){


   document.getElementById('resetBtn').addEventListener('click', function () {
      document.getElementById('loanAmount').value = ''; // Clear the input box
    });
    document.getElementById('resetBtn').addEventListener('click', function () {
      document.getElementById('interestRateInput').value = ''; // Clear the input box
    });
    document.getElementById('resetBtn').addEventListener('click', function () {
      document.getElementById('loanTermInput').value = ''; // Clear the input box
    });

    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm= parseFloat(document.getElementById("loanTermInput").value);

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        showError("Please enter Valid Numbers for all field");
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1-Math.pow(1+monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment* totalPayments )- loanAmount;
    displayResult(monthlyPayment,totalInterest);
 }

 function displayResult(monthlyPayment,totalInterest){
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
    <p><strong> Monthly Payment: ${monthlyPayment.toFixed(2)} </strong></p>
    <p> <strong> Total Interest: ${totalInterest.toFixed(2)} </strong></p>
    `;
 }

 function showError(message){
    const resultDiv= document.createElement("result");
    resultDiv.innerHTML = `<p class="error">${message}</p>`;
 }
 document.getElementById('calculateBtn').addEventListener("click",calculateLoan);

 document.getElementById('resetBtn').addEventListener('click', function () {
   document.getElementById('result').innerHTML = 'Final Result'; // Clear the input box
 });