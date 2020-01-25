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

     ajouterNoeud(){
         
     }

        afficherNoeud(){

        }
}

class Arbre{
    constructor(valeur){
        this.racine=new Noeud(valeur);
        this.racine.parent="pas de papa";
    }
    //la méthode qui permet d'ajouter un nœud dans un arbre binaire de recherche
    ajouterNoeud(valeur){
        const noeud=new Noeud(valeur);
    if (this.racine===undefined) {
         this.racine=noeud;
         return true;
    } else {
        let valeurRacine= this.racine.valeur;
       if (valeurRacine>valeur) {
           if (this.racine.gauche!==undefined) {
            this.racine.gauche.ajouterNoeud(valeur);
           } else {
               this.racine.gauche=noeud;
               this.gauche=noeud;
               this.gauche.parent=this.racine.valeur;
               return true;
           }
            
        }else if(valeurRacine<valeur){
            if (this.racine.droite!==undefined) {
                this.racine.droite.ajouterNoeud(valeur);
            } else{ 
                 this.racine.droite=noeud;
                 this.droite=noeud;
                 this.droite.parent=this.racine.valeur;
                return true; 
            }
           
        }
    }
}


// la méthode pour trouver une valeur donnée dans un arbre binaire de recherche
    trouverNoeud(){


    };
//la méthode pour afficher l’arbre selon un parcours infixe
    afficherArbre(){

    };
/*Écrire la méthode pour supprimer un nœud donné en distinguant trois cas :
Le nœud est une feuille -> suppression simple
Le nœud a un seul enfant -> il est remplacé par lui*/
    supprimerNoeud(){

    };

   
}

let arb = new Arbre(13);
arb.ajouterNoeud(30);
arb.ajouterNoeud(12);
arb.ajouterNoeud(40);
arb.ajouterNoeud(5);
arb.ajouterNoeud(60);
arb.ajouterNoeud(17);
arb.ajouterNoeud(88);

console.log(arb);