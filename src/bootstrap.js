import faker from "faker";

const mount = (el) => {
  const cartText = `<h4>Welcome to Cart MFE</h4> <div>you have ${faker.random.number()} item in cart</div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  /** Assuming dev-products element is not included in container app */
  if (el) {
    mount(el);
  }
}

export { mount };
