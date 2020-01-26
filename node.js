/**
 * Exercice 1.2.5 : Explorer un arbre (JavaScript)
Dans le langage de programmation de votre choix : 

Ecrire la méthode qui permet d'ajouter un nœud dans un arbre binaire de recherche

Définir la méthode pour trouver une valeur donnée dans un arbre binaire de recherche

Écrire la méthode pour afficher l’arbre selon un parcours infixe

[optionnel] Écrire la méthode pour supprimer un nœud donné en distinguant trois cas :

Le nœud est une feuille -> suppression simple

Le nœud a un seul enfant -> il est remplacé par lui

Le nœud à deux enfants, on le remplace alors par le nœud le plus proche, c’est à dire le nœud le plus à droite de l’arbre gauche ou le plus à gauche de l'arbre droit.

 Un arbre est constitué de noeuds 
Un arbre binaire est un arbre de degrés 2 sa taille (=racine+taille(filsGauche)+taille(filsDroite))
chaque noeud ds un arbre binaire a que 2 enfants .. un arbre binaire se remplie de gauche vers la droite ..la valeur de gauche est supp à celle de droite

une feuille est un noeud qui n'a pas d'enfants 
Pour un noeud donné, ses enfants à gauches sont inférieurs et ses enfants à droite sont supérieurs
gauche<racine<droite
*/ 

class Noeud{
    constructor(valeur){
        this.valeur=valeur,
        this.gauche=undefined;
        this.droite=undefined;
        this.parent=undefined;
    }

 ajouterNoeud(valeur){
    const noeud=new Noeud(valeur);
    let valeurRacine= this.valeur;
    if (valeurRacine>valeur) {
        if (this.gauche!==undefined) {
         this.gauche.ajouterNoeud(valeur);
        } else {
            this.gauche=noeud;
           this.gauche.parent=this.valeur;
            return true;
        }
         
     }else if(valeurRacine<valeur){
         if (this.droite!==undefined) {
            this.droite.ajouterNoeud(valeur);
         } else{ 
              this.droite=noeud;
              this.droite.parent=this.valeur;
             return true; 
         }
        
     }
 }
    

    afficherNoeud(){
    let noeudG = " ";
    let noeudD= " ";
  
        if (this.gauche!==undefined) {
           noeudG+= this.gauche.afficherNoeud(); 
         }
          if(this.droite!==undefined) {
             noeudD+=this.droite.afficherNoeud();
        }
        
        return(noeudG+this.valeur+noeudD);
    }

    trouverNoeud(valeur){
    let noeud = this.valeur;
        if (noeud<valeur) {
            if(this.droite!==undefined ) {
                this.droite.trouverNoeud(valeur);
            }else{
                console.log( "Noeud "+valeur+" pas trouvé ds l'arbre ! ");
            }
              
          }else if (this.valeur>valeur) {
            if (this.gauche!==undefined) {
                this.gauche.trouverNoeud(valeur);
            }else{
                console.log(  "Noeud "+valeur+" pas trouvé ds l'arbre ! ");
            }
            
          }else{
            console.log( "Noeud "+noeud+ " trouvé");
          }
             
    }
}

class Arbre{
constructor(valeur){
    this.racine=new Noeud(valeur);
    this.racine.parent="pas de papa";
}
//la méthode qui permet d'ajouter un nœud dans un arbre binaire de recherche
ajouterNoeuds(valeur){
    const noeud=new Noeud(valeur);
if (this.racine===undefined) {
     this.racine=noeud;
     return true;
} else {
 this.racine.ajouterNoeud(valeur);
 return true;
}
}


// la méthode pour trouver une valeur donnée dans un arbre binaire de recherche
trouverNoeud(valeur){
    if (this.racine===undefined) {
        return "Arbre vide ! ";
    } else {
         this.racine.trouverNoeud(valeur);
    }
};
//la méthode pour afficher l’arbre selon un parcours infixe
/**
 * Pour afficher un arbre selon un parcours infixe je commence par les noeuds toutes a gauche jusqu'au noeuds toute à droite
 */
afficherArbre(){
    if(this.racine!==undefined){
       return this.racine.afficherNoeud();
    }else{
        return "Pas d'arbre";
    }
    
};
/*Écrire la méthode pour supprimer un nœud donné en distinguant trois cas :
Le nœud est une feuille -> suppression simple
Le nœud a un seul enfant -> il est remplacé par lui*/
supprimerNoeud(){

};


}

let arb = new Arbre(13);
arb.ajouterNoeuds(30);
arb.ajouterNoeuds(12);
arb.ajouterNoeuds(40);
arb.ajouterNoeuds(5);
arb.ajouterNoeuds(60);
arb.ajouterNoeuds(17);
arb.ajouterNoeuds(88);
//let arbre=arb.afficherArbre();
let arbre=arb.trouverNoeud(60);
console.log(arbre);
