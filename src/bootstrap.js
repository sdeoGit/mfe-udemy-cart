import faker from 'faker';

const cartText = `<h4>Welcome to Cart MFE</h4> <div>you have ${faker.random.number()} item in cart</div>`
document.querySelector("#dev-cart").innerHTML = cartText;
