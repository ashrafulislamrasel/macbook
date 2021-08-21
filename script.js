// common memory function //
function memory(space) {
    const memoryCost = document.getElementById('extra-memory-cost');
    if (space == '8gb') {
        const extraMemoryCost = 00;
        memoryCost.innerText = parseInt(extraMemoryCost);
    } else {
        const extraMemoryCost = 180;
        memoryCost.innerText = parseInt(extraMemoryCost);
    }
    total()
};

// common storage function //
function storage(store) {
    const storageCost = document.getElementById('extra-storage-cost');
    if (store == '256gb') {
        const extraStorageCost = 00;
        storageCost.innerText = parseInt(extraStorageCost);
    } else if (store == '512gb') {
        const extraStorageCost = 100;
        storageCost.innerText = parseInt(extraStorageCost);
    } else if (store == '1tb') {
        const extraStorageCost = 180;
        storageCost.innerText = parseInt(extraStorageCost);
    }
    total()
};

// common delivery function //
function delivery(usual) {
    const deliveryCost = document.getElementById('extra-delivery-cost');
    if (usual) {
        const extraDeliveryCost = 00;
        deliveryCost.innerText = parseInt(extraDeliveryCost);
    } else {
        const extraDeliveryCost = 20;
        deliveryCost.innerText = parseInt(extraDeliveryCost);
    }
    total()
};

// total calculation //
function total() {
    const bestPrice = 1299;
    const memory = document.getElementById('extra-memory-cost').innerText;
    const memoryCost = parseInt(memory);
    const storage = document.getElementById('extra-storage-cost').innerText;
    const storageCost = parseInt(storage);
    const delivery = document.getElementById('extra-delivery-cost').innerText;
    const deliveryCost = parseInt(delivery);
    const total = bestPrice + memoryCost + storageCost + deliveryCost;
    const totalPrice = document.getElementsByClassName('total-price');
    for (const amount of totalPrice) {
        amount.innerText = total;
    }

};

// discount by promocode //
function discount() {
    const promoPrice = document.getElementById('promo-price');
    const previousPrice = promoPrice.innerText;
    const discountPrice = previousPrice - previousPrice * .2;
    promoPrice.innerText = discountPrice;

};

//-------------------- memory space events----------------------//
document.getElementById('memory-8gb-bttn').addEventListener('click', function () {
    memory('8gb');

});
document.getElementById('memory-16gb-bttn').addEventListener('click', function () {
    memory('16gb');

});

//-------------------- storage space events---------------------//
document.getElementById('ssd-256gb-btn').addEventListener('click', function () {
    storage('256gb');

});
document.getElementById('ssd-512gb-btn').addEventListener('click', function () {
    storage('512gb');

});
document.getElementById('ssd-1tb-btn').addEventListener('click', function () {
    storage('1tb');

});

//----------------------- delivery events----------------------//
document.getElementById('usual-delivery').addEventListener('click', function () {
    delivery(true);
});

document.getElementById('urgent-delivery').addEventListener('click', function () {
    delivery();
});

// ---------------------apply promocode-----------------------//
document.getElementById('promo-apply').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
    if (promoCode == 'stevekaku') {
        discount();
    }
    promoInput.value = '';
});