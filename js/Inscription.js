function valider(){
    
    var nom = document.getElementById('idNom');
    var prenom=document.getElementById('idPrenom').value;;
    var login= document.getElementById('idLogin').value;
    var password= document.getElementById('idPassword').value;
    var confirmationpwd=document.getElementById('idConfirmationPassword').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!nom.value)
		{
			alert('Veuillez saisir un nom');
            nom.focus();
        }
    else if(prenom==""){
        alert('Veuillez saisir un prenom');
       prenom.focus();
    }
    else if(login==''){
        alert('Veuillez saisir un Login');
        login.focus();
    }
    else if (!filter.test(login))
		{
			alert('Veuillez saisir un Email valide');
            login.focus();
        }
    else if(password==''){
          alert('Veuillez saisir un mot de passe');
          password.focus();
    }
    else if(confirmationpwd==''){
        alert('Veuillez confimer votre mot de passe');
        confirmationpwd.focus();
  }
  else if(password!=confirmationpwd){
    alert('Erreur mot de passe');
   }
   else("Merci de votre inscription et bienvenue dans notre site");
    
} 