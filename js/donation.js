 
// add money to the donation stat

document.getElementById('btn-donate')
.addEventListener('click', function(){
    
    // get money to be added to the donation account
    const addMoneyInput = document.getElementById('input-donate-amount').value;
    
    const addMoneyNumber = parseFloat(addMoneyInput);
    
  //  validate input
  if(isNaN(addMoneyNumber) || addMoneyNumber <= 0){
    alert('Please enter a valid donation amount');
    return;
  }

    // get the donation balance
    const donateBalance = document.getElementById('donation-balance').innerText;
    
    const donateBalanceNumber = parseFloat(donateBalance);
   
    

   // cash out from main balance
  const mainAccountBalance = document.getElementById('main-balance').innerText;
  const mainBalanceNumber = parseFloat(mainAccountBalance);
 
  // validation
  if(mainBalanceNumber < addMoneyNumber){
    alert('You do not have enough money');
    
  

  // set new main balance 
  document.getElementById('donation-balance').innerText = donateBalanceNumber;
  return;
}

  // the new donation balance
  const newBalance = addMoneyNumber + donateBalanceNumber;

   // update the donation balance
   document.getElementById('donation-balance').innerText = newBalance;

  // the new main balance
  const newMainBalance = mainBalanceNumber - addMoneyNumber;
 

 
//  update the main balance

document.getElementById('main-balance').innerText = newMainBalance; 


//  history section

const div = document.createElement('div');
div.classList.add('bg-[#FFFFFF]');
div.innerHTML = `
  <h2 class="text-lg text-[#111111] font-bold"> ${addMoneyInput} Taka is Donated for famine-2024 at Noakhali,Bangladesh </h2>
  <p> Date: ${new Date().toString()}</p>
              
`
document.getElementById('history-container').appendChild(div);



   
    
});