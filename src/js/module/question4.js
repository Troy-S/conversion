const products = document.getElementsByClassName('sale_discount__BlSRb');
const secondProduct = products[1];
const price = secondProduct.innerText.substring(1);
const parsed = parseFloat(price);

const totalValue = parsed / (parsed / 100);
