
$(".fa-bars").click(function(event) {
    //$('.nav-esquerda').toggleClass("w-100")
    //$('.nav-esquerda').toggleClass("w-0")

    $('.nav-esquerda').animate({width: 'toggle'});

})

$('#relatorios').click(e => {
    $('#lista-relatorio').slideToggle()
})

$(".fa-search").click(function(event) {
    if($('#input-search').css('display') == 'none') {
        $('.nav-procura').fadeToggle(500)
    } else {
        $('#formulario-busca').submit()
    }

    event.preventDefault()
})

