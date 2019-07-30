$(".fa-bars").click(function(event) {
    //$('.nav-esquerda').toggleClass("w-100")
    //$('.nav-esquerda').toggleClass("w-0")

    $('#content').toggleClass('content-without-sidebar')
    $('#sidebar').toggle(250)

})

$('#relatorios').click(e => {
    $('#lista-relatorio').slideToggle()
})

