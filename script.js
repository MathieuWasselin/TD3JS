// Action pour bouton accepter = Barre de cookie qui disparait.
document.getElementById("buttonAccept").addEventListener("click", hideModal) // hidemodal = fonction que l'on nomme
function hideModal(){
document.getElementById("footer").style.display = "none";  // instruction que l'on donne à la fonction = disparition du footer (barre de cookie) à l'evenement "click".
}
// Action pour bouton Personnaliser = Fenetre modale qui apparait.
document.getElementById("buttonPersonalize").addEventListener("click", showModal) 
function showModal (){
document.getElementById("fenetremodale").style.display = "block";
}

// Action pour changement de couleur du bouton.
function changeColorAccept(){
this.style.backgroundColor = "green";
let buttonReverse = this.getAttribute("data-inverse");
document.getElementById(buttonReverse).style.backgroundColor = "#D3D3D3"; // Bouton qui redevient gris lors du click du bouton d'en face.


}

document.getElementById("acceptContent").addEventListener("click", changeColorAccept); // Bouton acceptContent qui prend la couleur verte au "click".

document.getElementById("acceptPublicity").addEventListener("click", changeColorAccept); // Bouton acceptPublicity qui prend la couleur verte au "click".

document.getElementById("acceptMeasure").addEventListener("click", changeColorAccept); // Bouton acceptMeasure qui prend la couleur verte au "click".


function changeColorDeclined(){

this.style.backgroundColor = "red";
let buttonReverse = this.getAttribute("data-inverse");
document.getElementById(buttonReverse).style.backgroundColor = "#D3D3D3"; 

    

    }
    
    document.getElementById("refuseContent").addEventListener("click", changeColorDeclined); // Bouton refuseContent qui prend la couleur rouge au "click".
    
    document.getElementById("refusePublicity").addEventListener("click", changeColorDeclined); // Bouton refusePublicity qui prend la couleur rouge au "click".
    
    document.getElementById("refuseMeasure").addEventListener("click", changeColorDeclined); // Bouton refuseMeasure qui prend la couleur rouge au "click".
    

