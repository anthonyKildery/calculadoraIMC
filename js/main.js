
const calcular = document.getElementById('calcular');

function imc() {
    const masculino = document.getElementById('masculino');
    const feminino = document.getElementById('feminino');
    const idade = document.getElementById('idade').value;
    const estatura = document.getElementById('estatura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (idade !== '' && estatura !== '' && peso !== '') {
        const imc = (peso / (estatura * estatura)).toFixed(2);
        let sexo = '';
        let classificacao = '';
        
        if (masculino.checked == true) {
            sexo = 'Masculino';

            if (imc < 18.5) {
                classificacao = 'abaixo do peso.';
            }
            else if (imc > 18.49 && imc < 25) {  
                classificacao = 'peso normal.';
            }
            else if (imc > 25 && imc < 29.99) {    
                classificacao = 'sobrepeso.';
            }
            else if (imc > 30) {
                classificacao = 'obesidade.';
            }
        }
        else if (feminino.checked == true) {
            sexo = 'Feminino';

            if (imc < 18.5) {
                classificacao = 'abaixo do peso.';
            }
            else if (imc > 18.49 && imc < 25) {  
                classificacao = 'peso normal.';
            }
            else if (imc > 25 && imc < 29.99) {    
                classificacao = 'sobrepeso.';
            }
            else if (imc > 30) {
                classificacao = 'obesidade.';
            }
        }

        let text = ('Seu IMC é de ' +imc+ '. Isso indica que você está classificado com ' +classificacao); 
        document.getElementById('resultado').innerHTML = text;

    }else {
        resultado.textContent = 'Preencha todos os campos';
    }
}

calcular.addEventListener('click', imc);