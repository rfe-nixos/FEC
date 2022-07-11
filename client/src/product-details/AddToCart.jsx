import React from 'react';

function AddToCart(sizes, quantity) {
  return (
    <form>
      <select>
        <option>{sizes}</option>
      </select>
      <select>
        <option>{quantity}</option>
      </select>
      <input type="submit" value="Add to Cart" />
    </form>
  );
}

export default AddToCart;
