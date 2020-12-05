function frankenSplice(arr1, arr2, n) {
    const res = Array.from(arr2)
    res.splice(n, 0, ...arr1);
    console.log(res)
    return res

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

