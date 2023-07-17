const todo = document.querySelector('.form input[type = "text"]');
console.log(todo);
//const addBtn = document.querySelector(".form #addTask");
const addTask = document.querySelector("#addTask");
console.log(addTask);
const list = document.querySelector(".list");
console.log(list);

//const delMe = document.querySelector("#delMe");

const todos = [];
let items =[];

function create(newData){
    const addItem =document.createElement("div");
    newData.forEach((element)=>{
        console.log(element);
        addItem.innerHTML = `
        
        <div id="item" class="${element}">
            <p>${element}</p>
            <button class = "${element}">Delete</button>
        </div>
        <br />
        `;
        
    //    list.append(addItem);
    //    items = document.querySelectorAll("#add-item");
   });
   if( todo.value == "") {
    alert("Enter something as input. ");

   } else {
    list.append(addItem);
    items = document.querySelectorAll("#item");
   }

}

function formSubmit(){
    todos.push(todo.value);
    create(todos);
}

list.addEventListener("click",function(e){
    console.log(e,items);
    items.forEach((element)=>{
       console.log(element);
       
       console.log(element.className);
       console.log(e.target.className);
       if(element.className === e.target.className){
           element.remove();
       }
    });
});





/*---------------------------------------------------------- */
// function formSubmit(){
//     console.log(todo, addTask,list);
    
//     todos.push(todo.value);
    
//    const newElemnt = document.createElement("div");
//     const addItem = `
            
//     <div id="item">
//     <span>${todo.value}</span>
//     <button onclick="delMe('1')" id="delMe"> Delete </button>
//     </div>
//     <br />
//     `;
//     newElemnt.innerHTML = addItem;
//     list.appendChild(newElemnt);
//     todos.forEach((element)=>{
//         list.append(newElemnt);
//     });  
// }

