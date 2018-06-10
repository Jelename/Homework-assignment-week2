function giveItBackLater(value, callback) {
  function callbackCalled() {
    callback(value);
  }
  setTimeout(callbackCalled, 100);
}

function addSomePromises(somePromise) {

}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    function callbackCalled() {
      resolve(value);
    }
    setTimeout(callbackCalled, 600);
  })
}










module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater}
