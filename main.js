function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);


    if (elemento === null) {
        alert('Elemento não encontrado');
    } else {
        elemento.play()
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //busca a classe[1] de cada elemento[contador] da lista listaDeTeclas
    const instrumento = listaDeTeclas[contador].classList[1];

    //junta a palavra #som_ com o nome da classe[1] da lista listaDeTeclas
    //formando o id de cada audio
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio)

    //percorre todos os elementos da lista listaDeTeclas e adiciona a função onclick em cada um deles, quando o elemento é clicado, ele chama uma função chamada "tocaSom" .
    listaDeTeclas[contador].onclick = function() {
        tocaSom(idAudio);
    }

    //adiciona um evento de tecla pressionada em cada elemento da lista listaDeTeclas que adiciona a classe 'ativa' quando uma tecla é pressionada nele
    listaDeTeclas[contador].onkeydown = function (evento) {

        console.log(evento.code) //retorna o botão precionado do teclado

        if (evento.code === 'Space' || evento.code === 'Enter') {
            listaDeTeclas[contador].classList.add('ativa');
        }
    }

    //quando soltar a tecla
    listaDeTeclas[contador].onkeyup = function () {
        listaDeTeclas[contador].classList.remove('ativa');
    }

}


/*
listaDeTeclas[0].onclick = function() { 
    tocaSom('#som_tecla_pom');
};
*/
