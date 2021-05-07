

function erro() { //exibe caso dê erro
    $('#video').addClass('esconder');
    $('#imagem-espaco').addClass('esconder');
    $('#trouble').toggle();
    $('.divparagrafo').addClass('esconder');
    setTimeout(function () {
        $('#trouble').toggle();
    }, 3000)
}


document.addEventListener("DOMContentLoaded", function () {
    inicializadora()
})