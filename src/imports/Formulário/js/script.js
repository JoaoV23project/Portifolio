function cupom(){
    if(document.getElementById("cupom").value === ""){
        window.alert("Cupom invalido");
    }else{
        window.alert("Cupom inserido!");
    }
}
function concluir(){
    // Professor, não coloquei as outras necessidades pois eram muitas, desculpa.
    if(document.getElementById("nome").value === "" || document.getElementById("email").value === ""){
        window.alert("Cadastro inválido!")
    }else{
        window.alert("Cadastro feito com sucesso!");
    }
}