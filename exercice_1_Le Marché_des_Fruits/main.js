let tab_fruit = [{ nom: "Pomme", prix: 2 }, { nom: "Banane", prix: 1.5 }, { nom: "Orange", prix: 3 }, { nom: "Raisin", prix: 4 }];

function afficherFruits(tab) {
    for (let fruit of tab)
        console.log("-", fruit.nom, ":", fruit.prix, "€")
}

afficherFruits(tab_fruit);

function estDisponible(fruit) {
    for (let fruits of tab_fruit)
        if (fruit === fruits.nom)
            return console.log("Le fruit", fruit, "est disponible à", fruits.prix, "€.")
    console.log("Désolé, nous ne vendons pas ce fruit.")

}

estDisponible("Pomme");


function calculerPrix(panier) {
    let res = 0
    for (let fruit of panier)
        res += fruit.prix
    console.log("Le prix du panier est de", res)

}

calculerPrix(tab_fruit)


function ajouterFruit() {
    let nom = prompt("Entrez le nom du fruit à ajouter :")
    let prix = parseFloat(prompt("Entrez le prix du fruit (en euros) :"))
    
    for (let fruits of tab_fruit)
        if (nom === fruits.nom)
            return console.log("Le fruit", nom, "existe déjà.")
    tab_fruit.push({ nom: nom, prix: prix })
    console.log("Le fruit", nom, "a été ajouté avec un prix de", prix, "€.")

}

ajouterFruit()


class Voiture {
    constructor(marque, modele, annee){
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }

    afficherVoiture(){
        console.log(`marque: ${this.marque}, modèle : ${this.modele}, annee : ${this.annee}`);
    }
}


const v1 = new Voiture("Audi", "Q7");
const v2 = new Voiture("Merco","G100");

v1.afficherVoiture();
v2.afficherVoiture();
