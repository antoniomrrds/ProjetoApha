function mutation(arr) {
    let a = arr[0]
    let b = arr[1]
    const re = new RegExp( b,"gi")
    var n = re.test(a);
    console.log(n)
    return n;
}

mutation(["Alien", "line"]);

