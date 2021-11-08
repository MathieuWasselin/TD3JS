// Action pour bouton accepter = Barre de cookie qui disparait.
document.getElementById("buttonAccept").addEventListener("click", hideModal) // hidemodal = fonction que l'on nomme
function hideModal(){
document.getElementById("footer").style.display = "none";  
}
// Action pour bouton Personnaliser = Fenetre modale qui apparait.
document.getElementById("buttonPersonalize").addEventListener("click", showModal) 
function showModal (){
document.getElementById("fenetremodale").style.display = "block";
}






// document.getElementById("id1").style.display = "none";
// document.getElementById("id2").style.display = "block";




// function fenetremodale(){ 


// document.getElementById("id1").innerHTML("click", );
// document.getElementById("id2").("click",);

// }