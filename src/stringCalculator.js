function stringCal(string) {
    if (string === "") return 0;

    let delimeter = [',','/n',"\n"];

    if (string.startsWith("//")) {
        delimeter = [string[2]];
        string = string.slice(4);
    }
    let sum = 0 , num =0;
    for (let index = 0; index < string.length; index++) {
        if(delimeter.includes(string[index])){
            sum += num;
            num = 0;
        }else{
            num = num * 10 + (string[index].charCodeAt(0)-48); // it is fast than parseInt
        }
    }
    return sum + num;
}

module.exports = { stringCal }