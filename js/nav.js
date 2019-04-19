
$(".fa-bars").click(function(event) {
    $('.nav-esquerda').fadeToggle(500)
    event.preventDefault()
})

$(".fa-search").click(function(event) {
    if($('#input-search').css('display') == 'none') {
        $('.nav-procura').fadeToggle(500)
    } else {
        $('#formulario-busca').submit()
    }

    event.preventDefault()
})

