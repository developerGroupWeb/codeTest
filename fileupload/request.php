<?php


function files($name){

    if(isset($_FILES[$name])) return $_FILES[$name];
}


function upload_file($name){

    $errors = [];
    $file = files($name);

    $extensions = ['png', 'jpeg', 'jpg', 'gif'];

    $file_name = $file["name"];
    $file_error = $file['error'];

    if($file_error === 0  && strlen($file_name) > 0){

        $detach = explode('.', $file_name);
        $extension = strtolower(end($detach));

        if(in_array($extension, $extensions)){

            if($file_error == 0){

                $file_size = $file['size'];

                if($file_size <= 3200000){

                    $new_name = uniqid().'.'.$extension;

                    $tmp_name = $file['tmp_name'];

                    //create the storage location of the files
                    $stone = "storage/";
                    if(!is_dir($stone)){
                        mkdir($stone);
                    }

                    $storage = $stone.$new_name;

                    if(move_uploaded_file($tmp_name, $storage)){

                        $errors = ['status' => 200, 'message' => 'succeed', 'file_name' => $new_name];

                        //return "The file has been downloaded successfully";
                    }else{

                        $errors[$name] = ['status' => 5, 'message' => "There was a problem uploading"];
                    }
                }else{

                    $errors = ['status' => 4, 'message' => "The file exceeds 32 Mo"];
                }

            }else{

                $errors = ['status' => 2,'message' => "Errored with code $file_error"];
            }

        }else{
            $errors = ['status' => 201, 'message' => "The file is not allowed"];
        }

    }else{
        $errors = ['status' => 303, 'message' => 'File failed'];
    }

    return json_encode($errors);
}

echo upload_file('image');