class Musicien {
    constructor(nom, date_entree_troupe, type) {
        if ((!nom) || (typeof nom != "string")) {
            throw new Error("Nom complet obligatoire !!!");
        }
        if (!(date_entree_troupe instanceof Date)) {
            throw new Error("Date_entree_troupe mal saisie !!!");
        }
        const types_possibles = new Set(["Guitariste", "Pianiste", "Batteur", "Chanteur"]);
        if (!types_possibles.has(type)) {
            throw new Error(`Le type :${type} est invalide !`)

        }








        this.nom = nom;
        this.date_entree_troupe = date_entree_troupe;
        this.type = type;
        this.leader = false;

    }


    sePresenter() {
        console.log("Je m'appelle", this.nom, "et j'ai rejoint la troupe le", this.date_entree_troupe.toLocaleDateString("fr"), ".");
    }


    chanter() {
        console.log("Je chante avec passion !");
    }
}

class Guitariste extends Musicien {
    constructor(nom, date_entree_troupe, type) {
        super(nom, date_entree_troupe, type);
    }

    jouer() {
        console.log(this.nom, "joue un solo époustouflant à la guitare !")
    }

    chanter() {
        console.log("Je chante en jouant de la guitare, quel talent !");
    }

}





class Pianiste extends Musicien {
    constructor(nom, date_entree_troupe, type) {
        super(nom, date_entree_troupe, type);
    }
    jouer() {
        console.log(this.nom, "joue une mélodie majestueuse au piano !")
    }

    chanter() {
        console.log("Je chante en jouant du piano, quel talent !");
    }


}



class Batteur extends Musicien {
    constructor(nom, date_entree_troupe, type) {
        super(nom, date_entree_troupe, type);
    }

    jouer() {
        console.log(this.nom, "enflamme la scène avec un rythme endiablé !")
    }

    chanter() {
        console.log("Je chante en jouant de la batterie, quel talent !");
    }



}



class Chanteur extends Musicien {
    constructor(nom, date_entree_troupe, type) {
        super(nom, date_entree_troupe, type);
    }


    chanter() {
        console.log("Je Je suis le chanteur principal et je donne de la voix pour le groupe ! avec passion !");
    }

}


class Troupe {
    constructor(musiciens = []) {
        this.musiciens = musiciens;
    }


    ajouterMusicien(musicien) {

        const nom_identique_trouve = this.musiciens.find(element => element.nom === musicien.nom);
        if (nom_identique_trouve) {
            throw new Error(`Un musicien de la troupe porte déjà le nom :${nom_identique_trouve.nom}`)
        } else {
            this.musiciens.push(musicien);
            console.log("Le musicien", musicien.nom, "à été ajouté dans la troupe !!")
        }
        this.verifierLeader();





    }

    verifierLeader() {

        const leader_trouvee = this.musiciens.find(element => element.leader === true);
        if (!leader_trouvee) {
            const new_leader_chanteur = this.musiciens.find(element => element instanceof Chanteur);
            if (new_leader_chanteur) {
                new_leader_chanteur.leader = true;
                console.log("Le chanteur :", new_leader_chanteur.nom, "est le leader !");
            } else {
                const new_leader_musicien = this.musiciens.find(element => element instanceof Musicien);
                if (new_leader_musicien) {
                    new_leader_musicien.leader = true;
                    console.log("Le musicien :", new_leader_musicien.nom, "est le leader !");
                } else {
                    console.log("Aucun musicien a été trouvé !");
                }

            }

        }
    }


    afficherTroupe() {
        for (const element of this.musiciens) {
            if (element.leader === true) {
                console.log("LEADER --> nom :", element.nom, "est entré dans la troupe le :", element.date_entree_troupe.toLocaleDateString("fr"), "rôle :", element.type);


            } else {
                console.log("nom :", element.nom, "est entré dans la troupe le :", element.date_entree_troupe.toLocaleDateString("fr"), "rôle :", element.type);
            }
        }
    }

    sauvegarderTroupe() {
        const sauvegarder_troupe = JSON.stringify(this.musiciens);
        localStorage.setItem("sauvegarde de la troupe de musiciens2", sauvegarder_troupe);
        console.log("Troupe sauvegardée avec succès.");


    }


    chargerTroupe() {
        const recup_troupe_json = localStorage.getItem("sauvegarde de la troupe de musiciens2");
        if (recup_troupe_json) {
            const json_vers_js = JSON.parse(recup_troupe_json);

            json_vers_js.forEach(element => {
                let musicien;
                switch (element.type) {
                    case "Chanteur":
                        musicien = new Chanteur(element.nom, new Date(element.date_entree_troupe), element.type);
                        break;
                    case "Guitariste":
                        musicien = new Guitariste(element.nom, new Date(element.date_entree_troupe), element.type);
                        break;

                    case "Batteur":
                        musicien = new Batteur(element.nom, new Date(element.date_entree_troupe), element.type);
                        break;

                    case "Pianiste":
                        musicien = new Pianiste(element.nom, new Date(element.date_entree_troupe), element.type);
                        break;

                    default:
                        throw new Error(`Le rôle :${element.type} n'existe pas !`);
                        break;

                }

                this.musiciens.push(musicien);

            });

            console.log("Troupe rechargée depuis le LocalStorage.")

        } else {
            throw new Error("Données non trouvées !!");

        }
    }
    

}







