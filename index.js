//document.getElementById("count-el").innerText=5
let msg ="u have 3 new notifications"
let count =0

let countEl=document.getElementById("count-el")

function increament()
{
    count += 1
   countEl.innerText=count
  
}
let saveEl=document.getElementById("save-el")
   function save()
   {
      let a = count + " - "
      saveEl.textContent += a
      console.log(count)
      count=0
      countEl.textContent=0
   }
   function decreament()
   {
    count=count-1
    countEl.textContent=count
   }
   