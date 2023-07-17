const todoInput = document.querySelector('#todo-input');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

//state
let todos = [];
let todoId;

todoForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const todo = {
        id : Date.now(),
        name : todoInput.value,
        completed: false,
    }
    todos.push(todo);
    //console.log(todos);
    displayTodos();
    todoForm.reset();

});

function displayTodos() {

    todoList.innerHTML = "";//for making empty list 

    todos.forEach((todo) => {
       // console.log(todo);
       const li = document.createElement('li');
       const checkbox = document.createElement('input');
       const span = document.createElement('span');
       const div = document.createElement('div');
       const editBtn = document.createElement('button');
       const delBtn = document.createElement('button');
       const div2 = document.createElement('div');
       
       //for list
        li.classList.add('list-group-item','d-flex', 'justify-content-between');
        
        // for check box
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.classList.add('form-check-input','me-2');
        checkbox.addEventListener('change',(e)=>{
            e.preventDefault();
            todo.completed = e.target.checked;
           // console.log(todo.completed);
            //span.style.textDecoration = todo.completed? 'Line-through':'none';
           displayTodos();
        });



        // todo name
        span.innerText = todo.name;
        span.classList.add('ms-2');
        span.style.textDecoration = todo.completed? 'Line-through':'none';
       
       
        // Edit button 
        
        editBtn.classList.add('btn','btn-secondary','btn-sm');
        editBtn.innerHTML = 'Edit';
        editBtn.setAttribute('data-bs-toggle','modal');
        editBtn.setAttribute('data-bs-target','#editModal');
        editBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            document.getElementById('todo-edit').value = todo.name;
            
            //Using global variable 
            todoId = todo.id;
           // todoName = todo.name;
            //Using input field to get id value
            document.getElementById('todo-id').value = todo.id;
            
            // Using local storage
            localStorage.setItem('todoId',todo.id);

            //Using session storage
           sessionStorage.setItem('todoId',todo.id);

        //value fetch from local/session storage
        // const data = localStorage.getItem("todoId");
        // localStorage.removeItem("todoId")
        // const data1 = sessionStorage.getItem("todoId");

        });
        

        // Delete button 
        
        delBtn.classList.add('btn','btn-danger','btn-sm','ms-2');
        delBtn.innerHTML = 'Delete';
        delBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            //console.log(todos);

           todos =  todos.filter((value)=>{
                //console.log(value);
                return value.id !== todo.id;
            });
           //console.log(todos1);
           displayTodos();
            
        });

        div.append(checkbox);
        div.append(span);
    
        div2.append(editBtn);
        div2.append(delBtn);
    
        li.append(div);
        li.append(div2);
        
    
        todoList.append(li);
  

    });

    


}

const editHandler = (event)=>{
    event.preventDefault();
    
   // console.log(todoID);
   const data = localStorage.getItem("todoId");
   console.log(data);
   todos = todos.map((value)=>{
        // console.log(typeof(value.id));
        // console.log(typeof(Number(todoId)));
        // console.log(document.getElementById('todo-edit').value);
        

        // using global variable
        // return value.id === Number(todoId) ? {
        //      id: Number(todoId),
        //      name: document.getElementById('todo-edit').value,
        //      completed: false,
        //  } : value;

         // using local storage
         return value.id === Number(data) ? {
            id: Number(data),
            name: document.getElementById('todo-edit').value,
            completed: false,
        } : value;

    
    });
    //console.log(todos);
    displayTodos();
    document.getElementById('btn-close').click();
} 