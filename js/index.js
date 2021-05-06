function inicializadora(){
    var data=$('#data').val();
   $.ajax({
        url:(`https://api.nasa.gov/planetary/apod?api_key=SXNBClotpHaB1PHeYERRZLnPu53JQ9AhyjSfZv36&date=${data}`),
        success: function(dados){
            
           insereDados(dados)
        },
        error: function (request, error) {
            alert(request.responseText);
        }
    })
 
}

function insereDados(dado){
    var video=$('#video');
    var imagem=$('#imagem-espaco');
    var urlMidia=(dado.url);
    var tipoMedia=JSON.stringify(dado.media_type);
    $('#nome-requisicao').text(dado.title);
    $('#explicacao').text(dado.explanation);
    if(tipoMedia== '"image"'){
        video.addClass('esconder');
        imagem.attr('src',urlMidia);
        imagem.removeClass('esconder');
    }
    else{
        video.removeClass('esconder')
        video.attr('src',urlMidia);
        imagem.addClass('esconder');
    }
    console.log("ejnnenfe")
    
}

document.addEventListener("DOMContentLoaded", function(){
    inicializadora()})