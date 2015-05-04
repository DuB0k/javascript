function doubleAll(numbers) {
    // SOLUTION GOES HERE
    var result = numbers.map(function(num){ 
        num = num * 2;
        return num;
    });
    return result;
}

module.exports = doubleAll