const removeFromArray = function(listArr, ...otherArgs){
    arrayRemoved = listArr.filter(val => !otherArgs.includes(val));

    return(arrayRemoved)
}




// Do not edit below this line
module.exports = removeFromArray;

// Take notes here first:
// See mdn loops
