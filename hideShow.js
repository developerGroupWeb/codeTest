$(function(){
   
   $('body #hide0').nextUntil('#addInput').add('#showNext').hide();

        $(document).on('click', '.nextfiled', function(){

            $(this).parent().next().show();
            $(this).parent().hide();

            /*
            var intId = $(this).attr('id');
            var nbButtonShow = parseFloat(intId, 10) + 1;
            var nbButtonHide = parseFloat(intId, 10);

            $('#hide'+ nbButtonShow +'').show();
            $('#hide'+ nbButtonHide +'').hide();

            */
        });


   var i = 1;
   $(document).on('click', '#add, .remove', function () {

       if(this.id == 'add'){
            //alert('ok')
            i++
            $('table').append('<tr id="row'+ i +'"><td><input type="text" name="name[]"  placeholder="Enter your name"/></td><td><button id="'+ i +'" class="remove">Remove</button></td></tr>');

       }else{

            var btn_remove = $(this).attr('id');
            $('#row'+ btn_remove +'').remove();
       }

   });


});