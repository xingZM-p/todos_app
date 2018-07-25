// 保存todo list
var saveTodoList = function(todos) {
    var todos =JSON.stringify(todos)
    localStorage.todos = todos
}
// 保存todo
var saveTodo = function(task){
    var todos = loadTodos()
    if (todos == []) {
        var id = 0
    } else {
        id = todos.length
    }
    var todo = {
        'task': task,
        'id': id,
        'done': false,
    }
    todos.push(todo)
    saveTodoList(todos)
}
//下载todos
var loadTodos = function(){
    var s = localStorage.todos
    if (s == undefined){
      s = '[]'
    }
    var todos =JSON.parse(s)
    return todos
}
