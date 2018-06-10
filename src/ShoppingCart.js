class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    const newItem = Object.assign({name: itemName, quantity: quantity, pricePerUnit:price})
    //console.log(newItem);
    return this.items.push(newItem);
  }

  clear() {
    return this.items.splice(0, this.items.length);
  }

  clone() {
    let clone = Object.assign(Object.create(this), this);
    return clone;
    //this way it is going to add all the properties and methods to new
    //instance, but all later changes will be applied to both old and new instance
  }
}


// 6.  Calling `cart.clone()` should return a _new_ ShoppingCart object that contains
// all the same items. However, the items array and all the items inside should be
// **copied** so that any changes to one of the carts does not affect the other.


// const cart1 = new ShoppingCart();
// //console.log(cart1.getItems());
// cart1.addItem('soap', 1, 1.5);
// console.log(cart1.getItems());
// cart1.clear();
// console.log(cart1.getItems());
//const cart2 = cart1.clone();
//console.log(cart2.getItems());
//cart2.addItem("Shoes", 1, 90.0);
//console.log(cart1.getItems());
//console.log(cart2.getItems());



module.exports = ShoppingCart;
