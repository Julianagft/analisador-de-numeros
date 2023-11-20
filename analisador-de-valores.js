
let num = document.getElementById('num');
let lista = document.querySelector('#lista');
let res = document.querySelector('#res');
let valores = [];
listaLimpou = false;

num.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adicionar();
    }
}); 


function adicionar() {
    if (!listaLimpou) {
       lista.innerHTML = ''; 
       listaLimpou = true;
    } 

    if (num.value.trim() === '') {
        alert('Campo vazio! Por favor, adicione um valor a lista.');
        return; 
    }
    
    valores.push(Number(num.value))
    let item = document.createElement('option');
    item.text += `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    
    num.value = '';
    num.focus() 

}


function finalizar() {

    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {

       
        let soma = 0;
        let positivos = 0;
        let negativos = 0;

        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
            if (valores[i] > 0) {
                positivos++;
            } else if (valores[i] < 0) {
                negativos++;
            } 
        }

        const media = soma / valores.length;
        const percentualPositivo = (positivos / valores.length) * 100;
        const percentualNegativo = (negativos / valores.length) * 100;


        
        res.innerHTML += `<p style="color: #2C4373">Ao todo temos ${valores.length} valores cadastrados:</p>
        <p>A média aritmética dos valores é ${media.toFixed(2)}.</p>
        <p>O maior valor informado foi ${Math.max(...valores)}.</p>
        <p>O menor valor informado foi ${Math.min(...valores)}.</p>
        <p>Foram informados ${positivos} valores positivos e ${negativos} negativos.</p>
        <p>O percentual de valores positivos foi ${percentualPositivo.toFixed(2)}% e de valores negativos foi ${percentualNegativo.toFixed(2)}%</p>`
        
    }  
}





