let bagItems;
onLoad()

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
};

function addToBag(productId) {
    bagItems.push(productId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
};

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        console.log('I am here');
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerHTML = bagItems.length;
    }
    else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
        return;
    }
    let innerHTML = '';
    items.forEach(product => {
        innerHTML += `
        <div class="item-container">
            <img class="item-image" src="${product.image}" alt="item image">
            <div class="rating">
                ${product.rating.stars} ⭐ | ${product.rating.count}
            </div>
            <div class="company-name">
                ${product.company}
            </div>
            <div class="item-name">
                ${product.item_name}
            </div>
            <div class="product-price">
                <span class="product-discountedPrice">Rs ${product.current_price}</span>
                <span class="product-strike">Rs ${product.original_price}</span>
                <span class="product-discountPercentage">(${product.discount_percentage}% OFF)</span>
            </div>
            <button type="button" class="btn btn-success btn-add-bag" onclick="addToBag(${product.id})">Add to Bag</button>
        </div>`
    });
    itemsContainerElement.innerHTML = innerHTML;
};