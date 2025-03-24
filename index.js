const painel = document.getElementById("painel");

function aparecerDisplay(input) {
  painel.value += input;
}

function limparPainel(){
    painel.value = "";


}

function calcular(){
    painel.value = eval(painel.value);
    

}
