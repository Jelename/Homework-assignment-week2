class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    // let newItemAdded = [];
    // newItemAdded.push(itemName, quantity, price); //[ 'soap', 1, 1.5 ]
    // let newItem = addNewItem(newItemAdded);
    // function addNewItem(newItemAdded) {
    //   return newItemAdded.reduce((acc, curr) => {
    //     if (curr === newItemAdded[0]) {
    //       acc.name = newItemAdded[0];
    //     } else if (curr === newItemAdded[1]) {
    //       acc.quantity = newItemAdded[1];
    //     } else {
    //       acc.pricePerUnit = newItemAdded[2];
    //     }
    //     return acc;
    //   }, {});
    // }
    // return this.items.push(newItem);
    const newItem = Object.assign({name: itemName, quantity: quantity, pricePerUnit:price})
    //console.log(newItem);
    return this.items.push(newItem);
  }



  // this.addItem =  (itemName,quantity,price) => {
  //      const objCart = Object.assign({name: itemName,quantity: quantity,pricePerUnit:price})
  //      this.items.push(objCart)
  //      return
  //  }

  clear() {
    return this.items.splice(0, this.items.length);
  }

  clone() {
    let clone = Object.assign(Object.create(this), this);
    return clone;
  }


}

//let clone = Object.assign( Object.create( Object.getPrototypeOf(orig)), orig)


//let clone = Object.assign( Object.create( Object.getPrototypeOf(orig)), orig)
//for(var k in firstObject) secondObject[k]=firstObject[k];
//Object.assign(secondObject, firstObject);
//const thirdObj = {
   // ...secondObj,
   // ...firstObj
// }


// 6.  Calling `cart.clone()` should return a _new_ ShoppingCart object that contains
// all the same items. However, the items array and all the items inside should be
// **copied** so that any changes to one of the carts does not affect the other.


const cart1 = new ShoppingCart();
//console.log(cart1.getItems());
cart1.addItem('soap', 1, 1.5);
console.log(cart1.getItems());
cart1.clear();
console.log(cart1.getItems());
//const cart2 = cart1.clone();
//console.log(cart2.getItems());
//cart2.addItem("Shoes", 1, 90.0);
//console.log(cart1.getItems());
//console.log(cart2.getItems());











module.exports = ShoppingCart;
