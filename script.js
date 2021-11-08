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

// Action pour changement de couleur du bouton.
function changeColorAccept(){
this.style.backgroundColor = "green";
let buttonReverse = this.getAttribute("data-inverse");
document.getElementById(buttonReverse).style.backgroundColor = "#D3D3D3";


}

document.getElementById("acceptContent").addEventListener("click", changeColorAccept);

document.getElementById("acceptPublicity").addEventListener("click", changeColorAccept);

document.getElementById("acceptMeasure").addEventListener("click", changeColorAccept);


function changeColorDeclined(){

this.style.backgroundColor = "red";
let buttonReverse = this.getAttribute("data-inverse");
document.getElementById(buttonReverse).style.backgroundColor = "#D3D3D3";

    

    }
    
    document.getElementById("refuseContent").addEventListener("click", changeColorDeclined);
    
    document.getElementById("refusePublicity").addEventListener("click", changeColorDeclined);
    
    document.getElementById("refuseMeasure").addEventListener("click", changeColorDeclined);
    

