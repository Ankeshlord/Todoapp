let todo=[];
let na=document.querySelector('#addinput');
let result= document.querySelector('#addbutton');
result.addEventListener('click',()=>{
    na.classList.remove('hidden');
})

let task= document.getElementById('task');
let date=document.getElementById('date');
let final=document.getElementById('final');
let todosconatiner= document.getElementById('todoscontainer');
function callingU(){
    todosconatiner.innerHTML=""
    let statusclass="";
    todo.forEach((data, index)=>{
        statusclass = data.status === 'done' ? "!bg-green-100" : "bg-violet-50"; 
        let div= document.createElement('div');
        let date1 = new Date(data.date);
        let fdate = date1.toLocaleDateString('en')
        div.innerHTML =`<div id="taskstatus"  class="border hover:shadow-md cursor-pointer border-neutral-400 bg-violet-50 rounded-xl p-3 ${statusclass}">
        <div class="flex justify-between items-center">
              <h1 class="font-semibold text-[20px]">${data.task}</h1>
        </div>
          <p class=" text-sm text-[12px]">${fdate}</p>
         <div class="flex items-center gap-3">
          <button id="done-btn" data-id="${index}"class="hover:text-green-500 flex items-center gap-2 text-sm mt-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
            </svg>Mark as done</button>
          <button id="close" data-id="${index}"class="hover:text-red-500 flex items-center gap-2 text-sm mt-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>Delete
          </button>
         </div>
          

      </div>`
      
      todosconatiner.appendChild(div);
      let task= document.querySelectorAll('#done-btn');
      task.forEach((m)=>{
        m.addEventListener('click',(e)=>{
            let index= e.currentTarget.getAttribute('data-id');
            console.log(index)
            let sam= todo[index];
            sam.status="done";
            // todosconatiner.innerHTML=""
            callingU()
            
        })
  
      })
  
      let close= document.querySelectorAll('#close');
      close.forEach((m)=>{
        m.addEventListener('click',(e)=>{
            let index= e.currentTarget.getAttribute('data-id');
           todo.splice(index,1);
            callingU()
            
        })
  
      })

    })
   

    
}


final.addEventListener('click',()=>{
    let finaly = {
        task : task.value,
        date : date.value ,  
        status:""       
    }
    todo.push(finaly)
    na.classList.add('hidden')
    console.log(todo)
    todosconatiner.innerHTML=""
    callingU()
})

var el = document.getElementById('todoscontainer');
new Sortable(el, {
    group: 'shared', // set both lists to same group
    animation: 150
});
