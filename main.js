function sim(){
    location.href = "https://youtube.com/watch?v=MxPReMGiP2U"
    alert("você aceitou alícia ficar comigo! :)");
}
function desvia(t){
var btn = t;
btn.style.position = 'absolute';
btn.style.bottom = geraposicao(10, 90);
btn.style.left = geraposicao(10, 90);
console.log("Opa, desviei...");
}

function geraposicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}