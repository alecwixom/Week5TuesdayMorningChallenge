let odd = []
let even = []
let sortArr = function (arr) {
for (let i in arr) {
    if (arr[i] % 2 === 0){
        even.push(arr[i])
    } else {
        odd.push(arr[i])
    }
}
if (odd.length < even.length) {
    return odd
} else {
    return even
}
}
console.log(sortArr([160, 3, 1719, 19, 11, 13, -21]));