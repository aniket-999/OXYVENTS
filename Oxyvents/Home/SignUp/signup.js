const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const msg = document.querySelector('.msg');

form.addEventListener('submit' , onsumbit)

function onsumbit(e){
   e.preventDefault();
   if(email.value === '' || pass.value === '' || name.value === ''){
   msg.classList.add('error');
   msg.innerHTML = 'Please fill all fields';

   setTimeout(() => msg.remove() , 5000);
   }
}