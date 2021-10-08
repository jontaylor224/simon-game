//create gameboard
//create game timers
//determine win / loss conditions

let mainElement = document.querySelector("main")

function createGameboard(){
    let colors = ["red", "blue", "green", "yellow"]
    for (let index = 0; index < 4; index += 1){
        let newButton = document.createElement("div")
        newButton.classList.add(`button`,`${colors[index]}`)
        mainElement.append(newButton)
    }

}
createGameboard()