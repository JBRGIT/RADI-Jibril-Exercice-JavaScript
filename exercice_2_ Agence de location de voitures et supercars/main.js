class Voiture {

    constructor(marque, modele, prixParJour, disponible) {
        this.marque = marque;
        this.modele = modele;
        this.prixParJour = prixParJour;
        this.disponible = disponible;

    }

    louer() {
        if (this.disponible === true) {
            this.disponible = false
            return console.log("Vous avez loué la voiture", this.marque, this.modele, "pour", this.prixParJour, "€ par jour.")
        } else {
            throw new Error("La voiture", this.marque, this.modele, "est déjà louée")
        }
    }



    retourner() {
        if (this.disponible === false) {
            this.disponible = true
            return console.log("la voiture est retournée et est de nouveau dispo :", this.marque, this.modele)
        }
        else {
            throw new Error("La voiture est déjà dispo")
        }
    }
}

let v1 = new Voiture("Peugot", "208", 50, true)
let v2 = new Voiture("Renault", "Clio", 45, true);
let v3 = new Voiture("Toyota", "Yaris", 40, false);








class Supercar extends Voiture {
    constructor(marque, modele, prixParJour, disponible, vitesseMax) {
        super(marque, modele, prixParJour, disponible);
        this.vitesseMax = vitesseMax;
    }


    activerTurbo() { console.log("Le turbo est acitivé avec la vitesse maximale.") }
}

let s1 = new Supercar("Ferrari", "488 GTB", 1000, true, 350);
let s2 = new Supercar("Lamborghini", "Aventador", 1200, true, 400);
let s3 = new Supercar("Porsche", "911 Turbo", 950, false, 320);





class AgenceLocation {
    constructor(voitures = []) {
        this.voitures = voitures;
    }

    ajouterVoiture(voiture) {
        this.voitures.push(voiture);
        console.log(`La voiture de marque ${voiture.marque} a été ajoutée.`);
    }

    afficherCatalogue(type) {
        for (let element of this.voitures) {
            if (type === "tous" && element.disponible === true) {
                console.log(`${element.marque} : ${element.modele} est dispo`);
            }
            else if (type === "voiture" && element.disponible === true && !(element instanceof Supercar)) {
                console.log(`${element.marque} : ${element.modele} est une voiture dispo`);
            }

            else if (type === "supercar" && element.disponible === true && element instanceof Supercar) {
                console.log(`${element.marque} : ${element.modele} est une supercar dispo`);
            }
        }

    }






    louerVoiture(marque, modele) {
        let vehiculeTrouvee = this.voitures.find(element => element.marque === marque && element.modele === modele);

        if (vehiculeTrouvee) {

            vehiculeTrouvee.louer();

        }

        else {
            throw new Error(`La voiture : ${marque} ${modele}  n'existe pas !`);
        }

    }


    retournerVoiture(marque, modele) {
        let vehiculeTrouvee = this.voitures.find(element => element.marque === marque && element.modele === modele);
        if (vehiculeTrouvee) {
            vehiculeTrouvee.retourner();
        } else {
            throw new Error(`La voiture : ${marque} ${modele}  n'existe pas !`);
        }
    }
}



let agence = new AgenceLocation();

agence.ajouterVoiture(v1);
agence.ajouterVoiture(v2);
agence.ajouterVoiture(v3);
agence.ajouterVoiture(s1);
agence.ajouterVoiture(s2);
agence.ajouterVoiture(s3);


// agence.afficherCatalogue("tous");
// agence.afficherCatalogue("supercar");
// agence.afficherCatalogue("voiture");

// agence.louerVoiture("Peugot", "208");
// agence.retournerVoiture("Peugot", "208");




function menu() {

    alert("MENU PRINCIPAL : \n\n     1 : Afficher toutes les voitures.\n     2 : Afficher uniquement les supercars.\n     3 : Afficher uniquement les voitures standards.\n     4 : Louer une voiture.\n     5 : Retourner une voiture.\n     6 : Quitter le programme.")
    const nb = parseInt(prompt("Entrez le numéro de la section souhaitez"));

    switch (nb) {
        case 1:
            alert("Afficher toutes les voitures.")
            agence.afficherCatalogue("tous");
            break;

        case 2:
            alert("Afficher uniquement les supercars.")
            agence.afficherCatalogue("supercar");
            break;

        case 3:
            alert("Afficher uniquement les voitures standards.")
            agence.afficherCatalogue("voiture");
            break;
        case 4:
            alert("Louer une voiture.");
            const lmarque = prompt("Entrez la marque à louer");
            const lmodele = prompt("Entrez le modèle à louer");
            agence.louerVoiture(lmarque, lmodele);
            break;

        case 5:
            alert("Retourner une voiture.");
            const rmarque = prompt("Entrez la marque à retourner");
            const rmodele = prompt("Entrez le modèle à retourner");
            agence.retournerVoiture(rmarque, rmodele);
            break;

        case 6:
            alert("Au revoir !");
            break;

        default:
            alert("Choix invalide !");
    }
}




