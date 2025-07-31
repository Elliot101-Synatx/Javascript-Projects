let form = document.getElementById('form');
let input = document.querySelector('.input')
let todosUL = document.getElementById('todos');

  const backToJs = localStorage.getItem('todos')
    const todos = JSON.parse(backToJs);

if(todos) {
    todos.forEach(todo => addTodo(todo))
}


//For Newly Added value
form.addEventListener('submit', (e) => {
    e.preventDefault()//prevents navigating to the next page

    addTodo()
})

function addTodo(todo) {
    //For Newly Added Value
    let todoText = input.value //Becomes learn JS

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText // Add value to the <li>
 
        todosUL.appendChild(todoEl)

        //For Newly added value
        input.value = ''

        updateLS()

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')//Add "completed" class
            updateLS() 
        }) 
                                //right click/
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 

       




    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []
                    //<li>/
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}