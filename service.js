function getFactorielle(num){
    let result = 0;
    for (var i = 1; i <= num ; i++){
        result*= i;
    }
    return result;
}

module.exports = getFactorielle;