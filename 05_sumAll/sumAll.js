const sumAll = function(num1, num2) {
    let numList = [];
    let sum = 0;

    if (num1 >= 0 
        && num2 >= 0 
        && typeof num1 === 'number' 
        && typeof num2 === 'number'
        && (num1 % 1) == 0
        && (num2 % 1) == 0){
        if (num1 < num2){
            numList.push(num1);
            sum += num1;
    
            while (num1 < num2){
                num1++
                numList.push(num1);
                sum+=num1;
            }
        } else {
            numList.push(num1);
            sum+= num1;
    
            while(num2 < num1){
                num1--
                numList.push(num1);
                sum+=num1;
            }
        }
    } else {
        return("ERROR")
    }
    // console.log("Sum:", sum);
    return(sum);
};


// Do not edit below this line
module.exports = sumAll;

// Take notes here first: