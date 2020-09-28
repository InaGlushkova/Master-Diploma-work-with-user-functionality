import { elements } from './base';

export const renderUserInfo = (user) => {
    const markup = `
        <div class="user render__info" data-itemid="${user.id}">
            <ul class="product__list">
                <li class="cart__item" data-itemid="${user.id}">
                    <h4 class="cart__price">Name</h4>
                    <p class="user__item">${user.name}</p>
                </li>
                <li class="cart__item" data-itemid="${user.id}">
                    <h4 class="cart__price">Address</h4>
                    <p class="user__item">${user.address}</p>
                </li>
                <li class="cart__item" data-itemid="${user.id}">
                    <h4 class="cart__price">Email</h4>
                    <p class="user__item">${user.email}</p>
                </li>
                <li class="cart__item" data-itemid="${user.id}">
                    <h4 class="cart__price">Phone Number</h4>
                    <p class="user__item">${user.phone}</p>
                </li>
            </ul>
        </div>
    `;

    elements.addUserInfo.insertAdjacentHTML('beforeend', markup);
}

export const renderOrder = item => {
    const markup = `
        <li class="cart__item" data-itemid="${item.id}">
            <p class="cart__ingredient">${item.ingredient}</p>
            <p class="cart__price">${item.price} ${item.currency}</p>
        </li>
    `;

    elements.addUserOrder.insertAdjacentHTML('beforeend', markup);
}

export const renderTotal = (total) => {
    const markup = `
    <br><br>
    <p class="cart__ingredient">Order number #${(Math.random()*1000000).toFixed(0)}</p>
    <br>
    <p class="total cart__ingredient">TOTAL: </p>
    <p class="cart__total cart__ingredient">${total}</p>
    <br>
    <p class="cart__ingredient">Your order includes:</p>
    <br>
`;

    elements.userOrderTotal.insertAdjacentHTML('afterbegin', markup);
}
