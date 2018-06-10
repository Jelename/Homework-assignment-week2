function giveItBackLater(value, callback) {
  function callbackCalled() {
    callback(value)
}
setTimeout(callbackCalled, 103)
}

function addSomePromises() {

}

function promiseToGiveItBackLater(value) {

}




















module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater}
