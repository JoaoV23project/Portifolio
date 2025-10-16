

function adicionais(el, el2, el3){
    var fezHorasExtras = document.getElementById('fezHorasExtras').value;
    var possuiDescontos = document.getElementById('possuiDescontos').value;
    var possuiBeneficios = document.getElementById('possuiBeneficios').value;

    if(fezHorasExtras === 'sim'){
        document.getElementById(el).style.display = 'block';
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
    if(possuiDescontos === 'sim2'){
        document.getElementById(el2).style.display = 'block';
    }
    else{
        document.getElementById(el2).style.display = 'none';
    }
    if(possuiBeneficios === 'sim3'){
        document.getElementById(el3).style.display = 'block';
    }
    else{
        document.getElementById(el3).style.display = 'none';
    }
}
function calcular(){
    var nome = document.getElementById('nome').value;
    var horas = document.getElementById('quantidadeHoras').value;
    var valorHora = document.getElementById('valorHora').value;
    var horasExtras = document.getElementById('horasExtras').value;
    var descontos = document.getElementById('descontos').value;
    var beneficios = document.getElementById('beneficios').value;
    var outrasDeducoes = document.getElementById('outrasDeducoes').value;
    var valorDependentes = document.getElementById('dependentes').value * 189.59;
    if(horasExtras === ""){
        horasExtras = 0;
    }
    var valorHoraExtra = (horasExtras * (valorHora * 1.5))
    if(descontos === ""){
        descontos = 0;
    }
    if(beneficios === ""){
        beneficios = 0;
    }
    if(outrasDeducoes === ""){
        outrasDeducoes = 0;
    }
    var salarioBase = (horas * valorHora) + valorHoraExtra;
    var salario = salarioBase;
    
    if(salarioBase < 1518){
        salario -= salarioBase * 0.075;
    }
    if(salarioBase >= 1518.01 && salarioBase <= 2793.88){
        salario -= salarioBase * 0.09;
    }
    if(salarioBase >= 2793.89 && salario <= 4190.83){
        salario -= salarioBase * 0.12;
    }
    if(salarioBase >= 4190.84 && salarioBase <= 8157.41){
        salario -= salarioBase * 0.14;
    }
    if(salarioBase >= 8157.42){
        salario -= 8157.41 * 0.14;
    }
    var descontoINSS = salarioBase - salario;
    var salarioComINSS = salario + descontoINSS;
    salario -= valorDependentes;
    if(salario >= 2428.81 && salarioBase <= 2826.65){
        salario *= 0.925;
    }
    if(salario >= 2826.66 && salario <= 3751.05){
        salario *= 0.85;
    }
    if(salario >= 3751.06 && salario <= 4664.68){
        salario *=  0.775;
    }
    if(salario > 4664.68){
        salario *= 0.725
    }
    var descontoIRPF = salarioComINSS - salario;
    salario -= outrasDeducoes + descontos - beneficios + (salario * 0.06);
    var valeTransporte = document.getElementById('valeTransporte').value;
    var valorTransporte = 0;
    if(valeTransporte === "sim4"){
        salario -= (salario * 0.06);
        valorTransporte = (salario * 0.06)
    }
    document.getElementById('resultado1').textContent = "Nome " + nome;
    document.getElementById('resultado2').textContent = "Salário base R$ " + salarioBase;
    document.getElementById('resultado3').textContent = "Valor horas extras +R$ " + valorHoraExtra;
    document.getElementById('resultado4').textContent = "Desconto INSS -R$ " + descontoINSS.toFixed(2);
    document.getElementById('resultado5').textContent = "Desconto IRPF -R$ "+ descontoIRPF.toFixed(2);
    document.getElementById('resultado6').textContent = "Vale-Transporte (6%) -R$ " + valorTransporte.toFixed(2);
    document.getElementById('resultado7').textContent = "Outras deduções -R$ " + outrasDeducoes;
    document.getElementById('resultado8').textContent = "Salário liquido R$ " + salario.toFixed(2);
}
function limpar(){
    document.getElementById('nome').value = "";
    document.getElementById('quantidadeHoras').value = "";
    document.getElementById('valorHora').value = "";
    document.getElementById('horasExtras').value = "";
    document.getElementById('descontos').value = "";
    document.getElementById('beneficios').value = "";
    document.getElementById('outrasDeducoes').value = "";
    document.getElementById('dependentes').value = "";
    document.getElementById('fezHorasExtras').value = "null1";
    document.getElementById('possuiDescontos').value = "null2";
    document.getElementById('possuiBeneficios').value = "null3";
    document.getElementById('valeTransporte').value = "null4";
    document.getElementById('resultado1').textContent = "O Resultado sairá aqui";
    document.getElementById('resultado2').textContent = "";
    document.getElementById('resultado3').textContent = "";
    document.getElementById('resultado4').textContent = "";
    document.getElementById('resultado5').textContent = "";
    document.getElementById('resultado6').textContent = "";
    document.getElementById('resultado7').textContent = "";
    document.getElementById('resultado8').textContent = "";

}