
//the graph
const adjacencyList = new Map()

//add node
function addNode(position){
    adjacencyList.set(position,[])
}

//add edge, undirected
function addEdge(position,move){
    adjacencyList.get(position).push(move)
    adjacencyList.get(move).push(position)
}

function getPossibleMoves(pos){
    const possibleMoves = [[2,1],[2,-1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2]]
    const moves = []
    for(let i = 0;i<8;i++){
        const x = pos[0]+possibleMoves[i][0]
        const y = pos[1]+possibleMoves[i][1]
        if(x<7 && x>=0 && y<7 && y>=0){
            moves.push([x,y])
        }
        
    }
    return moves
}

//create graph
const start = [2,3] //A4
 
const possibleMoves = getPossibleMoves(start)
addNode(start)
possibleMoves.forEach(addNode)
for(const move of possibleMoves){
    addEdge(start,move)
}

console.log(adjacencyList)