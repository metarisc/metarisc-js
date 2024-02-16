export type AnomalieDECI = {
    'code'?: string;
    'texte'?: string;
    'indice_de_gravite'?: IndiceDeGraviteEnum;
};

export enum IndiceDeGraviteEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
