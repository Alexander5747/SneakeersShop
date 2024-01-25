'use strict'

let l1 = document.querySelector('.l1');
let basket = document.querySelector('#basket');
basket.addEventListener('click', ()=>{
    l1.classList.remove('none')
    let fon = document.querySelector('.fon');
    console.log(fon);
    fon.addEventListener('click', ()=>{
        l1.classList.add('none');
    })
})
fetch('View/CatalogView.php').then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
    .then(data => {
        for (const datum of data) {
            renderProduct(datum.id, datum.image, datum.name, datum.price);
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
function  renderProductBasket(id, name, price, image) {
    let htmlcode = document.querySelector('.sneakersCatalog__cards');
    htmlcode+=   ` <div class="basketSidebar__sneakers">
        <div class="basketSidebar__image">
            <img src="images/${image}.png" class="image" id="${image}">
        </div>
        <div class="basketSidebar__content">
            <div class="basketSidebar__text">
                ${name}
            </div>
            <div class="basketSidebar__price">
                ${price}
            </div>
        </div>
        <div class="basketSidebar__btn">
            <button class="basketSidebar__button" id="${id}"><img src="images/close.svg"/></button>
        </div>
    </div>`
}