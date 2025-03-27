function stringCal(string) {
    if (string === "") return 0;

    let sum =0;
    for (let index = 0; index < string.length; index++) {
        if(string[index] !== ","){
            sum += (string[index].charCodeAt(0)-48); // it is fast than parseInt
        }
    }
    return sum;
}

module.exports = { stringCal }