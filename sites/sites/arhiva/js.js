
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible = user.naslov.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible)
  })
})
/*
fetch("https://walkthiswaystranica.github.io/sites/arhiva/arhiva.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.path
      body.textContent = user.naslov
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })
*/

//fetch zavrzlame

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
        console.log(arhiva.data.length)
        for(let i = 0; i < arhiva.data.length;i++){
          console.log(i)

          const card = userCardTemplate.content.cloneNode(true).children[0]
          const header = card.querySelector("[data-header]")
          const body = card.querySelector("[data-body]")
          header.src =  arhiva.data[i].path + "/pictures/1.jpg"
          console.log(header.src)
          body.textContent = arhiva.data[i].naslov
          users.push({naslov:body.textContent, element: card})
          userCardContainer.append(card)
}

    })
    .catch(function () {
        this.dataError = true;
    })
 }

readJson()

