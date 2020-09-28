export default class User {
    constructor() {
        this.id = (Math.random()*100).toFixed();
        this.name = '';
        this.address = '';
        this.email = '';
        this.phone = '';
        this.noOrders = true;
        this.orderTotal = '';
        this.userFlag = 0;
    }

    persistData() {
        localStorage.setItem('orders', JSON.stringify(this.orders));
        localStorage.setItem('id', JSON.stringify(this.id));
        localStorage.setItem('name', JSON.stringify(this.name));
        localStorage.setItem('address', JSON.stringify(this.address));
        localStorage.setItem('email', JSON.stringify(this.email));
        localStorage.setItem('phone', JSON.stringify(this.phone));
        localStorage.setItem('orderTotal', JSON.stringify(this.orderTotal));
    }

    readStorage() {
        const storageOrders = JSON.parse(localStorage.getItem('orders'));
        const storageId = JSON.parse(localStorage.getItem('id'));
        const storageName = JSON.parse(localStorage.getItem('name'));
        const storageAddress = JSON.parse(localStorage.getItem('address'));
        const storageEmail = JSON.parse(localStorage.getItem('email'));
        const storagePhone = JSON.parse(localStorage.getItem('phone'));
        const orderTotal = JSON.parse(localStorage.getItem('orderTotal'));

        if(storageId) {
            this.id = storageId;
            this.name = storageName;
            this.address = storageAddress;
            this.email = storageEmail;
            this.phone = storagePhone;
            this.orderTotal = orderTotal;
        }

        if (storageOrders) {
            this.orders = storageOrders;
        }
    }

}
