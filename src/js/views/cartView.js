import { elements } from './base';
import { limitResTitle } from './searchView';

export const renderCartItem = item => {
    const markup = `
        <li class="cart__item" data-itemid="${item.id}">
            <div class="cart__data">
                <p class="cart__ingredient">${limitResTitle(item.ingredient)}</p>
                <p class="cart__price">${item.price} ${item.currency}</p>
            </div>
            <button class="cart__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;

    elements.cartList.insertAdjacentHTML('beforeend', markup);
};

export const deleteCartItem = id => {
    const el = document.querySelector(`[data-itemid="${id}"]`);

    if (el) {
        el.parentElement.removeChild(el);
    }
};

// Cart page
export const renderTitle = state => {
    const markup = `
        <p class="cart__title">${state.recipe.title}</p>
    `;
    elements.cart.insertAdjacentHTML('afterbegin', markup);
}

export const renderCart = item => {
    const markup = `
        <li class="cart__item" data-itemid="${item.id}">
            <p class="cart__ingredient">${limitResTitle(item.ingredient)}</p>
            <p class="cart__price">${item.price} ${item.currency}</p>
        </li>
    `;

    elements.cartPage.insertAdjacentHTML('beforeend', markup);
}

// Shopping summary
export const renderSummary = state => {
    const markup = `
        <p>Your cart summary</p>
        <br>
        <p class="total">TOTAL: </p>
        <p class="cart__total">${state.cart.sumPrice} EUR </p>
        <br>
    `;

    elements.summary.insertAdjacentHTML('afterbegin', markup);
};

// export const renderUserInfoCheckout = () => {
//     const markup = `
//         <div class="cart__checkout">
//             <form class="checkout__form">
//                 <label for="name">full name</label>
//                 <input type="text" id="name" name="name" required minlength="2" maxlength="50" size="10">
//                 <label for="email">email address</label>
//                 <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$">
//                 <label for="phone">phone number</label>
//                 <input type="text" id="phone" name="phone" required minlength="8" maxlength="9">
//                 <button class="btn-small checkout__btn" type="submit">
//                     <svg>
//                         <use href="img/icons.svg#icon-shopping-cart"></use>
//                     </svg>
//                     <span class="order__span">Create profile</span>
//                 </button>
//             </form>
//         </div>
//     `;
//     elements.cart.insertAdjacentHTML('afterbegin', markup);
// }