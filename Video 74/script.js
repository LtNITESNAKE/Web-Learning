let button = document.getElementById("btn")

button.addEventListener("click" , () =>{
    alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>yaay you were clicked </b> Enjoy your click!"
})

button.addEventListener("contextmenu" , () =>{
    alert("I was clicked dont hack us ")
  
})