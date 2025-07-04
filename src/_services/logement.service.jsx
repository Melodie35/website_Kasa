/**
 * Récupération de la liste des logements
 * @returns {Promise}
 */

let getAllLogement = () => {
    return fetch(`http://localhost:8080/api/properties`)
}

/**
 * Récupération d'un logement
 * @param {number} lid
 * @returns {Promise}
 */

let getLogement = (lid) => {
    return fetch(`http://localhost:8080/api/properties/${lid}`)
}


//Déclaration des services pour import
export const logementService = { 
    getAllLogement, getLogement
}
