var appendHTML = function(element, t){
    element.insertAdjacentHTML('beforeend', t)
}

var  showTodoDetail = function(){
    var todos = loadTodos()
    var er = document.querySelector('.show-todo-detail')
    er.innerHTML = ''
    for (var i = 0; i < todos.length; i++){
        var todo = todos[i]
        var t = todoDetailTemplate(todo)
        appendHTML(er, t)
    }
}

var todoDetailTemplate = function(todo){
    var task = todo.task
    var id = todo.id
    var num = id + 1
    var t = `
        <div class='todo-detail-header_2'>
            <span class="span-detailtitle_1">${num}</span>
            <span class="span-detailtitle_2">${task}</span>
            <button class="span-detailtitle_3">点击查看Deatil详情</button>
        </div>
    `
    return t
}
