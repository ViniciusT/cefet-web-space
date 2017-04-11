// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML
var atual = 0;
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
    todasAsImagens = [
        'philae-parts.jpg',
        'philae-rosetta.jpg',
        'philae-separation.jpg',
        'philae-67-picture.jpg',
        'philae-collecting.jpg'
    ];

    function proximo() {
        if(atual == 4){
            atual = 0;
        }
        else{
            atual++;
        }

        document.getElementById("slide").src = servidorDasImagens + todasAsImagens[atual];

    }
    function anterior() {
        if(atual == 0){
            atual = 4;
        }
        else{
            atual--;
        }

        document.getElementById("slide").src = servidorDasImagens + todasAsImagens[atual];
    }
