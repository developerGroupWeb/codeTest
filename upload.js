$(function () {

    const alertMessage = (id, errorClass, text) => {
        return $(id).next(errorClass).html(text).show('slow');
    };

    const deleteMessage = (errorClass) => {
        return $(errorClass).hide();
    };

    $(document).on('change', '#file', function (e) {
        e.preventDefault();

        let property   = document.getElementById('file').files[0];
        let name       = property.name;
        let extension  = name.split('.').pop().toLocaleLowerCase();
        let extensions = ['gif', 'png', 'jpg'];
        //alert(jQuery.inArray(extension, extensions));
        if(jQuery.inArray(extension, extensions) === 2){

            let size = property.size;
            if(size <= 3000000){

                let form_data  = new FormData();
                form_data.append('file', property);
                deleteMessage('.error');
                alert(name)
            }else{
                alertMessage('#file','.error','Le fichier est trop volumeux');
            }
            //
        }else{
            alertMessage('#file','.error','Le type du fichier n\'est pas supportable');
        }
    });
});