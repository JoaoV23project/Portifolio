function main(){
    document.getElementById('mostrar1').style.display = 'none';
    document.getElementById('mostrar2').style.display = 'none';
    document.getElementById('button2').style.display = 'none';
    document.getElementById('button4').style.display = 'none';
    document.getElementById('button6').style.display = 'none';
    document.getElementById('trabalhos').style.display = 'none';
}
function idade() {
    const data = Date().split(" ");
    if((data[1] !== 'Aug' || data[1] !== 'Set' || data[1] !== 'Oct' || data[1] !== 'Nov' || data[1] !== 'Dec') && data[2] < 5){
    document.getElementById('idade').textContent = eval(data[3] - 2008 - 1);
    }
    else{
    document.getElementById('idade').textContent = eval(data[3] - 2008);
    }
}
function mostrar(element1, element2, element3){
    document.getElementById(element1).style.display = 'block';
    document.getElementById(element2).style.display = 'none';
    document.getElementById(element3).style.display = 'block';
    if(element3 === 'button6'){
        document.getElementById(element3).style.display = 'inline';
    }

}
function esconder(element1, element2, element3){
    document.getElementById(element1).style.display = 'none';
    document.getElementById(element2).style.display = 'inline';
    document.getElementById(element3).style.display = 'none';
}
function modoEscuro(){
    if(document.getElementById('corpo').style.backgroundColor !== 'black'){
        document.getElementById('corpo').style.backgroundColor = 'black';
        document.getElementById('corpo').style.color = 'white';
        document.getElementById('modo').textContent = 'Modo: Escuro';
    }
    else{
        document.getElementById('corpo').style.backgroundColor = 'white';
        document.getElementById('corpo').style.color = 'black';
        document.getElementById('modo').textContent = 'Modo: Claro';
    }
}