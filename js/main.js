// Enter your code below.

const resourceShow=document.querySelector(".javascript-resources");


const div = document.createElement("div");
const btn=document.querySelector('.btn');
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    div.classList.remove("d-none")
})