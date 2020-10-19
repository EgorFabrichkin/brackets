module.exports = function check(str, bracketsConfig) {
    let checkStr = bracketsConfig.flat();
    let deufaltStr = str.split(''); 

    console.log('deufakt string: ' + deufaltStr);
    console.log('check string: ' + checkStr);
    let count = 0
        
    for (let i = 0; i < deufaltStr.length; i++) {
        if (deufaltStr[i] === checkStr[i]) {
            count++;
        } else {
            count *= 0;
        } 
    }

    if (count > 0) {
        return true;
    } else {
        return false;
    }
}