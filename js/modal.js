const modal = document.getElementById('confirmation-modal');
const donateButton = document.getElementById('btn-donate');

const closeButton = document.getElementById('closeButton');

donateButton.onclick = function(){
    modal.style.display = 'block';
};

closeButton.onclick = function(){
    modal.style.display = 'none'
};

// window.onclick = function(event){
//     if(event.target === modal){
//         modal.style.display = 'none';  
//     }
// };

