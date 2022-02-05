const Taux_TPS=0.05;
const Taux_TVQ=0.0975;

function ajouterItem(image,produit, quantite, prix){
var nouvelleLigne = "<tr id='idtr'>";
nouvelleLigne += "<td id='idimage'>"+ image + "</td>";
nouvelleLigne += "<td id='idArticle'>"+ produit + "</td>";
nouvelleLigne += "<td id='idquantite'>"+ quantite + "</td>";
nouvelleLigne += "<td id='idPrix'>"+ prix + "</td>";
nouvelleLigne += "<td id='idSupprimer'>"+"<a href='#' onclick='supprimer(this);'>"+ 'Supprimer'+"</a>" + "</td>";
nouvelleLigne += "</tr>";

var ancienContenu = document.getElementById("corpsTableau").innerHTML;
var nouveauContenu = ancienContenu + nouvelleLigne;
document.getElementById("corpsTableau").innerHTML = nouveauContenu;

var nombreItemPanier = parseInt(document.getElementById("idItem").innerHTML);
nombreItemPanier += parseInt(quantite);
document.getElementById("idItem").innerHTML = nombreItemPanier;

calculerFacture();
}
 

function afficherPanier(){
  document.getElementById("zoneContenuItem").style.display="none";
  document.getElementById("zoneContenuFacture").style.display="block";
  document.getElementsByClassName("passerCommande").style.top=-100+"px";
 

}
function afficherZoneContenuItem(){
  document.getElementById("zoneContenuItem").style.display="block";
  document.getElementById("zoneContenuFacture").style.display="none";
}
function masquerzoneContenuFacture(){
  document.getElementById("zoneContenuFacture").style.display="none";
}

function masquerContenu(){
  document.getElementById("zoneContenuItem").style.display="none";
}

function calculerFacture(){
  let tBody=document.getElementById("corpsTableau");
  let listeTr=tBody.getElementsByTagName("tr");

  let montanttotalAvantTaxes=0;
  
  for(let i= 0; i<listeTr.length; i++){
    let ligne=listeTr[i];

    let listeTd=ligne.getElementsByTagName("td");
  let prixProduit=parseFloat(listeTd[3].innerHTML);

   
    let quantiteProduit=parseInt(listeTd[2].innerHTML);
    montanttotalAvantTaxes+=(prixProduit*quantiteProduit);
    montanttotalAvantTaxes=montanttotalAvantTaxes;
  }

  
  let totalTPS = montanttotalAvantTaxes * Taux_TPS;
  let totalTVQ = montanttotalAvantTaxes * Taux_TVQ;
  let montanttotalApresTaxes=montanttotalAvantTaxes+ totalTPS+totalTVQ;

  document.getElementById("idTotalAvantTaxes").innerHTML='Sous-total:'+montanttotalAvantTaxes.toFixed(2)+"$";
  document.getElementById("idTotalApresTaxes").innerHTML='Total:'+montanttotalApresTaxes.toFixed(2)+"$"; 
}
////supprimer :
function supprimer(elementLien){
 
  let nbritem=document.getElementById("idItem").innerHTML;
  var elementTd=elementLien.parentNode;
  var elementLigne=elementTd.parentNode;
  elementLigne.parentNode.removeChild(elementLigne);
  nbritem--;
  document.getElementById("idItem").innerHTML=nbritem;

  document.getElementById("idTotalAvantTaxes").innerHTML='';
  document.getElementById("idTotalApresTaxes").innerHTML='';
  document.getElementsByTagName("footer").style.top=0+"px";
  document.getElementsByTagName("footer").style.bottom=0+"px";
  document.getElementsByTagName("footer").style.left=0+"px";
  document.getElementsByTagName("footer").style.right=0+"px";
  document.getElementsByTagName("footer").style.top=0+"px";
  document.getElementsByTagName("footer").style.float=bottom;
 
/////----------
  montanttotalAvantTaxes = montanttotalAvantTaxes-prixProduit;
  let totalTPS = montanttotalAvantTaxes * Taux_TPS;
  let totalTVQ = montanttotalAvantTaxes * Taux_TVQ;
  let montanttotalApresTaxes=montanttotalAvantTaxes+ totalTPS+totalTVQ;

  document.getElementById("idTotalAvantTaxes").innerHTML=montanttotalAvantTaxes.toFixed(2)+"$";
  document.getElementById("idTotalApresTaxes").innerHTML=montanttotalApresTaxes.toFixed(2)+"$"; 

}

function affichercaisse(){
  window.open("caisse.html");
}