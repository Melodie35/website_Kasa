/**
 * Récupération de la liste des logements
 * @returns {Promise}
 */

let getAllLogement = () => {
    fetch(`http://localhost:8080/api/properties`)
}


//Déclaration des services pour import
export const logementService = { getAllLogement }
