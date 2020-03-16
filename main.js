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
    constructor(){
        super();

        this.usuario = "Ernani";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new todoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo TODO');
}

MinhaLista.mostraUsuario();