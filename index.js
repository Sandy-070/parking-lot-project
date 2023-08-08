// javascript
let countEl= document.getElementById("count-el")
// get element by the id of html tag using variable
console.log(countEl)

let count = 0

function increm(){
    count=count+1 
    countEl.innerText=count
}
 
function decre()
{   
     count=count-1 
    
    countEl.innerText=count
    
}
