function calcular(){
    let nome = document.getElementById('nome').value;
    let sexo = document.getElementById('sexo').value;
    let altura_quadrado = Number(document.getElementById('altura').value * document.getElementById('altura').value);
    let imc = Number(document.getElementById('peso').value / (document.getElementById('altura').value * document.getElementById('altura').value));
    let falta_feminino = (19.1 - imc) * altura_quadrado;
    let acima_feminino = (imc - 25.8) * altura_quadrado;
    let falta_masculino = (20.7 - imc) * altura_quadrado;
    let acima_masculino = (imc - 26.4) * altura_quadrado;
    let resulado = "";
    if(sexo == "feminino"){
        if(imc < 19.1){
            resulado = "Abaixo do peso, você precisa ganhar " + falta_feminino.toFixed(2) + " Kg";
        }
        if(imc >= 19.1 && imc < 25.8){
            resulado = "No peso normal";
        }
        if(imc >=25.8 && imc < 27.3){
            resulado = "Marginalmente acima do peso, você precisa perder " + acima_feminino.toFixed(2) + " Kg";
        }
        if(imc >= 27.3 && imc < 32.3){
            resulado = "Acima do peso, você precisa perder " + acima_feminino.toFixed(2) + " Kg";
        }
        if(imc > 32.3){
            resulado = "Obesa, você precisa perder " + acima_feminino.toFixed(2) + " Kg";
        }
    }
    if(sexo == "masculino"){
        if(imc < 20.7){
            resulado = "Abaixo do peso, você precisa ganhar " + falta_masculino.toFixed(2) + " Kg";
        }
        if(imc >= 20.7 && imc < 26.4){
            resulado = "No peso normal";
        }
        if(imc >=26.4 && imc < 27.8){
            resulado = "Marginalmente acima do peso, você precisa perder " + acima_masculino.toFixed(2) + " Kg";
        }
        if(imc >= 27.8 && imc < 31.1){
            resulado = "Acima do peso, você precisa perder " + acima_masculino.toFixed(2) + " Kg";
        }
        if(imc > 31.1){
            resulado = "Obeso, você precisa perder " + acima_masculino.toFixed(2) + " Kg";
        }
    }
    document.getElementById('final').textContent = "Resultado: " + resulado;
}