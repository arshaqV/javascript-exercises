const reverseString = function(string) {
    let stringArray = [...string]
    let reverse = ""
    for(let i = stringArray.length-1; i>=0; i--)
    reverse += stringArray[i]
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
