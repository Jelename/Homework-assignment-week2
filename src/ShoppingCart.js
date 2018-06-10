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
    clone.items = clone.items.slice(0);
    return clone;
    //I am not sure why this is not working.. because this way we are creating a new empty
    //object, which is bounded to the instance's prototype. And with Object.assing, we are coping
    //all the properties (in this case: items array) to a new object.
    //With clone.items.slice() we are coping all the values of that array.
    //And when I try to console.log it, it is working but it is not passing the test
  }
}



module.exports = ShoppingCart;
