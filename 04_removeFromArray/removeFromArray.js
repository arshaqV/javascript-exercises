const removeFromArray = function(array, ...elements) {
    for (const arg of elements) {
        do {
        const index = array.indexOf(arg);
if (index > -1) { 
  array.splice(index, 1);
}
      }  while(array.indexOf(arg) > -1)
    }
      return array

}

// Do not edit below this line
module.exports = removeFromArray;
