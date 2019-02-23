var presentes = [];



function check(){
    var searchVal = document.getElementById("numero").value;
    var dinheiro = document.getElementById("troco").value;
    var troco = 0;
    for (var i=0 ; i < dados.length ; i++)
    {
       if(dados[i].numero == searchVal){

        if(dinheiro > 5){
            var total = dinheiro - 5;
            troco = "troco: " + total ;
        }else{
            troco = "pg";
        }
        
        var para = document.createElement("p");
        var node = document.createTextNode( dados[i].nome + " n: " + dados[i].numero + " " + troco);
        para.appendChild(node);
        var element = document.getElementById("presentes");
        element.appendChild(para);

        var presente = {
            element: para,
            numero: dados[i].numero,
            nome: dados[i].nome
        }

        presentes.push(presente);
       }
    }
}


