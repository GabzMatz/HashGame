document.addEventListener("DOMContentLoaded",()=>{

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
       square.addEventListener("click",handleClick) 
    })


    let reset = document.querySelector(".botao")
    reset.addEventListener("click",resetSquares)
    

})



function handleClick(event){

    let square = event.target
    let postion = square.id

    if(handleMove(postion)){
        setTimeout(()=>{

            if(playerTime == 0){
                alert(`O game acabou o Vencedor foi o player 🛡️`)
            }
            else if(playerTime == 1){
                alert(`O game acabou o Vencedor foi o player ⚔️`)
            }
        },10)
    }
    updateSquare(postion)
}

function updateSquare(postion){
    let square = document.getElementById(postion.toString())
    let symbol = board[postion]
    square.innerHTML = `<div class="${symbol}"></div>`


}

function resetSquares(){
    let squares = document.querySelectorAll(".square")
    resetGame()
    squares.forEach((item)=>{
        item.innerHTML = `<div class=""></div>`
    })
}