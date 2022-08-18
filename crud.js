function add() {

    var chave = Math.floor(Math.random() * 100);
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("mail").value; 

    var usuario = {
                nome_ : nome,
                tel_ : telefone,
                email_ : email
                };
   
   // Armazena os dados no Local Storage do Navegador  
   localStorage.setItem(chave, JSON.stringify(usuario));
}

function listar() {

    var registros = document.getElementById("show");
    registros.innerHTML = '<table style="border:1px solid #000; width:450px; background-color:#DDD;">' +
                            '<tr>' +
                            '<td> <strong> ID </strong> </td>' + 
                            '<td> <strong> NOME </strong> </td>' + 
                            '<td> <strong> TELEFONE </strong> </td>' + 
                            '<td> <strong> E-MAIL </strong> </td>' + 
                            '<td> <strong> AÇÃO </strong> </td>' + 
                            '</tr>' +
                            '</table>';
   
    for (let i = 0; i < localStorage.length; i++) {
       
        let id = localStorage.key(i);
        let dados = localStorage.getItem(id);
        var users = JSON.parse(dados);

        registros.innerHTML += '<table style="border:1px solid #000; width:450px;">' +
                               '<tr>' +
                               '<td>' + id + '</td>' + 
                               '<td>' + users.nome_ + '</td>' + 
                               '<td>' + users.tel_ + '</td>' + 
                               '<td>' + users.email_ + '</td>' + 
                               '<td> <button onclick=" return excluir(\'' + id + '\')"> DELETE </button> </td>' + 
                               '</tr>' +
                               '</table>';

    }

}

function excluir(del) {

    var ok = confirm("Tem certeza que deseja excluir este usuário?");
    if(ok){
        localStorage.removeItem(del);
        listar();
    } else {
        return false;
    }
}

function check() {

    var cod = document.getElementById("id_alt").value;
    var reg = localStorage.getItem(cod);
    var user = JSON.parse(reg);

    if(reg == null) {
        alert("Usuário não existe!");
    } else {
        document.getElementById("nome_alt").value = user.nome_;
        document.getElementById("tel_alt").value = user.tel_;
        document.getElementById("mail_alt").value = user.email_; 
    }

}

function Alterar() {

    var chave = document.getElementById("id_alt").value;
    var nome = document.getElementById("nome_alt").value;
    var telefone = document.getElementById("tel_alt").value;
    var email = document.getElementById("mail_alt").value; 

    for (let i = 0; i < localStorage.length; i++) {
       
        let id = localStorage.key(i);
        let dados = localStorage.getItem(id);
        var users = JSON.parse(dados);

        if(id == chave) {
            users.nome_ = nome;
            users.tel_ = telefone;
            users.email_ = email;

            localStorage.setItem(id, JSON.stringify(users));
            break;
        }

    }
}