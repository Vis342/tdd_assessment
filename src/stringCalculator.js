export  function stringCal(string) {
    if (!string) return 0;

    let delimeter = [',','/n',"\n"];

    if (string.startsWith("//")) {
        delimeter = [string[2]];
        string = string.slice(4);
    }
    let sum = 0 , num =0;
    let isNegative = false , negativeNumbers = [];
    for (let index = 0; index < string.length; index++) {
        if(delimeter.includes(string[index])){
            if (isNegative) {
                negativeNumbers.push(-num);
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
        negativeNumbers.push(-num);
    };
    if (negativeNumbers.length > 0) {
        throw new Error("Negatives not allowed: " + negativeNumbers.join(", "));
    }
    return sum + num;
}
