

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

afficherArbre(){
    if(this.racine!==undefined){
       return this.racine.afficherNoeud();
    }else{
        return "Pas d'arbre";
    }
    
};

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
