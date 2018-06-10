function pathFind(path, object) {
  let arrValues = path;
  let objValues = object;
  let finalValue = arrValues.reduce((acc, key) => {
    //debugger;
    let value = (acc && acc[key] !== 'undefined') ? acc[key] : undefined;
    return value;
  }, objValues);
  return finalValue;
}


module.exports = { pathFind };
