function stringCal(string) {
    if (string === "") return 0;

    let delimeter = [',','/n',"\n"];

    if (string.startsWith("//")) {
        delimeter = [string[2]];
        string = string.slice(4);
    }
    let sum = 0 , num =0;
    let isNegative = false;
    for (let index = 0; index < string.length; index++) {
        if(delimeter.includes(string[index])){
            if (isNegative) {
                throw  new Error("Negatives not allowed: " + -num);
            };
            sum += num;
            num = 0;
            isNegative = false;
        }else if(string[index] === "-"){
            isNegative = true;
        }else if (string[index] >= '0' && string[index] <= '9'){
            num = num * 10 + (string[index].charCodeAt(0)-48); // it is fast than parseInt
        }
    }

    if (isNegative) {
        throw  new Error("Negatives not allowed: " + -num);
    };
    return sum + num;
}

module.exports = { stringCal }