const submitButton = document.getElementById('submit'); 
const ratings = document.querySelectorAll('.rate'); 
const userNote = document.getElementById('userNote');
const card1 = document.getElementById('card1'); 
const card2 = document.getElementById('card2');

for (var i = 0; i < ratings.length; i++) {
    const btn = ratings[i]; 
    btn.addEventListener('click',()=> {
       
       const rateNote = btn.innerHTML ;
       userNote.innerText = rateNote
       
    })
    
   
}

submitButton.addEventListener('click',()=> {
    card1.style.display = 'none'; 
    card2.style.display = 'flex'
})