document.getElementById("n1").addEventListener("keyup", function(event) {    
    if (event.key === "Enter") {      
        clicar();
    }
});

document.getElementById("n2").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        clicar();
    }
});



function somar(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)

    if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, insira valores válidos para realizar a soma.");
    return; // Encerra a função se um dos valores não for um número
}

    var res = n1 + n2

    document.getElementById('res').value = res


  }

function limparCampos() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('res').value = "";    
}