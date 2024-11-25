let a = 5;

const reduce = (a) => {
    // Initialize an empty array
    let arr = [];
    
    // Fill the array with numbers from 1 to a
    for (let i = a; i > 0; i--) {
        arr.push(i);
    }

    // Compute the factorial by reducing the array
    return arr.reduce((b, a) => a * b, 1);
};

console.log(`The factorial of ${a} : ${reduce(a)}`);



  