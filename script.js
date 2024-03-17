var char = document.getElementById("character")
var block = document.getElementById("block")
var score = document.getElementById("score")
var start = document.getElementById("start")
var game = document.getElementById("game")
var count = 1
var re = document.getElementById("reset")
re.remove()

// starting game
function startB(){
    start.remove()
    block.classList.add("start")
}

// pressing space bar to jump
document.addEventListener('keydown', function(event) {
    if (event.key === " " || event.code === "Space") {
        function addjump(){
            console.log("inside addjump()")
            if(!char.classList.contains("animate")){
                char.classList.add("animate")}
            setTimeout(function(){
                char.classList.remove("animate")
            }, 500)
        }
        addjump()
    }
})

// checking if player lost
// checks when jellyfish and spongebob meet
function checkloss(){
    var CheckLoss = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("padding-top"))
        var blockLeft = parseInt(window.getComputedStyle(document.getElementById("block")).getPropertyValue("left"))
    if(blockLeft<110 && blockLeft>30 && characterTop>=145){
        document.getElementById("block").style.animation = "none"
        document.getElementById("block").style.display = "none"  
        game.appendChild(start)
        start.innerHTML = "YOU LOSE"
        start.style.left = '220px'
        start.style.top='70px'
        start.style.color = '#e63a3a'
        start.style.backgroundColor = '#f0e33f'
        score.style.left = '265px'
        score.style.top = '120px'
        score.style.color = '#e63a3a'
        game.appendChild(re)
        clearInterval(CheckLoss)
    }
    // increases the score 
    else if( blockLeft<=30 && blockLeft>0){
        score.innerHTML = "score "+ (count++)
    }
    // increase in score, increase in speed of jellyfish
    if(count>=11){
        block.style.animation = "block 1.2s linear infinite"
    }
    },122)  
}
checkloss()

// playing again
function replay(){
    start.remove()
    re.remove()
    block.style.animation = "block 2s linear infinite"
    document.getElementById("block").style.display = "block"
    score.style.color = ""
    score.style.left=""
    score.style.top='0px'
    score.innerHTML = "score"
    checkloss()
}

