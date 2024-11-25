 let arr = [1,2,3,5,6,7]



 console.log(arr)
 console.log(arr.length)

 arr[0]= 2343
 console.log(arr[0])
 console.log(arr[2])
 console.log(arr[3])
 console.log(arr[4])

 let a = "Mujtaba"

 a[0] = "r"

 console.log(typeof arr)

 console.log(arr.toString())
 console.log(arr.join(" and "))
 arr.pop()  // remove from last 
 console.log(arr)

 arr.push("Harry") // add in last 
 
 console.log(arr)

 console.log(arr.shift()) // remove form start 
 console.log(arr.unshift(222)) // add in start 

 console.log(arr)

delete arr
console.log(arr)
console.log(arr.length)
console.log(arr[6])

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

console.log(a1.concat(a2,a3))


console.log(arr.sort())


let numbers = [1,2,3,22,5,6]

// numbers.splice(1,2)

// numbers.splice(1,2,333,444)

const bubbleSort = (numbers) => {
    let n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
          let temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
    return numbers;
  }

console.log(arr.sort((a,b) => a-b))

