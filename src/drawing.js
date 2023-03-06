function CellHoverEffectIn(e){
    let str = e.target.dataset.cellId
    e.target.innerText=convertToChessNotation(str)
    
}
function CellHoverEffectOut(e){
    
    e.target.innerText=''
    
}

function convertToChessNotation(str){
    const patternX = /[0-9]*/
    const patternY = /[-][0-9]*/
    let x_c = patternX.exec(str)
    let y_c = patternY.exec(str)
    const letters = ['H','G','F','E','D','C','B','A']
    let x = letters[x_c]
    let y = Number(y_c[0].slice(1))+1 
    
    return x+y
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
            cell.dataset.cellId = `${j}-${i}`
            cell.addEventListener('mouseover',CellHoverEffectIn)
            cell.addEventListener('mouseout',CellHoverEffectOut)
            boardEl.appendChild(cell)
        }
    }

    return boardEl
}

export function drawMenu(){

}

export function drawHeader(){
    
}



