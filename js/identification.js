function affichePageAccueil(){
    var login = document.getElementById ('idLogin').value;
    var pwd = document.getElementById ('idPassword').value;
   var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(login===''|| (!filter.test(login))){
        alert("Merci de saisir votre login valide!");
        login.focus();
    }
        else if(pwd==''){
            alert("Merci de saisir votre mot de passe!");
            pwd.focus();
        }
   else{
        window.open("Accueil.html");
    } 
}

