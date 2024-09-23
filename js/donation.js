 
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

    // if(addMoneyInput <= 0 || isNaN(addMoneyInput) || mainAccountBalance < addMoneyInput){
    //     alert('Invalid Input');
    //     return;
    //  }

   // cash out from main balance
 const mainAccountBalance = document.getElementById('main-balance').innerText;
 const mainBalanceNumber = parseFloat(mainAccountBalance);
 const newMainBalance = mainBalanceNumber - addMoneyNumber;
 document.getElementById('main-balance').innerText = newMainBalance;
 
//  history section
const div = document.createElement('div');
div.classList.add('bg-[#FFFFFF]');
div.innerHTML = `
  <h2 class="text-lg text-[#111111] font-bold"> ${addMoneyInput} Taka is Donated for famine-2024 at Noakhali,Bangladesh </h2>
  <p> ${new Date().toLocaleDateString()}</p>
              

`
 document.getElementById('history-container').appendChild(div);

    

   
    
});