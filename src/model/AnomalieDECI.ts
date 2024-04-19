export type AnomalieDECI = {
    'code'?: number;
    'texte'?: string;
    /**
    * Nomenclature de l\'indice de gravité : - 0 : Réserve ; - 1 : Anomalie ; - 2 : Anomalie bloquante.
    */
    'indice_de_gravite'?: IndiceDeGraviteEnum;
};

export enum IndiceDeGraviteEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
