toggle()

function toggle(e = null) {
    $('#content').toggleClass('content-without-sidebar')
    $('#sidebar').toggle(250)
}

$(".fa-bars").click(toggle)

$('#relatorios').click(e => {
    $('#lista-relatorio').slideToggle()
})

