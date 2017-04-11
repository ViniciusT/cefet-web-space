// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
var p1 = false;
var p2 = false;
var p3 = false;

function insertClass(id) {
    var d;
    var b;
    if(id == 'p1'){
        d = document.getElementById(id);
        b = document.getElementById('buttonp1');
        if(p1 ==  false){
            d.className += " expandido";
            b.textContent = "-"
        }
        else{
            d.classList.remove("expandido");
            b.textContent = "+"
        }
        p1 = !p1;
    }
    else if(id =='p2'){
        d = document.getElementById(id);
        b = document.getElementById("button" + id);
        if(p2 ==  false){
            d.className += " expandido";
            b.textContent = "-"
        }
        else{
            d.classList.remove("expandido");
            b.textContent = "+"
        }
        p2 = !p2;
    }
    else{
        d = document.getElementById(id);
        b = document.getElementById("button" + id);
        if(p3 ==  false){

            d.className += " expandido";
            b.textContent = "-"
        }
        else{
            d.classList.remove("expandido");
            b.textContent = "+"
        }
        p3 = !p3;
    }


}