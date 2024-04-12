export const addCartItem = (cartItems, productId) => {
  // if the product is already in the cart, update the quantity
  const existingCartItemIndex = cartItems.findIndex(
    (item) => item.productId === productId
  );
  if (existingCartItemIndex !== -1) {
    //make a copy of existing cart
    const updatedCart = [...cartItems];
    // upddate quantity
    updatedCart[existingCartItemIndex].quantity += 1;
    return updatedCart;
  } else {
    // if the new product is not in the cart add it with quantity 1
    const newItem = { productId, quantity: 1 };

    return [...cartItems, newItem];
  }
};

export const removeCartItem = (cartItems, productId) => {
  //check if product is in cart
  const existingCartItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.productId === productId
  );
  // if product exisits and the quantity is greater than 1 decrease the quantity (decrament)
  if (
    existingCartItemIndex !== -1 &&
    cartItems[existingCartItemIndex].quantity > 1
  ) {
    const updatedCart = cartItems.map((item) => {
      //if we locate the product with matching id it is in the cart
      if (item.productId === productId) {
        // update and decrease quantity by 1
        return { ...item, quantity: item.quantity - 1 };
      } else {
        // if not in the cart return the item as it is
        return item;
      }
    });
    return updatedCart;
  } else if (
    // if product exist, but the quantity is 1 remove it
    existingCartItemIndex !== -1 &&
    cartItems[existingCartItemIndex].quantity === 1
  ) {
    //filter out all the products that do not match the id
    const updateCart = cartItems.filter((item) => {
      return item.productId !== productId;
    });
    return updateCart;
  } else {
    // do nothing
    return;
  }
};

export const editCartItemQuantity = (cartItems, productId, newQuantity) => {
  //check if item exists in cart
  const existingCartItemIndex = cartItems.findIndex((item) => {
    return item.productId === productId;
  });
  // if exists in cart
  if (existingCartItemIndex !== -1) {
    // create copy of cart array never mutate exisiting data
    const updateCart = [...cartItems];
    updateCart[existingCartItemIndex].quantity = newQuantity;
    return updateCart;
    //if product is not in cart return cart unchanged
  } else {
    return cartItems;
  }
};
