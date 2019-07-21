//Mostra o ícone conforme a necessidade de qual ícone ocular mostar.
$('#olho').on('click', evento => {
    if($('#campo_senha').attr('type') === 'password') {
        $('#campo_senha').prop('type', 'text')

        $('#icone-olho').removeClass('fa-eye')
        $('#icone-olho').addClass('fa-eye-slash')
    } else {
        $('#campo_senha').prop('type', 'password')

        $('#icone-olho').removeClass('fa-eye-slash')
        $('#icone-olho').addClass('fa-eye')
    }  
})

$('#visual-container').slideUp(1000)