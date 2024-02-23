/**
* Représente une adresse postale permettant de localiser un POI.
*/
export type AdressePostale = {
    'code_postal'?: string;
    'commune'?: string;
    'voie'?: string;
    'code_insee'?: string;
    'arrondissement'?: string;
    'latitude'?: number;
    'longitude'?: number;
    'localisation_operationnelle'?: string;
    'complement'?: string;
};
