const removeFromArray = function(listArr, ...otherArgs) {
    for (let element in otherArgs){
        if (!(otherArgs[element] in listArr)){
            continue;
        } else if (otherArgs[element] in listArr){
                const index = listArr.indexOf(otherArgs[element]);
                const x = listArr.splice(index, 1);
        }
    }
    return(listArr)
}




// Do not edit below this line
module.exports = removeFromArray;

// Take notes here first:
// See mdn loops
