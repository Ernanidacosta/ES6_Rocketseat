class todoList {
    constructor (){
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo TODO');
        console.log(this.todos);
    }
}

const MinhaLista = new todoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}