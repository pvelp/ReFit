let btnBuy = document.querySelector("button.button.lear-more.buy");
let btnService = document.querySelector("button.button.lear-more.service");
let btnSale = document.querySelector("button.button.lear-more.sale");
let btns = [btnBuy, btnService, btnSale];
let modal = document.querySelector(".modalWrapper");
let close = document.querySelector(".close");
let body = document.body;
let back = document.querySelector(".modal-overlay");

let innerModalPic = document.querySelector(".innerModalPhoto");
let text = document.querySelector(".modalText");
let modalPhoto = document.querySelector(".modalPhoto");


btns.forEach(btn => {
    btn.addEventListener('click', ()=> {
    if ('buy' in btn.classList){
        innerModalPic.insertAdjacentHTML('afterbegin',
            `<img src='images/buy-modal.png' alt='Buying' className='modalPic'>`);
    }
    if ('service' in btn.classList){
        innerModalPic.insertAdjacentHTML('afterbegin',
            `<img src='images/service-modal.png' alt='Service' className='modalPic'>`);
    }
    if ('sale' in btn.classList){
            innerModalPic.insertAdjacentHTML('afterbegin',
                `<img src='images/sale-modal.png' alt='Sale' className='modalPic'>`);
    }

    modal.style.display = 'block';
    back.style.display = 'flex';

    close.addEventListener('click', ()=>{
        modal.style.display = 'none';
        back.style.display = 'none';
    })
})})

// btn.addEventListener('click', ()=> {
//     modal.style.display = 'block';
//     back.style.display = 'flex';
//
//     close.addEventListener('click', ()=>{
//         modal.style.display = 'none';
//         back.style.display = 'none';
//     })
// })

body.addEventListener('click', (event)=>{
    if (!btns.includes(event.target) &&
        event.target !== modal &&
        event.target !== text){
        modal.style.display = 'none';
        back.style.display = 'none';
    }
})