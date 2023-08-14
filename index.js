// javascript
let countEl= document.getElementById("count-el")
// get element by the id of html tag using variable
 let Pes= document.getElementById("pE")
   

let count = 0

function increm(){
    count+=1 
    countEl.innerText=count
}
 
function decre()
{   
count-=1
countEl.innerText=count 
    
}
function save()
{
  let counter= count+" - "  
    Pes.textContent += counter
     countEl.innerText=0
     count=0
}
