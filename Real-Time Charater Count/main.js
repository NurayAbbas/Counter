const textarea = document.getElementById('textarea');
const total = document.getElementById('total-counter');
const remain = document.getElementById('remaining-counter');

textarea.addEventListener('keyup',(e)=>{
  updateCount()
})
updateCount
function updateCount(){
total.innerText = textarea.value.length;
remain.innerText = textarea.getAttribute("maxLength") - textarea.value.length
}
updateCount()

