// Enter your code below.

const resourceShow=document.querySelector(".javascript-resources");

const div = document.createElement("div");
const btn=document.querySelector('.btn');
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    div.classList.remove("d-none")
});

resourceShow.addEventListener("mouseover", (event)=>{
    console.log(event.target)
    event.target.classList.add("fw-bold")
});

resourceShow.addEventListener("mouseout", (event)=>{
    console.log(event.target)
    event.target.classList.remove("fw-bold")
});

const list = document.querySelector(".list-group-item");

list.addEventListener('click', (event)=>{
    console.log(event.target)
    event.target.classList.add("fst-italic")
})