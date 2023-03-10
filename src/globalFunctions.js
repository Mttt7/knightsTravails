import drawBoard, { drawMenu} from "./drawing"


export let move = []


export function convertToChessNotation(str,color){
    console.log(color)
    const patternX = /[0-9]*/
    const patternY = /[-][0-9]*/
    let x_c = patternX.exec(str)
    let y_c = patternY.exec(str)
    let letters=[]
    let y
    if(color==='black'){
        letters = ['H','G','F','E','D','C','B','A']
        y = Number(y_c[0].slice(1))+1 
    }
    else{
        letters = ['A','B','C','D','E','F','G','H']
        y = 7-Number(y_c[0].slice(1))+1 

    }
    let x = letters[x_c]
    
    
    return x+y
}


export function reloadPage(){
    const container = document.querySelector('#container')
    container.innerHTML=''
    container.appendChild(drawMenu());
    container.appendChild(drawBoard());
}