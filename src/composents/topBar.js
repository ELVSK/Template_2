import React, { useState } from "react";
import "../topBar.css";

function TopBar() {

return (

  /*Affiche la barre de recherche en haut de la page*/
  <div class="barre-horizontale">
    <div class="search-container">
        <input id = "searchBar" type="text" placeholder="Search.."/>
    </div>
  </div>

);

//Permet d'enregistrer la recherche saisie
var recherche = document.getElementById("searchBar").value;

}

export default TopBar;
