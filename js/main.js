
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura ** 2)).toFixed(2);

        let classificacao = '';
        if (valorIMC < 18.25) {
            classificacao = 'Abaixo do pesso';
        }
        else if (valorIMC < 25) {
            classificacao = 'Pesso adequado';
        }
        else if (valorIMC < 30) {
            classificacao = 'Levimente acima do peso';
        }
        else if (valorIMC < 35) {
            classificacao = 'Obesidade Grau I';
        }

        resultado.textContent = ('Seu IMC: ' +valorIMC);
    }else {
        resultado.textContent = 'Preencha todos os campos';
    }
}

calcular.addEventListener('click', imc);