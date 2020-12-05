

function chunkArrayInGroups(arr, size) {
    let array = arr.length
    let result = []
    for (var i = 0; i < array; i += size) {
        result.push(arr.slice(i, i + size))

    }
    console.log(result)
}
chunkArrayInGroups(["a", "b", "c", "d"], 3);
