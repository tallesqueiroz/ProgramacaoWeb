const calcularQuadrado = (numero) => numero * numero;
const calcularCubo = (numero) => numero * numero * numero;
const calcularRaiz = (numero) => Math.sqrt(numero);

const historico = [];

document.getElementById('numeroForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    // Obtém o valor do número digitado
    const numero = parseFloat(document.getElementById('numero').value);
    const operacao = document.getElementById('operacao').value;
    
    let resultado;
    if (operacao === 'quadrado') {
        resultado = calcularQuadrado(numero);
    } else if (operacao === 'cubo') {
        resultado = calcularCubo(numero);
    } else if (operacao === 'raiz') {
        resultado = calcularRaiz(numero);
    }

    // Exibe o resultado na página
    document.getElementById('resultado').textContent = `O quadrado é: ${resultado}`;

    historico.push(`${operacao} de ${numero} = ${resultado}`);
    
    const lista = document.getElementById('listaOperacoes');
    lista.innerHTML = "";

    for (const item of historico) {
        const li = document.createElement("li");
        li.textContent = item;

        lista.appendChild(li);
    }
});