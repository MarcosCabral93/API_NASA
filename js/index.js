function inicializadora() {
    var data = $('#data').val();
    $("#spinner").toggle();
    $.ajax({
        url: (`https://api.nasa.gov/planetary/apod?api_key=SXNBClotpHaB1PHeYERRZLnPu53JQ9AhyjSfZv36&date=${data}`),
        success: function (dados) {
            insereDados(dados)
        }
    }).fail(function () { erro() }).always(function(){$("#spinner").toggle();
   
    })
}
function insereDados(dado) {
    let urlMidia = (dado.url);
    let tipoMedia = JSON.stringify(dado.media_type);
    $('#nome-requisicao').text(dado.title);
    $('#explicacao').text(dado.explanation);
    if (tipoMedia == '"image"') {
        $('#video').addClass('esconder');
        $('#imagem-espaco').attr('src', urlMidia);
        $('#imagem-espaco').removeClass('esconder');
        $('.divparagrafo').removeClass('esconder');
    }
    else {
        $('#video').removeClass('esconder');
        $('#video').attr('src', urlMidia);
        $('#imagem-espaco').addClass('esconder');
        $('.divparagrafo').removeClass('esconder');
    }
}

