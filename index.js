var recipes = new Object();


function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({},{[key]:value});
  return newObj;
}