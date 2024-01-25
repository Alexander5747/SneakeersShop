'use strict'
let addProductButton = document.querySelectorAll('.sneakersCatalog__');
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
        let addProductButton = document.querySelectorAll('.sneakersCatalog__button');
        addProductButton.forEach(button=>{
            let parentBlockButton = button.closest('.sneakersCatalog__card');
            let ImageProduct = parentBlockButton.querySelector('.image');
            let NameProduct = parentBlockButton.querySelector('.sneakersCatalog__name');
            let PriceProduct = parentBlockButton.querySelector('.numbers');
            let imageValue = ImageProduct.getAttribute('id');
            let nameValue = NameProduct.textContent.trim();
            let priceValue = PriceProduct.textContent.trim();
            button.addEventListener('click', ()=>{
                addBasket(button.id, nameValue, priceValue, imageValue);
            });
        });
        let addBookmarksButton = document.querySelectorAll('.sneakersCatalog__addBookmarks');
        addBookmarksButton.forEach(button=>{
            let parentBlockButton = button.closest('.sneakersCatalog__card');
            let ImageProduct = parentBlockButton.querySelector('.image');
            let NameProduct = parentBlockButton.querySelector('.sneakersCatalog__name');
            let PriceProduct = parentBlockButton.querySelector('.numbers');
            let imageValue = ImageProduct.getAttribute('id');
            let nameValue = NameProduct.textContent.trim();
            let priceValue = PriceProduct.textContent.trim();
            button.addEventListener('click', ()=>{
                addBookmarks(button.id, nameValue, priceValue, imageValue);
            });
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

function addBasket( id, name, price, image){
    let productData ={id:id, name:name, price:price, image:image}
    fetch('View/action/addbasket.php', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
        .then(data => {
            console.log(data);

        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
function addBookmarks( id, name, price, image){
    let productData ={id:id, name:name, price:price, image:image}
    fetch('View/action/addbookmarks.php', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
        .then(data => {
            console.log(data);

        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
function renderProduct(id,image, name, price){
    let htmlcode = document.querySelector('.basketSidebar__sneakersCard');
    htmlcode.innerHTML+= `                    <div class="sneakersCatalog__card">
                        <button class="sneakersCatalog__addBookmarks" id="${id}">
                            <img src="images/Bookmarks.svg">
                        </button>
                        <div class="sneakersCatalog__image">
                            <img src="images/${image}.png" class="image" id="${image}">
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
                                <button class="sneakersCatalog__button" id="${id}">
                                    <img src="images/addButton.svg">
                                </button>
                            </div>
                        </div>
                    </div>`;
}