
document.querySelector(".btn").addEventListener('click',e=>{
    document.querySelector(".addnewTask").style.display="block";
})

document.querySelector(".close").addEventListener('click',e=>{
    document.querySelector(".addnewTask").style.display="none";
})
const taskInput = document.querySelector('.task');
let a = 0;

    document.querySelector(".add").addEventListener('click', e=>{
    if(taskInput.value!== ""){
        let max = 0;
        for(let j=0; j<localStorage.length; j++)
        {
            if(max< Number(localStorage.key(j)))max=Number(localStorage.key(j));
        }
        a=max+1;
    const input = document. createElement("input"); 
    input. setAttribute('type', 'text');
    input. setAttribute('name',a);
    input.value=taskInput.value;
    taskInput.value="";
    const i = document.createElement('i');
    i.setAttribute("class", "fa fa-trash");
    i. setAttribute('id',a);
    const li =document.createElement('li');
    li.appendChild(i);
    li.appendChild(input);
    document.querySelector('.list ul').appendChild(li);
       a++;

       const key = input.name;
       const value = input.value;
   
       localStorage.setItem(key,value);
          
        i.addEventListener('click', s=>{
            const ik = s.target.id;
            console.log(ik,localStorage.getItem(ik));
            localStorage.removeItem(ik); 
            document.querySelector('.list ul').removeChild(s.target.parentElement); 
                       
        });
    
        input.addEventListener('change', b=>{
            const inputKey = b.target.name;
            const v =input.value;
            localStorage.removeItem(inputKey); 
            localStorage.setItem(inputKey,v);



        });
    }
    

 });



 function f()
 {
     
     for(let j=0; j<localStorage.length; j++)
     {
         const key = localStorage.key(j);
         const value = localStorage.getItem(key);
         const input = document. createElement("input"); 
         input. setAttribute('type', 'text');
         input. setAttribute('name', key);
         input.setAttribute("value",value);
         const i = document.createElement('i');
         i.setAttribute("class", "fa fa-trash");
         i. setAttribute('id', key);

         const li =document.createElement('li');
         li.appendChild(i);
         li.appendChild(input);
        document.querySelector('.list ul').appendChild(li);

        input.addEventListener('change', b=>{
            const inputKey = b.target.name;
            const v =input.value;
            localStorage.removeItem(inputKey); 
            localStorage.setItem(inputKey,v);
           
        });

         i.addEventListener('click', s=>{
            const ik = s.target.id;
            localStorage.removeItem(ik); 
            document.querySelector('.list ul').removeChild(s.target.parentElement); 

        });
     }
    
      
 }

 
