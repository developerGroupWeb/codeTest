<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content="Une formation compelte sur Jquery"/>
    <meta http-equiv="content-language" content="fr"/>
    <link rel="stylesheet" href="slyle.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Code test</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

</head>
<body>




<div>
    <h1>Upload file in Jquery</h1>
    <form method="post" action="" enctype="multipart/form-data" id="form-upload">
        <div class="form-group">
            <label for="file">Example file input</label>
            <input type="file" name="file" class="form-control-file d-none" id="file">
            <span class="text-danger error font-italic"></span>
        </div>
        <button class="btn btn-primary">Upload</button>
    </form>
</div>

<hr/>

<div id="hide0">

    <p>
        0 Le principe de fonctionnement d'XMLHttpRequest est d'envoyer une requête HTTP vers le serveur,
        et une fois la requête envoyée, les données renvoyées par le serveur peuvent être récupérées. Pour ce faire,
        il faut disposer d'un objet disposant de cette fonctionnalité. Cet objet a été développé par Microsoft et implémenté
        dans Outlook puis dans Internet Explorer
        5.5 en tant que contrôle ActiveX. Microsoft l'avait à l'époque nommé XMLHTTP.Le principe de fonctionnement d'XMLHttpRequest est d'envoyer une requête HTTP vers le serveur,
        et une fois la requête envoyée, les données renvoyées par le serveur peuvent être récupérées. Pour ce faire,
        il faut disposer d'un objet disposant de cette fonctionnalité. Cet objet a été développé par Microsoft et implémenté
        dans Outlook puis dans Internet Explorer
        5.5 en tant que contrôle ActiveX. Microsoft l'avait à l'époque nommé XMLHTTP.
    </p>
    <button class="nextfiled" id="0">Next</button>
</div>
<div id="hide1">
    <p>
       1 Le principe de fonctionnement d'XMLHttpRequest est d'envoyer une requête HTTP vers le serveur,
        et une fois la requête envoyée, les données renvoyées par le serveur peuvent être récupérées. Pour ce faire,
        il faut disposer d'un objet disposant de cette fonctionnalité. Cet objet a été développé par Microsoft et implémenté
        dans Outlook puis dans Internet Explorer
        5.5 en tant que contrôle ActiveX. Microsoft l'avait à l'époque nommé XMLHTTP.Le principe de fonctionnement d'XMLHttpRequest est d'envoyer une requête HTTP vers le serveur,
        et une fois la requête envoyée, les données renvoyées par le serveur peuvent être récupérées. Pour ce faire,
        il faut disposer d'un objet disposant de cette fonctionnalité. Cet objet a été développé par Microsoft et implémenté
        dans Outlook puis dans Internet Explorer
        5.5 en tant que contrôle ActiveX. Microsoft l'avait à l'époque nommé XMLHTTP.
    </p>
    <button class="nextfiled" id="1">Next</button>
</div>
<div id="hide2">
    <p>
        2 Le principe de fonctionnement d'XMLHttpRequest est d'envoyer une requête HTTP vers le serveur,
        et une fois la requête envoyée, les données renvoyées par le serveur peuvent être récupérées. Pour ce faire,
        il faut disposer d'un objet disposant de cette fonctionnalité. Cet objet a été développé par Microsoft et implémenté
        dans Outlook puis dans Internet Explorer
        5.5 en tant que contrôle ActiveX. Microsoft l'avait à l'époque nommé XMLHTTP.Le principe de fonctionnement d'XMLHttpRequest est d'envoyer une requête HTTP vers le serveur,
        et une fois la requête envoyée, les données renvoyées par le serveur peuvent être récupérées. Pour ce faire,
        il faut disposer d'un objet disposant de cette fonctionnalité. Cet objet a été développé par Microsoft et implémenté
        dans Outlook puis dans Internet Explorer
        5.5 en tant que contrôle ActiveX. Microsoft l'avait à l'époque nommé XMLHTTP.
    </p>
    <button class="nextfiled" id="2">Next</button>
</div>
<div id="hide3">
    <p>
        3 Le principe de fonctionnement d'XMLHttpRequest est d'envoyer une requête HTTP vers le serveur,
        et une fois la requête envoyée, les données renvoyées par le serveur peuvent être récupérées. Pour ce faire,
        il faut disposer d'un objet disposant de cette fonctionnalité. Cet objet a été développé par Microsoft et implémenté
        dans Outlook puis dans Internet Explorer
        5.5 en tant que contrôle ActiveX. Microsoft l'avait à l'époque nommé XMLHTTP.Le principe de fonctionnement d'XMLHttpRequest est d'envoyer une requête HTTP vers le serveur,
        et une fois la requête envoyée, les données renvoyées par le serveur peuvent être récupérées. Pour ce faire,
        il faut disposer d'un objet disposant de cette fonctionnalité. Cet objet a été développé par Microsoft et implémenté
        dans Outlook puis dans Internet Explorer
        5.5 en tant que contrôle ActiveX. Microsoft l'avait à l'époque nommé XMLHTTP.
    </p>
    <button class="nextfiled" id="3">Next</button>
</div>

<div id="showNext">

    <input type="text" name="name[]" id="name" placeholder="Enter your name"/>
    <button>Add</button>

</div>

<div id="addInput">
    <table>
        <tr>
            <td><input type="text" name="name[]" id="name" placeholder="Enter your name"/></td>
            <td><button id="add">Add</button></td>
        </tr>
    </table>
</div>
<br/><br/>

<img src="images/chemise-a.jpg" id="img"><br/><br/>
<img src="images/chemise-a.jpg">
<img src="images/chemise-b.jpg">
<img src="images/chemise-c.jpg">
<img src="images/chemise-d.jpg">
<br/><br/><br/><br/>

<h3> TRANSFORMER UNE CHAINE D UN CHAMP EN MAJUSCULE  ET SUPPRIMER UN CARACTERE NON AUTORISER AUTOMATIQUE DANS LA CHAINE</h3>

<form method="post" action="" id="automatic">
    <input type="text" name="name" id="first-name" placeholder="Enter your first name"/>
    <span class="error" style="color: red; font-style: italic"></span><i></i>
    <input type="text" name="name" id="surname" placeholder="Enter your surname"/>
    <span class="error" style="color: red; font-style: italic"></span>
    <br/>
    <button>Send</button>
</form>
<br/><br/><br/><br/>

<form method="post" action="" id="testSubmit">
    <input type="text" id="name" placeholder="Enter your name"/><span class="error" style="color: red; font-style: italic"></span>
    <input type="email" id="email" placeholder="Enter your email"/><span class="error" style="color: red; font-style: italic"></span>
    <input type="password" id="password" placeholder="Enter your password"/><span class="error" style="color: red; font-style: italic"></span>
    <input type="password" id="password_confirm" placeholder="Confirm your password"/><span class="error" style="color: red; font-style: italic"></span><br/>
    <button type="submit">Send</button>
</form>

<br/><br/><br/>


<h1>Jquery Slider Gallery</h1>

<div class="slider-outer">

   <img src='images/prev.png' class='prev' alt='prev'/>

      <div class='slider-inner'>
	     <img src='images/chemise-a.jpg' class='active'/>
	     <img src='images/chemise-b.jpg' />
	     <img src='images/chemise-c.jpg' />
	     <img src='images/chemise-d.jpg' />
	  </div>

   <img src='images/next.png' class='next' alt='next'/>

</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


<script src="hideShow.js"></script>
<script src="upload.js"></script>
</body>
</html>