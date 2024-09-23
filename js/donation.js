 
// add money to the donation stat

document.getElementById('btn-donate')
.addEventListener('click', function(){
    
    // get money to be added to the donation account
    const addMoneyInput = document.getElementById('input-donate-amount').value;
    const addMoneyNumber = parseFloat(addMoneyInput);
   
    // get the donation balance
    const donateBalance = document.getElementById('donation-balance').innerText;
    const donateBalanceNumber = parseFloat(donateBalance);
    
    // add addMoneyInput with donation balance
    const newBalance = addMoneyNumber + donateBalanceNumber;
    

    // update the donation balance
    document.getElementById('donation-balance').innerText = newBalance;



   // cash out from main balance
 const mainAccountBalance = document.getElementById('main-balance').innerText;
 const mainBalanceNumber = parseFloat(mainAccountBalance);
 const newMainBalance = mainBalanceNumber - addMoneyNumber;
 document.getElementById('main-balance').innerText = newMainBalance;
 
 
    

   
    
})