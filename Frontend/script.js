'use strict'

// let l1 = document.querySelector('.l1');
// let basket = document.querySelector('#basket');
// let storageBasket = [];
// let addBasket = document.querySelectorAll('.sneakersCatalog__button');
// addBasket.forEach(button=>{
//     button.addEventListener('click',()=>{
//
//     })
// });
//
// basket.addEventListener('click', ()=>{
//     l1.classList.remove('none')
//     let fon = document.querySelector('.fon');
//     console.log(fon);
//     fon.addEventListener('click', ()=>{
//         l1.classList.add('none');
//     })
// })
function renderProduct(image, name, price){
    let htmlcode = document.querySelector('.sneakersCatalog__cards');
    htmlcode.innerHTML+= `                    <div class="sneakersCatalog__card">
                        <button class="sneakersCatalog__addBookmarks">
                            <img src="images/Bookmarks.svg">
                        </button>
                        <div class="sneakersCatalog__image">
                            <img src="images/${image}.png">
                        </div>
                        <div class="sneakersCatalog__name">
                           ${name}
                        </div>
                        <div class="sneakersCatalog__wrapper">
                            <div class="sneakersCatalog__price">
                                <span class="text">ЦЕНА:</span> <br>
                                <span class="numbers">${price}</span>
                            </div>
                            <div class="sneakersCatalog__wrapperButton">
                                <button class="sneakersCatalog__button">
                                    <img src="images/addButton.svg">
                                </button>
                            </div>
                        </div>
                    </div>`;
}
fetch('View/CatalogView.php').then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
    .then(data => {
        renderProduct(data.image, data.name, data.price);

    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });