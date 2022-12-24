

// let myage = 21
// humanDogratio = 1 / 7
// myDogage = myage * humanDogratio
// console.log(myDogage)
 
 
//  count = count+1



// let bonouspoint = 50

// console.log(bonouspoint)

// bonouspoint = bonouspoint + 50

// console.log(bonouspoint)

// bonouspoint= bonouspoint-75

// console.log(bonouspoint)

// bonouspoint = bonouspoint + 45
// console.log(bonouspoint)



let count =-1

 function increment() {
     count += 1
     //check.innerText = count//  inner text only returns human redable char(s)
     check.textContent =count
 }
 let check =document.getElementById("count")
 increment()

 let savep=document.getElementById("savEl")
 let rec =0

 
// function save() { 
//      rec = count + rec 
//      savep.innerText +="-->"+ count // inner text only returns human redable char(s)
//      console.log(count) 
// }
 function save() { 
     rec = count + " __> " 
     savep.textContent += rec
     console.log(count)
     rec.textContent = 0
     count = 0
     
 }
save()
