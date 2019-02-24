$(function(){
    $('.book').click(function(){
        $('#modal2').addClass('show');
    });
    $('.modal2__overlay').click(function(){
        $('#modal2').removeClass('show')
    })
    $('.modal2__body').click(function (e) { // aedan me davwere
        e.stopImmediatePropagation();
        // e.preventDefault();
        e.stopPropagation();
        return false; 
    })
})