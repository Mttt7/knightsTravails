import findPath from "./algorithm"
import { move, reloadPage } from "./globalFunctions"
import { convertToChessNotation } from "./globalFunctions"
import refreshImg from './images/refresh.png'

let color = 'white'
function rotateBoard(){
    if(color==='white') color='black'
    else if(color==='black') color='white'
    reloadPage()
}

function cellHoverEffectIn(e){
    let str = e.target.dataset.cellId
    e.target.innerText=convertToChessNotation(str,color)
    
}
function cellHoverEffectOut(e){
    e.target.innerText=''
}

function handleCellClick(e){
   
    
}

export default function drawBoard(){
const boardEl = document.createElement('div')
boardEl.classList.add('board')
    
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            if(i%2===j%2) cell.classList.add('white')
            else cell.classList.add('black')
            if(color==='white') cell.dataset.cellId = `${j}-${i}`
            else{
                cell.dataset.cellId = `${7-j}-${7-i}`
            }
            cell.addEventListener('mouseover',cellHoverEffectIn)
            cell.addEventListener('mouseout',cellHoverEffectOut)
            cell.addEventListener('click',handleCellClick)
            boardEl.appendChild(cell)
        }
    }

    return boardEl
}

export function drawMenu(){
    const menuWrapper = document.createElement('div')
        menuWrapper.classList.add('menu-wrapper')
    const startDisplay = document.createElement('div')
        startDisplay.classList.add('start-display')
    const numberOfMovesDisplay = document.createElement('div')
        numberOfMovesDisplay.classList.add('number-of-moves-display')
    const stopDisplay = document.createElement('div')
        stopDisplay.classList.add('stop-display')
    const rotateBoardBtn = document.createElement('div')
        rotateBoardBtn.classList.add('rotate-board-btn')
        const rotateBoardBtnImg = document.createElement('img')
        rotateBoardBtnImg.src=refreshImg
        rotateBoardBtn.appendChild(rotateBoardBtnImg)
        rotateBoardBtnImg.addEventListener('click',rotateBoard)
    menuWrapper.appendChild(startDisplay)
    menuWrapper.appendChild(numberOfMovesDisplay)
    menuWrapper.appendChild(stopDisplay)
    menuWrapper.appendChild(rotateBoardBtn)



    return menuWrapper
}

export function drawHeader(){
    
}



