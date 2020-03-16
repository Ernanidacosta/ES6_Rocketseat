class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class todoList extends List {
    constructor{
            
    }
}

const MinhaLista = new todoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo TODO');
}