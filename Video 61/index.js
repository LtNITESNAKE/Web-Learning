/* Create a business name generator by combining list of
 adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
without using arrays 

*/

let adjective1 = "Crazy"
let adjective2 = "Amazing"
let adjective3 = "Fire "


let shop1 = "Engine"
let shop2 = "Foods"
let shop3 = "Garments"


let anotherWord1 = "Bros"
let anotherWord2 = "Limited"
let anotherWord3 = "Hub"

function randomnumberGenrator(){

  
    return Math.floor(Math.random()*3+1)

}

function randomAdjective(){

    let rand=randomnumberGenrator()
    if (rand == 1) return adjective1
    if(rand == 2) return adjective2
    return adjective3
}

function randomshop(){

    let rand=randomnumberGenrator()
    if (rand == 1) return shop1
    if(rand == 2) return shop2
    return shop3
}

function randomanotherWord(){

    let rand=randomnumberGenrator()
    if (rand == 1) return anotherWord1
    if(rand == 2) return anotherWord2
    return anotherWord3
}

let businessname = " "

businessname = businessname.concat(randomAdjective()," ",randomshop() ," ",randomanotherWord())


console.log(businessname)