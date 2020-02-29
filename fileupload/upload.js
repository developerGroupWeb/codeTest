$(function () {

    $('#upload-btn').hide();

    const borderColorMessage = (id) => {
        return $(id).css('border-color', 'red');
    };

    $(document).on('change', '#file', function (e) {
        e.preventDefault();

        $('#loading').attr('src','images/loading.svg');

        setTimeout(function () {

            $('#loading').removeAttr('src');

            let file = $('#file').val();

            if(file !== ''){

                let formData = new FormData();
                let property = $('input[name="image"]').prop('files')[0];

                let name       = property.name;
                let extension  = name.split('.').pop().toLocaleLowerCase();
                let extensions = ['gif', 'png', 'jpg'];

                if(jQuery.inArray(extension, extensions) === 2){

                    let size = property.size;

                    if(size <= 3000000){

                        formData.append('image', property);

                        $('#error').removeAttr('style');

                        $.ajax({
                            url: 'request.php',
                            method: 'POST',
                            data: formData,
                            contentType: false,
                            cache: false,
                            processData: false,
                            async: true,
                            success: function (data) {

                                let resp = $.parseJSON(data);

                                if(resp.status === 200){

                                    $('.user-pic img').attr('src', 'storage/'+resp.file_name);

                                }else if(resp.status !== 200){
                                    console.log(resp.message);
                                }
                            }
                        });
                    }else{
                        borderColorMessage('#error');
                    }
                    //
                }else{
                    borderColorMessage('#error');
                }

            }else{
                borderColorMessage('#error');
            }
        }, 3000);


    });

});