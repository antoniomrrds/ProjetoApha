function truncateString(str, num) {
    // return str;
    if (str.length > num) {
        return console.log(str.slice(0, num) + "...")
    } else {
        return console.log(str)
    }
}
truncateString("A-", 1) 