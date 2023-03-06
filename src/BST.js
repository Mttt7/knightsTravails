function checkArray(arr){
    arr = sortArray(arr)
    arr = deleteDuplicates(arr)
    
    return arr
  }
  
  function deleteDuplicates(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i]===arr[i-1]){
            console.log('x')
            arr.splice(i,1)
            i--
        }
    }
  
    return arr
  }
  
  
  function isSorted(arr){
    let sorted = true
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]) sorted = false
    }
  
    return sorted
  }
  
  function sortArray(arr){
   if(isSorted(arr)) return arr
   else{
    function merge(left, right) {
        let sortedArr = [] 
        while (left.length && right.length) {
          if (left[0] < right[0]) {
            sortedArr.push(left.shift())
          } else {
            sortedArr.push(right.shift())
          }
        }
  
        return [...sortedArr, ...left, ...right]
      }
  
    function mergeSort(arr) {
        if (arr.length <= 1) return arr
        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
  
        return merge(left, right)
      }
      
      return mergeSort(arr)
    }
  
    
  }
  
  
  
  
  
  //MAIN FUNCTIONS
  class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
  }
  
  
  export default class Tree{
    constructor(array){
        this.root = this.buildTree(array,0,array.length-1)
        this.length = null
    }
  
    buildTree(arr, start, stop){
   
        if(start===0 && stop===arr.length-1){
            arr = checkArray(arr)
            this.length = arr.length
            start = 0
            stop = arr.length-1
            
        }
        if(start>stop) return null
        
        let mid = Math.floor((start+stop)/2)
    
        let node = new Node(arr[mid])
        node.left = this.buildTree(arr,start,mid-1)
        node.right = this.buildTree(arr,mid+1,stop)
  
        return node
    }
  
    print(node=this.root, prefix = '', isLeft = true){
      if(node===null) return
      if (node.right !== null) {
        this.print(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      }
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
      if (node.left !== null) {
        this.print(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      }
    }
  
    insertValue(value, root=this.root){
      if(root===null){
        this.root = new Node(value)
  
        return
      }
      let current = root
      if(value>current.data){
        if(current.right!==null){
          current = current.right
          this.insertValue(value,current)
        }else{
          const newNode = new Node(value)
          current.right = newNode
        }
      }
      else if(value<current.data){
        if(current.left!==null){
          current = current.left
          this.insertValue(value,current)
        }else{
          const newNode = new Node(value)
          current.left = newNode
        }
      }
      else if(value===current.data){
        console.log('You cant insert ',value, 'its been already inserted')
        this.print
      }
  
      
    }
  
  
    minValue(root){
      let min = root.data
      while(root.left!==null){
        min = root.left.data
        root = root.left
      }
  
      return min
    }
  
  
    deleteValue(value){
      this.root = this.deleteRec(value,this.root)
    }
    
  
    deleteRec(value,root){
      if(root===null){ 
        console.log('no such value in the tree: ','[',value,']')
  
        return null
      }
  
      if(value<root.data) root.left = this.deleteRec(value,root.left)    
      else if(value>root.data) root.right = this.deleteRec(value,root.right)
      else if(value===root.data){
        //node with only one child or no children
          if(root.left===null) return root.right
          else if(root.right===null) return root.left 
  
        //node with two children
          root.data = this.minValue(root.right)
          root.right = this.deleteRec(root.data,root.right)
  
      }
  
      return root
    }
  
  
    inOrder(root=this.root,arr=[]){
        if(root===null) return 
        this.inOrder(root.left,arr)
        arr.push(root.data)
        this.inOrder(root.right,arr)
        return arr
    }
  
    preOrder(root=this.root,arr=[]){
        if(root===null) return 
        arr.push(root.data)
        this.preOrder(root.left,arr)
        this.preOrder(root.right,arr)
  
        return arr
    }
  
    postOrder(root=this.root,arr=[]){
        if(root===null) return 
        this.postOrder(root.left,arr)
        this.postOrder(root.right,arr)
        arr.push(root.data)
  
        return arr
    }
  
    search(value, root=this.root){
      let current = root
      if(current===null) return null
      if(current.data===value) return current
      else if(value>current.data){
        current = current.right
        current = this.search(value,current) 
      }
      else if(value<current.data) {
        current = current.left
        current = this.search(value,current) 
      }
  
      return current
    }
  
    height(root=this.root){
      if(root===null) return -1
  
      let leftHeight = this.height(root.left)
      let rightHeight = this.height(root.right)
  
      return Math.max(leftHeight,rightHeight)+1
    }
  
    
    depth(root=this.root, value){ 
      if(root == null) return -1;
      var dist = -1;
      if ((root.data === value)|| (dist = this.depth(root.left, value)) >= 0 || (dist = this.depth(root.right, value)) >= 0){
        return dist + 1;
      }
      
      return dist;
    }
    
  
    isBalanced(root=this.root){
      if(root == null) return true
  
      let lh = this.height(root.left)
      let rh = this.height(root.right)
   
      if (Math.abs(lh - rh) <= 1 && this.isBalanced(root.left)== true && this.isBalanced( root.right) == true){
        return true
      }  
  
      return false
    }
  
    rebalance(){
      let arr = this.inOrder()
      this.root = this.buildTree(arr,0,arr.length-1)
    }
  }
  
  