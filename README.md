# Metarisc JS

La librairie Metarisc JS offre un accès simple et pratique à l'API Metarisc à partir d'applications écrites en langage JS. Elle comprend un ensemble de classes et de fonctions pour l'ensemble des ressources de l'API.

## NPM

Vous pouvez installer la librairie en utilisant [NPM](https://www.npmjs.com). Exécutez la commande suivante dans votre projet :

```bash
npm i @metarisc/metarisc-js
```

Pour utiliser la librairie, il suffit de l'importer comme ceci :

```php
import { Metarisc } from '@metarisc/metarisc-js';';
```

## Utilisation

### Requêtes

Pour effectuer une requête sur Metarisc, il faut tout d'adord initialisé le client metarisc de cette manière :

```ts
const m = new Metarisc({
  metarisc_url: "https://testlp7ijwog-mock.functions.fnc.fr-par.scw.cloud/", // url de l'api
});
m.dossiers.getDossier("123456");
m.dossiers.paginateDossier(2, 10);
```

Ensuite vous pouvez faire vos requêtes.

#### Requêtes simple

Pour faire l'appel API après initialisation du client, vous pouvez utiliser l'accès rapide à l'API souhaitée.

Exemple :

```ts
m.dossiers.getDossier("123456");
```

Le type de retour d'une requête simple est :

```ts
Promise<AxiosResponse<T>>;
```

(voir les documentations suivantes [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) et [AxiosResponse](https://axios-http.com/docs/res_schema))

#### Requêtes paginées

Pour récupérer des résultats paginés Metarisc (voir la [documentation](http://metarisc.fr/docs/api/#/#pagination)), il suffit de faire appel à l'api souhaitée de la même manière que pour une requête simple.

Exemple :

```ts
m.dossiers.paginateDossier(2, 10);
```

Le type de retour d'une requête paginée est :

```ts
AsyncGenerator<T>;
```

(voir la documentation suivante [AsyncGenerator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator))
