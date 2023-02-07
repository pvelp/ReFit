let btnBuy = document.querySelector("button.button.lear-more.buy");
let btnService = document.querySelector("button.button.lear-more.service");
let btnSale = document.querySelector("button.button.lear-more.sale");

let head = document.querySelector("head");
let btns = new Array(...document.querySelectorAll("button.btn_contact"));
let childs = new Array();
btns.forEach(value => {
    childs.push(...value.children)
})
let liChilds = new Array();
childs.forEach(value => {
    liChilds.push(...value.children);
})

let lastChild = new Array();
liChilds.forEach(value => {
    lastChild.push(...value.children);
})


let modalBuy = document.querySelector("div.modalWrapper.buy");
let modalService = document.querySelector("div.modalWrapper.service");
let modalSale = document.querySelector("div.modalWrapper.sale");

let closeBuy = document.querySelector(".close.Buy");
let closeService = document.querySelector(".close.Service");
let closeSale = document.querySelector(".close.Sale");
let body = document.body;

// TODO: сделать универсальнее и меньше
let backBuy = document.querySelector(".modal-overlay.buyComp");
let backService = document.querySelector(".modal-overlay.serviceComp");
let backSale = document.querySelector(".modal-overlay.saleComp");

btnBuy.addEventListener("click", () => {
    modalBuy.style.display = "block";
    backBuy.style.display = "flex";

    closeBuy.addEventListener("click", () => {
        modalBuy.style.display = "none";
        backBuy.style.display = "none";
    });
});

btnService.addEventListener("click", () => {
    modalService.style.display = "block";
    backService.style.display = "flex";

    closeService.addEventListener("click", () => {
        modalService.style.display = "none";
        backService.style.display = "none";
    });
});

btnSale.addEventListener("click", () => {
    modalSale.style.display = "block";
    backSale.style.display = "flex";

    closeSale.addEventListener("click", (event) => {
        modalSale.style.display = "none";
        backSale.style.display = "none";
    });
});

body.addEventListener("click", (event) => {
    if (event.target !== btnService &&
        !btns.includes(event.target) &&
        !childs.includes(event.target) &&
        !liChilds.includes(event.target) &&
        !lastChild.includes(event.target)&&
        event.target !== head) {
        modalService.style.display = "none";
        backService.style.display = "none";
    }
});

body.addEventListener("click", (event) => {
    if (event.target !== btnSale &&
        !btns.includes(event.target) &&
        !childs.includes(event.target) &&
        !liChilds.includes(event.target) &&
        !lastChild.includes(event.target)&&
        event.target !== head) {
        modalSale.style.display = "none";
        backSale.style.display = "none";
    }
});

body.addEventListener("click", (event) => {
    if (event.target !== btnBuy &&
        !btns.includes(event.target) &&
        !childs.includes(event.target) &&
        !liChilds.includes(event.target) &&
        !lastChild.includes(event.target)&&
        event.target !== head) {
        modalBuy.style.display = "none";
        backBuy.style.display = "none";
    }
});
