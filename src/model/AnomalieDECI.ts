export type AnomalieDECI = {
    'code'?: string;
    'texte'?: string;
    'indiceDeGravite'?: IndiceDeGraviteEnum;
};

export enum IndiceDeGraviteEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
