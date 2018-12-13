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

    // ANNULATION D'EVENEMENT PAR DEFAUT DE LA TOUCHE ENTREE DANS UN CHAMP INPUT

            $(document).on('keupress', '#input', function (event) {

                if(event.which == 13 || event.keyCode == 13){
                    event.preventDefault();
                }
            });



    // TRANSFORMER UNE CHAINE D UN CHAMP EN MAJUSCULE AUTOMATIQUE ET SUPPRIMER UN CARACTERE NON AUTORISER DANS LA CHAINE

    var nom = 'ja2ck8';
    var ta = nom.split('');
    var filter    = /^[aA-zZ -]+$/;
    for(var i = 0; i < nom.length; i++){

        if(!filter.test(ta[i])){

            var newnom = nom.replace(ta[i], '');
            //alert(newnom)
        }
    }


    var idFirstName = $('#first-name');
    var idSurName   = $('#surname');
    var filter    = /^[aA-zZ -]+$/;

    $(document).on('keyup', '#first-name, #surname', function () {

        if(this.id == 'first-name'){

            var firstName = idFirstName.val();
            var upperName = firstName.toUpperCase();

            $(this).val(upperName);

            var tabName   = firstName.split('');

            for(var i = 0; i < tabName.length; i++){

                $('i').html(tabName[i] + '-');
                if(filter.test(tabName[i])){

                    $('.error').hide();

                }else{

                    $(this).next('.error').html('Character invalid').show();
                }
            }




        }else{

            var surName      = idSurName.val();
            var upperSurName = surName.toUpperCase();
            $(this).val(upperSurName);
        }

    });


	// SLIDER GALLERY JQUERY
	
	$('.next').on('click', function(){
		
		var currentImg  = $('.active');
		var nextImg     = currentImg.next();
		
		if(nextImg.length){
			
			currentImg.removeClass('active').css('z-index', -10);
			nextImg.addClass('active').css('z-index', 10);
		}
		//alert('next')
	});
	$('.prev').on('click', function(){
		
		var currentImg  = $('.active');
		var prevImg     = currentImg.prev();
		
		if(prevImg.length){
			
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
		}
		//alert('next')
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