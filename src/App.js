/*

Template réalisée avec ReactJS & Bootstrap permettant de créer une macro skill en donnant un nom et en y ajoutant différents skills par Drag & Drop
Navigation :

- Menu principal orienté verticalement avec différents onglets
- Barre de recherche situé en haut de l'interface
- Onglet Macro-skills : Affichage des éléments sur la partie centrale de l'interface


TODO :
Finaliser l'implémentation du Drag & Drop après avoir cliqué sur le bouton Next dans l'onglet Macro-skills

> A l'aide de ReactDnD :
https://github.com/react-dnd/react-dnd
*/


import logo from './logo.svg';
import SideMenu from './composents/sideMenu';
import TopBar from './composents/topBar';
import React, {Component} from "react";


class App extends Component{

  render(){
    return(<div>

      {/*Affiche la barre de recherche*/}
      <TopBar/>

    {/*Affiche le menu vertical*/}
      <SideMenu/>


    </div>);

  }
}




export default App;
