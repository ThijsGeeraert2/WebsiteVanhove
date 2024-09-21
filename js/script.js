const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function changeImg(){
    console.log(document.getElementById("toChange1").src)
    console.log("help")

    if (document.getElementById("toChange1").src == "../images/huis.jpg"){
        document.getElementById("toChange1").src = "./images/huiswerken.jpg"

    }
}