console.log("connected")


// dizanje zastora
let zastor = document.getElementById("zastor");
setTimeout(()=>{
    zastor.style.transform ="translateY(-4000px)"}
    ,1000)
    



// nav skrollanje
function skrollaj(ime){
    let el = document.getElementById(ime);
    el.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// pojavljivanje sidebara
let main = document.getElementById("main");
let content = document.getElementById("content");
let aside = document.getElementById("aside");

content.addEventListener("scroll", ()=>{
    if(content.scrollTop > 100){
        main.classList.remove("sidebar-hidden")
    }
    else {
        main.classList.add("sidebar-hidden")
    }
})


// za malu galerijicu

let galerijica = document.getElementById("galerijica");
let source_brojac = 0
setInterval(() => {
    galerijica.src = "./pictures/" + (((source_brojac += 1) % 4)+1) + ".jpeg"
}, 3000);

//kupi ime i sliku iz arhiva jsona i stavlja u photobanner