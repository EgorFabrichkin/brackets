module.exports = function check(str, bracketsConfig) {
    let checkedStr = [], sum = [], index = -1;

    if (str.length === 0) {
        return true;
    } else {
        for (let i = 0; i < str.length; i++) {
            let num = brackets(str[i], bracketsConfig);    
            
            if (index < 0) {
                index = 0;
                checkedStr[index] = num;
                sum[index] = 0;
            } else {
                if (num != num[index]) {
                    ++index;
                    checkedStr[index] = num;
                    sum[index] = 0;
                }
            }
    
            let start = bracketsConfig[checkedStr[index]][0], finish = bracketsConfig[checkedStr[index]][1];
    
            if (start != finish) {
                if (c == open) {
                    ++sum[index];
                } else {
                    --sum[index];
                }
            } else {
                sum[index] = sum[index] == 0 ? 1 : 0;
            }
            if (sum[index] === 0) {
                --index;
            }

        if (sum[index] < 0) {
            return false
        }    
        return index == -1;
        }
    }
}

function brackets(cutStr, bracketsConfig) {
    let count = 0;
    while((bracketsConfig[count][0] != cutStr) && (bracketsConfig[count][1] != cutStr)) {
        count++;
    }
    return count;
}