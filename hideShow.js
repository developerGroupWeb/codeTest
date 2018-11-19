$(function(){
   
   $('body #hide0').nextUntil().hide();

        $(document).on('click', '.nextfiled', function(){

            var intId = $(this).attr('id');
            var buttonShow = parseFloat(intId, 10) + 1;
            var buttonHide = parseFloat(intId, 10);
            //alert(button)
            $('#hide'+ buttonShow +'').show();
            $('#hide'+ buttonHide +'').hide();
        })

});