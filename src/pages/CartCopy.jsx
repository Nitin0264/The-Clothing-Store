  // 1. Update Quantity
const updateQuantity = (itemId, size, quantity) => {
  // Create a deep copy of the cart object so we don't mutate state directly
  let cartData = structuredClone(cardItem);
  
  if (quantity === 0) {
    delete cartData[itemId][size];
  } else {
    cartData[itemId][size] = quantity;
  }
  
  setCardItem(cartData);
};

// 2. Remove Item completely
const removeItem = (itemId, size) => {
  let cartData = structuredClone(cardItem);
  delete cartData[itemId][size];
  setCardItem(cartData);
};

// 3. Update Size (This removes the old size and adds the new one)
const updateSize = (itemId, oldSize, newSize, quantity) => {
  let cartData = structuredClone(cardItem);
  
  // Remove the old size
  delete cartData[itemId][oldSize];
  
  // If the user already has this new size in the cart, add to it. Otherwise, set it.
  if (cartData[itemId][newSize]) {
    cartData[itemId][newSize] += quantity;
  } else {
    cartData[itemId][newSize] = quantity;
  }
  
  setCardItem(cartData);
};