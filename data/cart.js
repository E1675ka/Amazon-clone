export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [
    {
      productId: "1",
      quantity: 2,
    },
    {
      productId: "2",
      quantity: 1,
    },
  ];
}

function saveStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;
  const selected = document.querySelector(`.js-quantity-selector-${productId}`);
  let value = Number(selected.value);

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: `${productId}`,
      quantity: value,
    });
  }

  saveStorage();
}

export function removeItemsFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveStorage();
}
