console.log(" FUNCTIONS ")

function Greeting(name) {
    console.log("hey "+name+" you are nice")
    
}

function sum(a,b,c=2)//default value c
{
    // console.log(a+b)
    return a+b
}
// NAN mean not a number on terminal screen
// for an undefined value
Greeting("harry")
Greeting("Mujtaba")


result = sum(3,5)

console.log("the result is :"+result)


// Arrow Funcitons

const func1 =(x)=>{
    console.log("i am a arrow function",x)
}

func1(23)