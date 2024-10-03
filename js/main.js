// Enter your code below.

//const resourceShow=document.querySelector(".javascript-resources");

function resourceShow () {
    let resources = document.querySelector(".javascript-resources");
    resources.getElementsByClassName('d-none');
    resources.classList.remove('d-none');
}

const div = document.createElement("div");
const btn=document.querySelector('.btn');
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    div.classList.remove("d-none")
})