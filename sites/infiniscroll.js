const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
let inf_container = document.getElementById("infinite-scroll")

let arhiva ;

function readJson () {
    // http://localhost:8080
    fetch('https://walkthiswaystranica.github.io/sites/arhiva/arhiva.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        this.users = json;
        console.log(this.users)
        arhiva = json;
        for(let kuk = 0; kuk <2;kuk++){
            for(let i = arhiva.data.length-1; i > arhiva.data.length-4 ;i--){
            console.log(i)
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            const povez = card.querySelector("[data-povez]")
            header.src =  arhiva.data[i].path + "/pictures/1.jpg"
            console.log(header.src)
            body.textContent = arhiva.data[i].naslov
            povez.href = arhiva.data[i].path + "/index.html"
            userCardContainer.append(card)
            }
        }


    })
    .catch(function () {
        this.dataError = true;
    })
 }

readJson()
