var e = function(sel){
    return document.querySelector(sel)
}
//切换地址栏信息
var pushState = function(className){
    var url = '?page=' + className
    var state = {
      'page': className,
    }
    history.pushState(state, 'title', url)
    //手动设置title
    document.title = className
}
var e1 = document.querySelector('.todo-list')
var e2 = document.querySelector('.todo-detail')





//绑定事件
var bindEvent = function(){
    //创建新的todo
    var createNew = e('.createNew')
    createNew.addEventListener('click', function(){
        var task =e('.new_todo_input').value
        if (task != ''){
            saveTodo(task)
        }
    })

    //显示todolist
    var todolist = e('.all-button-list')
    todolist.addEventListener('click', function(){
        showTodoList()

         //切换地址栏信息
        var target = event.target
        var className = target.dataset.name
        pushState(className)

        //隐藏todo-detail
        if(e1.classList.contains('hide')){
            e1.classList.remove('hide')
        }
        e2.classList.add('hide')
    })

    //显示todo detail
    var todoDetail = document.querySelector('.all-button-detail')
    todoDetail.addEventListener('click', function(){
        showTodoDetail()

        //切换地址栏信息
       var target = event.target
       var className = target.dataset.name
       pushState(className)

       //隐藏todo-lsit
       if(e2.classList.contains('hide')){
           e2.classList.remove('hide')
       }
       e1.classList.add('hide')
   })
   // 浏览器后退前进的时候要切换页面
   // 用户点击 前进 后退 按钮的时候, 会触发 window 的 popstate 事件
   // 于是可以在这里操作
   window.addEventListener('popstate', function(event){
       var className = event.state.page
       if (className == 'list'){
           if(e1.classList.contains('hide')){
               e1.classList.remove('hide')
           }
           e2.classList.add('hide')
       }
       if(className == 'detail'){
           if(e2.classList.contains('hide')){
               e2.classList.remove('hide')
           }
           e1.classList.add('hide')
       }
   })
}

//给todolist 页面绑定事件
var todoListEvent = function(){
    var todolistControls = document.querySelectorAll('.control_buttons');
    for (var i = 0; i < todolistControls.length; i++){
        var todolistControl = todolistControls[i]
        todolistControl.addEventListener('click', function(event){
            var target = event.target
            if (target.classList.contains('button_done')){
                var doneline = target.closest('.todo-list-num')
                doneline.classList.add('todo-done')
                var status = target.closest('.status')
                status.innerHTML = '完成'

                var todos = loadTodos()
                var id = doneline.dataset.id
                var todo = todos[id]
                todo.done = true
                saveTodoList(todos)
            }
            if (target.classList.contains('button_delete')){
                var doneline = target.closest('.todo-list-num')
                var todos = loadTodos()
                var id = doneline.dataset.id
                todos.splice(id, 1)
                saveTodoList(todos)
            }
        })
    }
}


var _main = function(){
    bindEvent()
    todoListEvent()
}
_main()
