function createCard(title,cName,views,monthsold,duration,thumbnail){
let viewsgain;
    if(views<1000)
    {
viewsgain = views
    }
    else if(views<100000){
        viewsgain = views/1000 + "k"

    }
    else{
viewsgain = views/1000000 + "M"
    }

    let html = `
    <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewsgain} views . ${monthsold} months ago</p>

            </div>
        </div>
        
        `

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML+html

}


createCard("Welcome to Web development","CodeWithMujtaba",980000,"1","1:40:45","https://i.ytimg.com/vi/G9207EJySaA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwI7FE2jJ38lUoJ1qzgaRKpA2EzA)")


