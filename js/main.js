let btn = document.querySelector("button.button.lear-more.buy");
let modal = document.querySelector(".modalWrapper");
let close = document.querySelector(".close");
let body = document.body;
let text = document.querySelector(".modalText");

btn.addEventListener('click', ()=> {
    modal.style.display = 'block';
    close.addEventListener('click', ()=>{
        modal.style.display = 'none';
    })
})

body.addEventListener('click', (event)=>{
    if (event.target !== btn &&
        event.target !== modal &&
        event.target !== text){
        modal.style.display = 'none';
    }
})