const repeatString = function(string,reps) {
    if(reps<0)
    return "ERROR"
    output=""
    for(let i = 0; i<reps; i++)
    {
        output += string
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
