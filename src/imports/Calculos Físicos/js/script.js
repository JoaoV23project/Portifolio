function velo(){
    velo_media = document.getElementById('deslo').value / document.getElementById('intervalo').value;
    window.alert("v = " + velo_media + " m/s");
}
function forca_resul(){
    forca_resu = document. getElementById('massa').value * document.getElementById('acele').value;
    window.alert("F = " + forca_resu + " N");
}
function cinetica(){
    energia_cinetica = (document.getElementById('massa2').value * (document.getElementById('velo').value * document.getElementById('velo').value)) / 2;
    window.alert("Ec = " + energia_cinetica + " J");
}
function potencia1(){
    potencia_mecanica = document.getElementById('potencia').value / document.getElementById('tempo').value;
    window.alert("P = " + potencia_mecanica + " W");
}
function pressao(){
    pressao1 = document.getElementById('forca').value / document.getElementById('area').value;
    window.alert("P = " + pressao1 + " Pa")
}