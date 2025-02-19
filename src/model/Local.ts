// File generated from our OpenAPI spec

export type Local = {
    'nom_du_local': string | null;
    'etage_du_local': number | null;
    'type_de_risque': TypeDeRisqueEnum | null;
    'local_informations_complementaires': string | null;
};

export enum TypeDeRisqueEnum {
    RISQUE_COURANT = 'Risque Courant',
    RISQUE_MOYEN = 'Risque Moyen',
    RISQUE_IMPORTANT = 'Risque Important'
}
