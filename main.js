const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = []
const notas = []
const spanaprovado = '<span class="aprovado">Aprovado</span>';
const spanreprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima: "))

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediafinal();

});


function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');


    if(atividades.includes(inputNomeAtividade.value)){
        alert (`A atividade ${inputNomeAtividade.value} já foi inserida!`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? spanaprovado : spanreprovado } </tr}`; 
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaMediafinal(){

    const mediaFinal = calculaMediafinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanaprovado : spanreprovado ;

    console.log(mediaFinal)
}

function calculaMediafinal(){
    let somadasNotas = 0

    for(let i = 0; i < notas.length; i++) {
        somadasNotas += notas[i];
    }

    return somadasNotas / notas.length;
}
