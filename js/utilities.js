function showSectionById(id){
    // hide all the section
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    // show the section
    document.getElementById(id).classList.remove('hidden');
}