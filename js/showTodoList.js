var appendHTML = function(element, t){
    element.insertAdjacentHTML('beforeend', t)
}


//插入todolist
var es = document.querySelector('.show-todo-list')
var showTodoList = function(){
    es.innerHTML = ''
    var todos = loadTodos()
    for (var i = 0; i < todos.length; i++){
        var todo = todos[i]
        var t = todoTemplate(todo)
        appendHTML(es, t)
    }
}

var todoTemplate = function(todo){
    var status = '未完成'
    var id = todo.id
    var task = todo.task
    var num = id + 1
    var t =
    `
        <div class='todo-list-num' data-status=${status} data-id=${id}>
            <span class='todo-list-id'>${num}</span>
            <span class='todo_task'>${task}</span>
            <span class="status">${status}</span>
            <div class="control_buttons" data-status=${status} data-id=${id}>
                <button class="button_done" type='button'>完成</button>
                <button class="button_delete" type='button'>删除</button>
            </div>
        </div>
    `
    return t
}
