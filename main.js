let arr = [2, 4, 9, 10, 45, 67, 8, 90]
console.log(arr)

let result = arr.filter((v, i ,a) => {return arr[i] % 2 === 0})
console.log(result)

