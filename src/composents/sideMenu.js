/*

  Composent du menu principal contenant les menus deroulants

*/

import "./sideMenu.css";
import MacroSkillsPage from './macroSkillsPage';
import TopBar from './topBar';
import React, {Component} from "react";


  //Permet d'afficher ou de cacher les items des menus déroulants
  function showDropItems()
  {
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
  }
  }



//Menu vertical
class SideMenu extends Component{


  state = {

    //Défini si l'on affiche la page des MacroSkills ou non
    afficherPageMacroSkills: false,
  }

  //QUand on clique sur l'onglet Macro Skills, on demande à afficher les éléments correspondants
  estCliquéBoutonAffichageMacroSkills = () => {
   this.setState({afficherPageMacroSkills: true});
  };



  render(){
    return(
<>

    {/*Affichage du menu vertical ainsi que des menus déroulants*/}
    <div class="sidenav">
        <h2>TEMPLATE</h2>
        <button class="dropdown-btn" onClick={showDropItems}>Skills Structuring</button>

          <div class="dropdown-container">
            <a href="#Skills">Skills</a>
            <a href="#MacroSkills" onClick={this.estCliquéBoutonAffichageMacroSkills}>Macro-skills</a>
            <a href="#">Blocks</a>
          </div>

        <button class="dropdown-btn" onClick={showDropItems}>Creation of activities</button>

          <div class="dropdown-container">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>


        <button class="dropdown-btn" onClick={showDropItems}>Broadcasting</button>

          <div class="dropdown-container">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>

    </div>



      <div id = "IDPageMacroSkills">
          {/*Lorsque afficherPageMacroSkills retourne true, on appelle le composent MacroSkillsPage afin d'afficher les éléments*/}
          {this.state.afficherPageMacroSkills && <MacroSkillsPage/>}
      </div>



       </>

);

  }
}


export default SideMenu;
