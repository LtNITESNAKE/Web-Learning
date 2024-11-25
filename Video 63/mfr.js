let arr  = [1,3,4,6,7,8,22,11,13];

// let newarr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
    
// }

// console.log(newarr)


let newarr = arr.map(e =>{
    return e**2
})

console.log(newarr)

const greaterthansevem = (e) =>{
    return (e > 7) ? true:false 
}
console.log(arr.filter(greaterthansevem))

console.log(arr.reduce((a,b) => a*b ))

let srt = Array.from("mujtaba")

console.log(srt)
