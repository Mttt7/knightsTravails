export let move = []


export function convertToChessNotation(str){
    const patternX = /[0-9]*/
    const patternY = /[-][0-9]*/
    let x_c = patternX.exec(str)
    let y_c = patternY.exec(str)
    const letters = ['H','G','F','E','D','C','B','A']
    let x = letters[x_c]
    let y = Number(y_c[0].slice(1))+1 
    
    return x+y
}