// const musicien1 = new Chanteur("Alice Dupont", new Date(2023, 4, 15), "Chanteur");
// const musicien2 = new Guitariste("Bob Martin", new Date(2022, 6, 20), "Guitariste");
// const musicien3 = new Pianiste("Clara Lefevre", new Date(2010, 7, 2), "Pianiste");
// const musicien4 = new Batteur("David Leroy", new Date(2004, 8, 30), "Batteur");

// const musicien5 = new Chanteur("Emma Durand", new Date(2015, 1, 10), "Chanteur");
// const musicien6 = new Guitariste("Felix Marchand", new Date(2018, 10, 5), "Guitariste");
// const musicien7 = new Pianiste("George Martin", new Date(2013, 11, 22), "Pianiste");
// const musicien8 = new Batteur("Hélène Roy", new Date(2009, 3, 14), "Batteur");

// const musicien9 = new Chanteur("Lucas Bernard", new Date(2020, 0, 4), "Chanteur");
// const musicien10 = new Guitariste("Marie Laurent", new Date(2016, 11, 17), "Guitariste");
// const musicien11 = new Pianiste("Nathan Dubois", new Date(2014, 9, 30), "Pianiste");
// const musicien12 = new Batteur("Olivier Girard", new Date(2012, 3, 8), "Batteur");

// const musicien13 = new Chanteur("Rachel Lefevre", new Date(2018, 11, 23), "Chanteur");
// const musicien14 = new Guitariste("Sophie Pires", new Date(2017, 4, 12), "Guitariste");
// const musicien15 = new Pianiste("Thomas Durand", new Date(2016, 1, 18), "Pianiste");
// const musicien16 = new Batteur("Ulysse Petit", new Date(2015, 7, 5), "Batteur");

// const musicien17 = new Chanteur("Xavier Dupuis", new Date(2014, 8, 15), "Chanteur");
// const musicien18 = new Guitariste("Yasmine Boucher", new Date(2022, 3, 22), "Guitariste");
// const musicien19 = new Pianiste("Zoé Benard", new Date(2021, 5, 14), "Pianiste");
// const musicien20 = new Batteur("Alexis Charpentier", new Date(2013, 2, 25), "Batteur");

// const musicien21 = new Chanteur("Benoît Lefevre", new Date(2020, 4, 10), "Chanteur");
// const musicien22 = new Guitariste("Catherine Moreau", new Date(2019, 9, 17), "Guitariste");
// const musicien23 = new Pianiste("Doriane Robert", new Date(2022, 6, 11), "Pianiste");
// const musicien24 = new Batteur("Ethan Gauthier", new Date(2021, 11, 3), "Batteur");

// const musicien25 = new Chanteur("Fabienne Dufresne", new Date(2016, 2, 22), "Chanteur");
// const musicien26 = new Guitariste("Gérald Lefevre", new Date(2018, 5, 19), "Guitariste");
// const musicien27 = new Pianiste("Héloïse Bertrand", new Date(2020, 10, 28), "Pianiste");
// const musicien28 = new Batteur("Igor Delaunay", new Date(2014, 8, 5), "Batteur");

// const musicien29 = new Chanteur("Jade Dufresne", new Date(2017, 9, 15), "Chanteur");
// const musicien30 = new Guitariste("Kevin Lemoine", new Date(2021, 7, 27), "Guitariste");



const troupe = new Troupe();

// troupe.ajouterMusicien(musicien1);
// troupe.ajouterMusicien(musicien2);
// troupe.ajouterMusicien(musicien3);
// troupe.ajouterMusicien(musicien4);

// troupe.ajouterMusicien(musicien5);
// troupe.ajouterMusicien(musicien6);
// troupe.ajouterMusicien(musicien7);
// troupe.ajouterMusicien(musicien8);

// troupe.ajouterMusicien(musicien9);
// troupe.ajouterMusicien(musicien10);
// troupe.ajouterMusicien(musicien11);
// troupe.ajouterMusicien(musicien12);

// troupe.ajouterMusicien(musicien13);
// troupe.ajouterMusicien(musicien14);
// troupe.ajouterMusicien(musicien15);
// troupe.ajouterMusicien(musicien16);

// troupe.ajouterMusicien(musicien17);
// troupe.ajouterMusicien(musicien18);
// troupe.ajouterMusicien(musicien19);
// troupe.ajouterMusicien(musicien20);

// troupe.ajouterMusicien(musicien21);
// troupe.ajouterMusicien(musicien22);
// troupe.ajouterMusicien(musicien23);
// troupe.ajouterMusicien(musicien24);

// troupe.ajouterMusicien(musicien25);
// troupe.ajouterMusicien(musicien26);
// troupe.ajouterMusicien(musicien27);
// troupe.ajouterMusicien(musicien28);

// troupe.ajouterMusicien(musicien29);
// troupe.ajouterMusicien(musicien30);



troupe.sauvegarderTroupe();
// troupe.chargerTroupe();
// troupe.afficherTroupe();

