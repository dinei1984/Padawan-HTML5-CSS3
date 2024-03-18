function calcular() {    
    let pesos = [];
    let alturas = [];

    for (let i = 1; i <= 4; i++) {
        pesos.push(parseFloat(document.getElementById('pso' + i).value));
        alturas.push(parseFloat(document.getElementById('alt' + i).value));
    }

    let mediaAltura = alturas.reduce((acc, val) => acc + val, 0) / alturas.length;
    let pessoasMaisDe90Kg = pesos.filter(peso => peso > 90).length;
    let pessoasMenos50KgMenos160 = alturas.filter((altura, index) => altura < 1.6 && pesos[index] < 50).length;
    let pessoasMais190AlturaMais100Peso = alturas.filter((altura, index) => altura > 1.9 && pesos[index] > 100).length;

    let resultado = `a) Média de altura do grupo: ${mediaAltura.toFixed(2)}m\n`;
    resultado += `b) Pessoas com mais de 90kg: ${pessoasMaisDe90Kg}\n`;
    resultado += `c) Pessoas com menos de 50kg e menos de 1.60m: ${pessoasMenos50KgMenos160}\n`;
    resultado += `d) Pessoas com mais de 1.90m e pesam mais de 100kg: ${pessoasMais190AlturaMais100Peso}`;

    document.getElementById('resultado').textContent = resultado;
}

function limparCampos() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('pso' + i).value = "";
        document.getElementById('alt' + i).value = "";
    }
    document.getElementById('resultado').textContent = "";
}