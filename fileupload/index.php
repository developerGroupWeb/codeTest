<?php
 $image = "5e59fe0384711.jpg";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content="Une formation compelte sur Jquery"/>
    <meta http-equiv="content-language" content="fr"/>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Code test</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

</head>
<body>

<h1>Upload file in Jquery</h1>
<div class="content">
    <div class="user-pic" id="error"><img src="storage/<?= isset($image) ? $image : ''?>" id="loading" width='240' height='200'></div>

    <form method="post" action="request.php" enctype="multipart/form-data" id="form-upload">
        <div class="form-group">
            <input type="file" name="image" class="form-control-file d-none" id="file">
            <label for="file">Select file</label>
            <span class="text-danger error font-italic"></span>
        </div>
        <button class="btn btn-primary d-none" id="upload-btn">Upload</button>
    </form>
</div>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


<script src="upload.js"></script>
</body>
</html>