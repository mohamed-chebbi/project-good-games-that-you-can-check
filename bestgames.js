
function gta(){
   window.open("https://www.rockstargames.com/V/")
}


function valo(){
   window.open("https://playvalorant.com/en-gb/?wpcid=11288568914&wpsnetn=g&wpkwn=valorant&wpkmatch=e&wpcrid=471073073466&wpscid=110390539843&wpkwid=kwd-901294085035&an=Google%20AdWords&gclid=CjwKCAjwrPCGBhALEiwAUl9X0zmbExxtVq1zW_I9BuB36GxJy3rPf3r72NzatGNAtHus_nlEQi8jNRoC2SEQAvD_BwE")
}

function minecraft(){
   window.open("https://www.minecraft.net/fr-fr")
}

function hitman(){
   window.open("https://hitman.com/global/")
}

function control(){
   window.open("https://www.remedygames.com/games/control/")
}

function gmod(){
   window.open("https://gmod.facepunch.com/")
}

function amongus(){
   window.open("https://innersloth.com/gameAmongUs.php")
}

function uno(){
   window.open("https://www.ubisoft.com/en-gb/game/uno/uno")
}

function sims(){
   window.open("https://www.ea.com/en-gb/games/the-sims/the-sims-4")
}

function steam(){
   window.open("https://store.steampowered.com/")
}

function epic(){
   window.open("https://www.epicgames.com/store/en-US/")
}

function ubisoft(){
   window.open("https://www.ubisoft.com/en-us/")
}

function blizzard(){
   window.open("https://www.blizzard.com/en-gb/")
}


function scavenger(){
   window.open("https://www.playscavengers.com/en")
}

function tomb(){
   window.open("https://tombraider.square-enix-games.com/en-gb")
}


var button=document.getElementById("add-task")



button.onclick=function(){
    var text = $("#input-task").val()
    $("#todo-list").append("<li>"+ text + "</li>")
    $("#input-task").val("")
   
}


