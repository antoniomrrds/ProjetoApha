function mutation(arr) {
    let result;
    let resultGeral
    let a = Array.from(arr[1])
    for (let index = 0; index < a.length; index++) {
        let re = new RegExp(a[index], "gi")
        result = arr[0].match(re)
        if (result == false || result == null) {
            return resultGeral = false
        } else {
            resultGeral = true
        }
    }
    return resultGeral

}

mutation(["hello", "h"]);
