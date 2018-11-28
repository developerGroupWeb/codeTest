$(function(){


   $('body #hide0').nextUntil('#addInput').add('#showNext').hide();

        $(document).on('click', '.nextfiled', function(){

            //alert($(this).parent().length)
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


    var Person = {

        Name : 'Jack',
        Age  : '27',
        Email : 'jacknouatin@yahoo.fr',
        Phone : '+380633474129',
        Country : 'Ukraine',
        City : 'Dnepr',
    };

    $.each(Person, function (key, value) {

        //alert(key + ' : ' + value)
    });



// Gallery des photos

    $(document).on('click', 'img', function(){

        var src   = $(this).attr('src');
        var slice = src.split('/');
        var img   = slice[1];
        var path  = "images/"+img;

        $('#img').attr('src', path);

    });




// Traitement de formulaire

    var error_name     = false;
    var error_email    = false;
    var error_password = false;
    var error_confirm  = false;


    var idEmail    = $('#testSubmit #email');
    var idPassword = $('#testSubmit #password');
    var idConfirm  = $('#testSubmit #password_confirm');
    var idName     = $('#testSubmit #name');

    function alertMessage(id, errorClass, text){

        return $(id).next(errorClass).html(text).show();
    }


    $(document).on('blur', '#name', function () {

        var name = idName.val();

        if (name == '') {

            alertMessage(this, '.error', 'This filed is required');
            error_name = false;

        } else if (name.length < 5) {

            alertMessage(this, '.error', 'Type 5 characters minimum');
            error_name = false;

        } else {

            $(this).next('.error').hide();
            error_name = true;
        }

    });

    $(document).on('blur', '#email', function () {

        var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var email = idEmail.val();

        if (email == '') {

            alertMessage(this, '.error', 'This filed is required');
            error_email = false;

        } else if (!filter.test(email)) {

            alertMessage(this, '.error', 'Invalid email');
            error_email = false;

        } else {

            $(this).next('.error').hide();
            error_email = true;
        }
    });

    $(document).on('blur', '#password', function () {

        var password = idPassword.val();

        if(password == ''){

            alertMessage(this, '.error', 'This filed is required');
            error_password = false;

        }else if(password.length < 8){

            alertMessage(this, '.error', 'Type 8 characters minimum');
            error_password = false;

        }else{

            $(this).next('.error').hide();
            error_password = true;
        }

    });

    $(document).on('blur', '#password_confirm', function () {

        var confirm = idConfirm.val();
        var password = idPassword.val();

        if(confirm != password){

            alertMessage(this, '.error', 'Password aren\'t identical');
            error_confirm = false;

        }else{

            $(this).next('.error').hide();
            error_confirm = true;
        }

    });



    $(document).on('submit', '#testSubmit', function () {

        if(error_name == false || error_email == false || error_password == false || error_confirm == false){
            return false
        }else{
            return true;
        }

    });



    // TRANSFORMER UNE CHAINE D UN CHAMP EN MAJUSCULE AUTOMATIQUE ET SUPPRIMER UN CARACTERE NON AUTORISER DANS LA CHAINE

    var idFirstName = $('#first-name');
    var idSurName   = $('#surname');

    $(document).on('keyup', '#first-name, #surname', function () {

        var firstName = idFirstName.val();
        var surName   = idSurName.val();
        var filter = /^[aA-zZ -]+$/;

        if(this.id == 'first-name'){

            var lastLetter = firstName.slice(-1);
            var firstLetter = firstName.slice(0, 1);
            var upper = firstName.toUpperCase();

            if((filter.test(lastLetter))){

                $(this).val(upper);
                $('.error').hide();

            }else{

               var newFirstName = firstName.replace(lastLetter, '');
               $(this).val(newFirstName);
               $(this).next('.error').html('Caractère non autorisé').show();
            }


        }else{

            var lastLette = surName.slice(-1);
            var uppe      = surName.toUpperCase();

            if(filter.test(lastLette)){

                $(this).val(uppe);
                $('.error').hide();

            }else{

                var newSurName = surName.replace(lastLette, '');
                $(this).val(newSurName);
                $(this).next('.error').html('Caractère non autorisé').show();
            }
        }



    });






    // La function qui va afficher le fichier selectionner avant l'envoi

    $(window).load(function(){

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profilCv').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imgInp").change(function(){
            readURL(this);
        });
    });
});