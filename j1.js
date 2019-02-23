var presentes = [];

function check() {
    var searchVal = document.getElementById("numeroTitulo").value;
    var dinheiro = document.getElementById("troco").value;
    var categoria;
    var troco = 0;
    //Valor da pelada pode variar
    var valorDaPelada = 5;
    for (var i = 0; i < dados.length; i++) {
        //Procura pessoa por título
        if (dados[i].título == searchVal) {
            //Analisa valor recebido e calcula troco
            try {

                if (dinheiro > valorDaPelada) {
                    var total = dinheiro - valorDaPelada;
                    troco = "R$" + total;
                } else if (dinheiro == valorDaPelada) {
                    troco = "Sem troco";
                }
                else {
                    throw "erro";
                }
            }
            //Se o valor for menor que o valor da pelada pessoa não é adicionada a lista
            catch (err) {
                alert("Valor deve ser maior ou igual a R$" + valorDaPelada);
                break;
            }
            //Define categoria para o sorteio
            if (dados[i].idade >= 50) {
                categoria = "50+";
            }
            else {
                categoria = "50-";
            }

            var para = document.createElement("p");
            var node = document.createTextNode("(" + dados[i].apelido + ")" + "(" + dados[i].título + ")" + "(" + categoria + ")" + "(" + troco + ")");
            para.appendChild(node);
            var element = document.getElementById("presentes");
            element.appendChild(para);

            var presente = {
                element: para,
                numeroTitulo: dados[i].título,
                nome: dados[i].apelido
            }

            presentes.push(presente);
        }
    }
}

function sorteio() {
    
}


