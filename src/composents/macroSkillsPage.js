/*

  Composent de la page Macro SKills Creation

*/

import "../macroSkillsPage.css";

import React, {Component} from "react";
import ReactScrollableList from './react-scrollable-list'


//Permet de remplir la liste déroulante de l'étape 2
let listItems = []
      for (let i = 0; i < 20; i++) {
        listItems.push({ id: i, content: "Skill name here" })
      }

var saisie;





//Page MacroSkills
class MacroSkillsPage extends Component{
  state = { value: '' }


  /*Permet de vérifier le contenu du champ de texte*/
  verifierSaisie = (e) => {
    saisie = document.getElementById("saisieNomMacroID").value;

    //Permet de bloquer le bouton Next dans le cas où le champ de texte est vide
    this.setState({ value: e.target.value });


    /*Si la saisie n'est pas vide, on change l'aspect du bouton Next, de même s'il est vide*/
    if(saisie != "")
    {
      document.getElementById("nextButton").style.backgroundColor = "red";
      document.getElementById("nextButton").style.color = "white";
    }
    else
    {
      document.getElementById("nextButton").style.backgroundColor = "grey";
      document.getElementById("nextButton").style.color = "white";
    }
  };



/*Permet d'afficher les éléments de l'étape 2 après avoir cliqué sur Next*/
  afficherGroupeEtape2 = () => {
    document.getElementById("groupeEtape1").style.display = "none";
    document.getElementById("groupeEtape2").style.display = "block";
    document.getElementById("boutonEtape1ID").style.backgroundColor = "grey";
    document.getElementById("boutonEtape2ID").style.backgroundColor = "red";
}


/*Permet d'afficher les éléments de l'étape 1 après avoir cliqué sur Previous*/
  afficherGroupeEtape1 = () => {
    document.getElementById("groupeEtape1").style.display = "block";
    document.getElementById("groupeEtape2").style.display = "none";
    document.getElementById("boutonEtape1ID").style.backgroundColor = "red";
    document.getElementById("boutonEtape2ID").style.backgroundColor = "grey";
    document.getElementById("saisieNomMacroID").value = "";
  }



  render(){
    return(
      <>
          {/*Affichage du titre et des icônes indiquant l'actuelle*/}
          <h2 class = "classMacroSkills">Macro-skill creation</h2>}
          <button id = "boutonEtape1ID" type="button" class="classMacroSkills styleBouton" style={{backgroundColor : "red"}} disabled> <p id = "texteBoutonEtape1ID" class = "tailleTexteBoutons" style={{color : "white"}}> STEP 1 <br/> <b> Macro skills details</b> </p>  </button>
          <button id = "boutonEtape2ID" type="button" class="styleBouton" style={{backgroundColor : "grey"}} disabled> <p id = "texteBoutonEtape1ID" class = "tailleTexteBoutons" style={{color : "white"}}> STEP 2 <br/> <b> Skills selection</b> </p>  </button>


          {/*Les éléments à afficher à l'étape 1*/}
          <div id = "groupeEtape1" class = "classMacroSkills">
            <p> Macro-skill goes here </p>
            <input id ="saisieNomMacroID" type="text" class="classSaisieNomMacro" placeholder="" aria-label="macro-skill-name" onChange={this.verifierSaisie} value={this.state.value}/>
            <button disabled={!this.state.value} id = "nextButton" class="btn-next" style = {{backgroundColor: "grey", Color: "white"}} onClick={this.afficherGroupeEtape2}> Next </button>
          </div>



          {/*Les éléments à afficher à l'étape 2*/}
          <div id = "groupeEtape2"  class = "classMacroSkills" style = {{display: "none"}}>
            <div>
              <button class = "skillsAjoutés"> Skill name here </button>
              <button class = "skillsAjoutés" style = {{left: "40%"}}> Skill name here </button>
            </div>


            <div class = "surfaceDroppable"></div>

            <div class = "listeSkills-container">
              <h3 class = "listeSkills-titre"> Skills </h3>

              <input class = "listeSearchBar" id = "searchBar" type="text" placeholder="Search.."/>
              <ReactScrollableList
                  listItems={listItems}
                  heightOfItem={30}
                  maxItemsToRender={20}
                  style={{ color: '#333' }}
              />
            </div>
          <button id = "previousButton" class="btn-prev" onClick = {this.afficherGroupeEtape1}> Previous </button>
        </div>
</>
  );

  }
}


export default MacroSkillsPage;
