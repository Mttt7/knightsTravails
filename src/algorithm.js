import Tree from "./BST"

export default function findPath(move){
    for(let i = 0;i<move.length;i++){
        move[i] = Number(move[i])
    }
    let start = move.splice(0,2)
    let stop = move.splice(0,2)
    console.log(start)
    console.log(stop)

    let tree = new Tree(start)
    

    return 'H5'
}








