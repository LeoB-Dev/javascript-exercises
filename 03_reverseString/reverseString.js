const reverseString = function(string) {
    splStr = string.split('');
    reColl = splStr.reverse();
    jColl = reColl.join('');
    return(jColl);
};

// Do not edit below this line
module.exports = reverseString;
