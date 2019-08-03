toggle(0.01)
$('#lista-relatorio').slideToggle()


function toggle(speed, e = null) {
    $('#content').toggleClass('content-without-sidebar')
    $('#sidebar').toggle(speed)
}

$(".fa-bars").click(e => toggle(250, e))

$('#relatorios').click(e => {
    $('#lista-relatorio').slideToggle()
})

$('#link-pesquisar').click(e => {
    $('#campo-pesquisar').focus()
})

