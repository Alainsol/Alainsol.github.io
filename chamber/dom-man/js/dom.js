
const button =  document.querySelector('#add');

button.addEventListener('click', function(e){

    const  taskInput = document.querySelector('#task');
    if(taskInput.value === ''){
        alert("Please Add your book");
    } else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content'; 

        link.innerHTML = '<i class="fas fa-times-circle"></i>';
       li.appendChild(link);
         
        const taskList = document.querySelector('.collection');
        taskList.appendChild(li);
        taskInput.value = '';
    }

e.preventDefault();
})

const task_List = document.querySelector('.collection');
task_List.addEventListener('click',removeTask);

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();
        }
    }
}

const clearBtn = document.querySelector('.btn');
clearBtn.addEventListener('click', clearTasks);

function clearTasks(){
    const taskList = document.querySelector('.collection');
    taskList.innerHTML= '';
}
