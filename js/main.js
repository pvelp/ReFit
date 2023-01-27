let btnBuy = document.querySelector("button.button.lear-more.buy");
let btnService = document.querySelector("button.button.lear-more.service");
let btnSale = document.querySelector("button.button.lear-more.sale");
// let btns = [btnBuy, btnService, btnSale];

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

    closeSale.addEventListener("click", () => {
        modalSale.style.display = "none";
        backSale.style.display = "none";
    });
});

body.addEventListener("click", (event) => {
    if (event.target !== btnService) {
        modalService.style.display = "none";
        backService.style.display = "none";
    }
});

body.addEventListener("click", (event) => {
    if (event.target !== btnSale) {
        modalSale.style.display = "none";
        backSale.style.display = "none";
    }
});

body.addEventListener("click", (event) => {
    if (event.target !== btnBuy) {
        modalBuy.style.display = "none";
        backBuy.style.display = "none";
    }
});
