document.body.style.backgroundColor = "rgba(2, 6, 23, 1)";
let Divs = document.createElement('div');
Divs.className = "bg";
Divs.style.padding = "10px";
Divs.style.width = "12rem";
Divs.style.height = "12rem";
Divs.style.background = "linear-gradient(135deg, #12b9e7, #b1bbc8, #baa5cf)";
Divs.style.transition = "all 1s ease";
Divs.style.borderRadius = "6px";
Divs.style.margin = "auto";
Divs.style.marginTop = "12rem";

document.body.appendChild(Divs);


let NeButton = document.createElement('button');
NeButton.className = "NeButton";
NeButton.innerText = "Click";
NeButton.style.padding = "5px";
NeButton.style.width = "4rem";
NeButton.style.borderRadius = "5px";
NeButton.style.margin = "73px";
NeButton.style.borderWidth = "2px";
NeButton.style.borderStyle = "solid";
NeButton.style.borderColor = "white";
NeButton.style.fontWeight = "700";
NeButton.style.textAlign = "center";


let conditons = true;
NeButton.addEventListener("click", function () {
    if (!conditons) {
        Divs.style.background = "linear-gradient(135deg, #12b9e7, #111519, #7d16e3)";
        // Divs.style.scale = "0.5"
        Divs.style.transform = "translateX(350px)";
        Divs.style.transition = "all 2s ease"
        conditons = true;
    }else {
        Divs.style.background = "linear-gradient(135deg, #12b9e7, #111519, #7d16e3)";
        // Divs.style.scale = "1.2"
        Divs.style.transform = "translateX(0px)";
        Divs.style.transition = "all 2s ease";
        conditons = false;
    }
})

Divs.addEventListener("mouseleave" , function(){
    Divs.style.background = "linear-gradient(135deg, #12b9e7, #b1bbc8, #baa5cf)";
    Divs.style.scale = "1";
})

Divs.appendChild(NeButton);
