console.log("Mujtaba")


let box = document.getElementsByClassName("Boxes")

console.log(box)

box[1].style.backgroundColor = "red"

document.getElementById("red").style.backgroundColor = "green"

document.querySelector(".Boxes").style.backgroundColor = "orange"

// node list

document.querySelectorAll(".Boxes").forEach(e =>{
    e.style.backgroundColor = "purple"
})

// html collection

document.getElementsByTagName("div")
