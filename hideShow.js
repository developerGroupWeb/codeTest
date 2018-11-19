$(function(){
   
   $('body #hide0').nextUntil('#addInput').hide();

        $(document).on('click', '.nextfiled', function(){

            var intId = $(this).attr('id');
            var buttonShow = parseFloat(intId, 10) + 1;
            var buttonHide = parseFloat(intId, 10);
            //alert(button)
            $('#hide'+ buttonShow +'').show();
            $('#hide'+ buttonHide +'').hide();
        })


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