function giveItBackLater(value, callback) {
  function callbackCalled() {
    callback(value)
}
setTimeout(callbackCalled, 103)
}

function addSomePromises() {

}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    function callbackCalled() {
      if (value === undefined) {
        reject('Value not found')
      }
      resolve(value)
    }
    setTimeout(callbackCalled, 600)
  })
}










module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater}
