/**
 * Metarisc API
 * ## Introduction à l\'API  Metarisc API est construite autour de REST. L\'API a des URL orientées ressources, accepte des corps de requête encodés JSON, renvoie des réponses encodées JSON et utilise des codes de réponse et des verbes HTTP standards.  Tous les transferts de données sont conformes au protocole HTTP 1.1 et tous les points de terminaison nécessitent le protocole HTTPS. Puisque l’API Metarisc est basée sur le protocole HTTP, elle est compatible avec tous les langages qui ont une bibliothèque HTTP, comme cURL.  Metarisc API ne supporte pas les mises à jour en masse. Vous ne pouvez travailler qu\'avec un objet par requête.  ## Authentification par tokens d’accès  Pour intérargir avec l\'API Metarisc, vous devez enregistrer votre application. L\'authentification Metarisc utilise OpenID Connect, un standard ouvert utilisé par beaucoup de fournisseurs d\'API. OpenID Connect permet aux utilisateurs d\'autoriser votre application sans donner leur mot de passe.  Les tokens d’accès permettent à votre application d’accéder à l’API Metarisc. Presque tous les points de terminaison de l’API Metarisc exigent un token d’accès. Votre demande peut donc en nécessiter un chaque fois que vous accédez à un point de terminaison. Ils remplissent généralement deux fonctions : - Ils permettent à votre application d’accéder aux informations d’un utilisateur sans avoir besoin du mot de passe de ce dernier ; Par exemple, votre application a besoin de l’e-mail d’un utilisateur pour exécuter une fonction. - Ils nous permettent d’identifier votre application, son utilisateur et le type de données que celui-ci permet à votre application de consulter.  Tous les appels à l\'API Metarisc doivent se faire en HTTPS. Les appels en HTTP échoueront.  ## Gestion des erreurs  L\'API Metarisc utilise les codes de réponse HTTP conventionnels pour indiquer si une requête HTTP a été exécutée avec succès ou non. En général : Les codes 2xx indiquent un succès. Les codes 4xx indiquent une erreur côté client (un paramètre requis non donné, etc ..). Les codes 5xx indiquent une erreur avec le service Metarisc.  Certains codes 4xx peuvent être gérés par l\'application elle même, l\'API Metarisc donne un code d\'erreur qui décrit brièvement l\'erreur levée.  Les erreurs retournées par Metarisc suivent la [RFC 7807](https://www.rfc-editor.org/rfc/rfc7807). Les erreurs peuvent avoir ces propriétés :  - type (string) : Une référence Uri qui identifie le type de problème ; - title (string) : Un résumé du type d\'erreur rencontré : - status_code (int) : le code de réponse HTTP généré par l\'API Metarisc ; - detail (string) : La description complète de l\'erreur rencontrée ;  ## Format des dates  Les formats de date et d\'heure causent beaucoup de problèmes de confusion et d\'interopérabilité sur les services Internet. Cette section aborde les standards qu\'utilise l\'API Metarisc pour améliorer la cohérence et l\'interopérabilité lors des représentations et des utilisations de la date et de l\'heure.  La représentation numérique de la date, de l\'heure, des durées et des intervales dans Metarisc suit la norme ISO 8601.  Exemple : - Une date suit le format Y-m-d\\TH:i:sP (exemple : 2021-01-03T02:30:00+01:00)  ## Pagination  L\'API Metarisc fournit un système de pagination pour l\'ensemble des points de terminaison donnant des listes de résultats. Par exemple, vous pouvez lister l\'ensemble des PEI sur une zone, l\'ensemble des utilisateurs liés à un dossier d\'étude.  Ces points de terminaisons partagent une structure commune :  ```json {   \"data\": [...],   \"meta\": {     \"pagination\": {       \"total\": int,       \"count\": int,       \"per_page\": int,       \"current_page\": int,       \"total_pages\": int     }   } } ```  Les réponses paginées représentent une page, triée grâce à une logique (sous réserve de l\'existence du paramètre ```sort```).  Si vous ne spécifiez pas les paramètres ```page``` et ```per_page```, vous recevrez la première page contenant les 25 premiers éléments. Vous pouvez configurer ```page``` et ```per_page``` dans les paramètres de requête.
 *
 * OpenAPI spec version: 1.0
 * Contact: contact@metarisc.fr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AnomalieDECI } from '../../src/models/AnomalieDECI';

import { DescriptifTechniqueBase } from '../models/DescriptifTechniqueBase';


export type DescriptifTechniqueDECIBase = DescriptifTechniqueBase & { 
    'anomalies'?: Array<AnomalieDECI>;
    'estReglementaire'?: boolean;
    'estReforme'?: boolean;
    'domanialite'?: DomanialiteEnum;
    'estConforme'?: boolean;
    'performanceTheorique'?: number;
    'performanceReelle'?: number;
};

export enum DomanialiteEnum {
    Privee = 'privee',
    Publique = 'publique',
    PriveeConventionnee = 'privee_conventionnee'
}

