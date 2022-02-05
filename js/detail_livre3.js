const Taux_TPS=0.05;
const Taux_TVQ=0.0975;


function ajouterItem(produit, quantite, prix){


var quantite=document.getElementById("idQuantite").value;
var nouvelleLigne = "<tr id='idLigne'>";
nouvelleLigne += "<td  id='idArticle'>"+'<img src="Livres/Informatique/3.jpg" width="100" height="100"></img>'+'&nbsp;'+ produit+ "</td>";
nouvelleLigne += "<td id='idquantite' >"+ quantite + "</td>";
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


function calculerFacture(){
let tBody=document.getElementById("corpsTableau");
let listeTr=tBody.getElementsByTagName("tr");

let montanttotalAvantTaxes=0;

for(let i= 0; i<listeTr.length; i++){
  let ligne=listeTr[i];
  let listeTd=ligne.getElementsByTagName("td");
  let prixProduit=parseFloat(listeTd[2].innerHTML);
  let quantiteProduit=parseInt(listeTd[1].innerHTML);
  montanttotalAvantTaxes+=prixProduit*quantiteProduit;
}


let totalTPS = montanttotalAvantTaxes * Taux_TPS;
let totalTVQ = montanttotalAvantTaxes * Taux_TVQ;
let montanttotalApresTaxes=montanttotalAvantTaxes+ totalTPS+totalTVQ;

document.getElementById("idTotalAvantTaxes").innerHTML="Sous-total: "+montanttotalAvantTaxes.toFixed(2)+"$";
document.getElementById("idTotalApresTaxes").innerHTML="Total: "+montanttotalApresTaxes.toFixed(2)+"$"; 
}
function afficherPanier(){
document.getElementById("zoneContenuItem").style.display="none";
document.getElementById("zoneContenuFacture").style.display="block";
let nbritem=document.getElementById("idItem").innerHTML;

if (nbritem==0){
  document.getElementById("idTotalAvantTaxes").innerHTML='';
  document.getElementById("idTotalApresTaxes").innerHTML='';
  document.getElementsByTagName("footer").style.top=400+"px";
  document.getElementsByTagName("footer").style.bottom=0+"px";
  document.getElementsByClassName('passerCommande').style.top=-130+'px';
}

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
if (nbritem==0){
  document.getElementById("idTotalAvantTaxes").innerHTML='';
  document.getElementById("idTotalApresTaxes").innerHTML='';
  document.getElementsByClassName("passerCommande").style.display="none";
}
else{
document.getElementsByClassName("passerCommande").style.display="block";
}
}

/////////////////////Update le prix si on change la quantite dans le combobox//////
function afficherQuantite(){
var total=0;
var qte=document.getElementById("idQuantite").value;
total=parseFloat(qte*49.95);
var prix= document.getElementById("spPrix").innerHTML=total.toFixed(2)+"$";;
}

/////Bouton passer a la caisse
function affichercaisse(){
window.open("caisse.html");
}
