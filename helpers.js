function copyArray(arr) {
    if(arr === undefined) {
        return arr;
    }
    return JSON.parse(JSON.stringify(arr));
}

function xpDiff(lvl){
    var result = [lvl - 1 + 300 * Math.pow(2, (lvl-1)/7)]/4;
    return result;
}

function xpCumul(lvl){
    var sum = 0;
    for(i=1; i<lvl; i++){
        sum += xpDiff(i+1);
    }
    return sum;
};